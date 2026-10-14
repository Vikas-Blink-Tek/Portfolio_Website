// Supabase: submitted requests are saved to the `withdrawals` table (see supabase.sql).
// The publishable key is safe to expose in the browser; RLS only allows inserts.
const SUPABASE_URL = "https://smwfnxztjycmglarzvyd.supabase.co";
const SUPABASE_KEY = "sb_publishable_VFxZ_fd9NtP-Hv2zKssOMg_sAXBEphV";

const FEE_RATE = 0.01;
const PROCESSING_SECONDS = 15;

// Minimum withdrawal per currency
const MIN_AMOUNT = { USD: 10, EUR: 10, GBP: 10, INR: 500, AED: 50, CAD: 15, AUD: 15, SGD: 15, CHF: 10 };

// Bank details required per country:
//   iban     → IBAN (+ SWIFT/BIC)
//   ifsc     → account number + IFSC
//   aba      → account number + ABA routing number
//   sortcode → account number + sort code
//   generic  → account number + SWIFT/BIC
const COUNTRIES = [
  ["US", "United States", "aba"],
  ["GB", "United Kingdom", "sortcode"],
  ["IN", "India", "ifsc"],
  ["AE", "United Arab Emirates", "iban"],
  ["AU", "Australia", "generic"],
  ["AT", "Austria", "iban"],
  ["BE", "Belgium", "iban"],
  ["BR", "Brazil", "generic"],
  ["CA", "Canada", "generic"],
  ["DK", "Denmark", "iban"],
  ["FI", "Finland", "iban"],
  ["FR", "France", "iban"],
  ["DE", "Germany", "iban"],
  ["HK", "Hong Kong", "generic"],
  ["IE", "Ireland", "iban"],
  ["IT", "Italy", "iban"],
  ["JP", "Japan", "generic"],
  ["KE", "Kenya", "generic"],
  ["MY", "Malaysia", "generic"],
  ["MX", "Mexico", "generic"],
  ["NL", "Netherlands", "iban"],
  ["NZ", "New Zealand", "generic"],
  ["NG", "Nigeria", "generic"],
  ["NO", "Norway", "iban"],
  ["PH", "Philippines", "generic"],
  ["PL", "Poland", "iban"],
  ["PT", "Portugal", "iban"],
  ["QA", "Qatar", "iban"],
  ["SA", "Saudi Arabia", "iban"],
  ["SG", "Singapore", "generic"],
  ["ZA", "South Africa", "generic"],
  ["ES", "Spain", "iban"],
  ["SE", "Sweden", "iban"],
  ["CH", "Switzerland", "iban"],
  ["TR", "Turkey", "iban"],
  ["OTHER", "Other country", "generic"],
];

const SCHEMES = {
  iban: { iban: true, account: false, code: null, swiftRequired: true },
  ifsc: { iban: false, account: true, code: { label: "IFSC code", placeholder: "e.g. HDFC0001234", type: "IFSC" }, swiftRequired: false },
  aba: { iban: false, account: true, code: { label: "ABA routing number", placeholder: "9 digits", type: "ABA" }, swiftRequired: false },
  sortcode: { iban: false, account: true, code: { label: "Sort code", placeholder: "e.g. 20-00-00", type: "SORT_CODE" }, swiftRequired: false },
  generic: { iban: false, account: true, code: null, swiftRequired: true },
};

const METHOD_LABELS = { bank: "Bank transfer", paypal: "PayPal", upi: "UPI" };

const $ = (id) => document.getElementById(id);
const form = $("withdrawForm");
const amountInput = $("amount");
const currencySelect = $("currency");
const countrySelect = $("country");
const processing = $("processing");
const success = $("success");

// ---------- Formatting ----------
const money = (n, currency = currencySelect.value) =>
  new Intl.NumberFormat(undefined, { style: "currency", currency }).format(n);

const round2 = (n) => Math.round(n * 100) / 100;

// ---------- Setup ----------
countrySelect.innerHTML =
  '<option value="" disabled selected>Select country</option>' +
  COUNTRIES.map(([code, name]) => `<option value="${code}">${name}</option>`).join("");

function selectedMethod() {
  return form.querySelector('input[name="method"]:checked').value;
}

function currentScheme() {
  const entry = COUNTRIES.find(([code]) => code === countrySelect.value);
  return SCHEMES[entry ? entry[2] : "generic"];
}

function updateSummary() {
  const amount = parseFloat(amountInput.value) || 0;
  const fee = round2(amount * FEE_RATE);
  $("sumAmount").textContent = amount ? money(amount) : "—";
  $("sumFee").textContent = amount ? money(fee) : "—";
  $("sumTotal").textContent = amount ? money(Math.max(amount - fee, 0)) : "—";
  $("minHint").textContent = `Minimum withdrawal: ${money(MIN_AMOUNT[currencySelect.value])}`;
}

function updateMethods() {
  // UPI is only available for INR payouts
  const upiAllowed = currencySelect.value === "INR";
  $("upiOption").hidden = !upiAllowed;
  if (!upiAllowed && selectedMethod() === "upi") {
    form.querySelector('input[name="method"][value="bank"]').checked = true;
  }
  const method = selectedMethod();
  document.querySelectorAll(".method-fields").forEach((section) => {
    section.hidden = section.dataset.method !== method;
  });
}

function updateBankFields() {
  const scheme = currentScheme();
  const hasCountry = Boolean(countrySelect.value);
  form.querySelector('[data-scheme="iban"]').hidden = !hasCountry || !scheme.iban;
  form.querySelector('[data-scheme="account"]').hidden = hasCountry && !scheme.account;
  const codeField = form.querySelector('[data-scheme="code"]');
  codeField.hidden = !scheme.code;
  if (scheme.code) {
    $("bankCodeLabel").textContent = scheme.code.label;
    $("bankCode").placeholder = scheme.code.placeholder;
  }
  $("swiftOptional").hidden = hasCountry && scheme.swiftRequired;
}

amountInput.addEventListener("input", updateSummary);
currencySelect.addEventListener("change", () => {
  updateSummary();
  updateMethods();
});
form.querySelectorAll('input[name="method"]').forEach((r) => r.addEventListener("change", updateMethods));
countrySelect.addEventListener("change", updateBankFields);

// Uppercase codes as the user types
["iban", "swift", "bankCode"].forEach((id) =>
  $(id).addEventListener("input", (e) => (e.target.value = e.target.value.toUpperCase()))
);

// ---------- Validation ----------
function errorTarget(name) {
  return $(name);
}

function setError(name, message) {
  form.querySelector(`.error[data-for="${name}"]`).textContent = message;
  if (name !== "terms") errorTarget(name).classList.add("invalid");
}

function clearError(name) {
  const el = form.querySelector(`.error[data-for="${name}"]`);
  if (el) el.textContent = "";
  const input = errorTarget(name);
  if (input) input.classList.remove("invalid");
}

form.querySelectorAll("input, select, textarea").forEach((input) => {
  const evt = input.tagName === "SELECT" || input.type === "checkbox" ? "change" : "input";
  input.addEventListener(evt, () => input.id && clearError(input.id));
});

const compact = (s) => s.replace(/[\s-]/g, "").toUpperCase();

function isValidIban(raw) {
  const iban = compact(raw);
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/.test(iban)) return false;
  const rearranged = iban.slice(4) + iban.slice(0, 4);
  const digits = rearranged.replace(/[A-Z]/g, (c) => c.charCodeAt(0) - 55);
  let remainder = 0;
  for (const d of digits) remainder = (remainder * 10 + Number(d)) % 97;
  return remainder === 1;
}

const isValidSwift = (s) => /^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/.test(compact(s));

const CODE_RULES = {
  IFSC: [/^[A-Z]{4}0[A-Z0-9]{6}$/, "Enter a valid 11-character IFSC code."],
  ABA: [/^\d{9}$/, "Enter a valid 9-digit routing number."],
  SORT_CODE: [/^\d{6}$/, "Enter a valid 6-digit sort code."],
};

const ACCOUNT_RULES = {
  ifsc: [/^\d{9,18}$/, "Enter a valid account number (9–18 digits)."],
  aba: [/^\d{4,17}$/, "Enter a valid account number (4–17 digits)."],
  sortcode: [/^\d{8}$/, "Enter a valid 8-digit account number."],
  generic: [/^[A-Z0-9]{4,34}$/, "Enter a valid account number."],
};

function validate() {
  let valid = true;
  const fail = (name, msg) => {
    setError(name, msg);
    valid = false;
  };
  const val = (id) => $(id).value.trim();
  const emailOk = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

  form.querySelectorAll(".error").forEach((el) => clearError(el.dataset.for));

  const amount = parseFloat(amountInput.value);
  const min = MIN_AMOUNT[currencySelect.value];
  if (!amount || amount <= 0) fail("amount", "Enter the amount you want to withdraw.");
  else if (amount < min) fail("amount", `The minimum withdrawal is ${money(min)}.`);
  else if (amount > 1000000) fail("amount", "For withdrawals above 1,000,000 please contact support.");
  else if (!/^\d+(\.\d{1,2})?$/.test(amountInput.value.trim())) fail("amount", "Use at most two decimal places.");

  if (!emailOk(val("contactEmail"))) fail("contactEmail", "Enter a valid email address.");

  const method = selectedMethod();
  if (method === "bank") {
    if (!countrySelect.value) fail("country", "Select the country of the bank.");
    if (!val("holderName")) fail("holderName", "Enter the account holder's name.");
    if (!val("bankName")) fail("bankName", "Enter the bank name.");

    if (countrySelect.value) {
      const entry = COUNTRIES.find(([code]) => code === countrySelect.value);
      const scheme = SCHEMES[entry[2]];

      if (scheme.iban && !isValidIban(val("iban"))) fail("iban", "Enter a valid IBAN.");

      if (scheme.account) {
        const [rule, msg] = ACCOUNT_RULES[entry[2]];
        if (!rule.test(compact(val("accountNumber")))) fail("accountNumber", msg);
        if (compact(val("confirmAccount")) !== compact(val("accountNumber")))
          fail("confirmAccount", "Account numbers do not match.");
      }

      if (scheme.code) {
        const [rule, msg] = CODE_RULES[scheme.code.type];
        if (!rule.test(compact(val("bankCode")))) fail("bankCode", msg);
      }

      const swift = val("swift");
      if (scheme.swiftRequired && !swift) fail("swift", "SWIFT / BIC is required for this country.");
      else if (swift && !isValidSwift(swift)) fail("swift", "Enter a valid 8 or 11-character SWIFT / BIC.");
    }
  } else if (method === "paypal") {
    if (!emailOk(val("paypalEmail"))) fail("paypalEmail", "Enter a valid PayPal email address.");
  } else if (method === "upi") {
    if (!/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(val("upiId"))) fail("upiId", "Enter a valid UPI ID.");
  }

  if (!$("terms").checked) fail("terms", "Please confirm the recipient details.");

  return valid;
}

// ---------- Submit ----------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  $("formError").hidden = true;

  if (!validate()) {
    const first = form.querySelector(".invalid, .error:not(:empty)");
    if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const request = buildRequest();
  // Resolves to null on success or the error, so a failure isn't reported as unhandled.
  const saving = saveRequest(request).then(() => null, (err) => err);

  form.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
  runProcessing(async () => {
    const err = await saving;
    if (!err) return showSuccess(request);
    console.error(err);
    form.hidden = false;
    showFormError("We couldn't submit your request. Please check your connection and try again.");
  });
});

function buildRequest() {
  const val = (id) => $(id).value.trim() || null;
  const amount = round2(parseFloat(amountInput.value));
  const fee = round2(amount * FEE_RATE);
  const method = selectedMethod();
  const isBank = method === "bank";
  const scheme = isBank ? currentScheme() : null;

  return {
    reference: "WD-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).slice(2, 6).toUpperCase(),
    amount,
    fee,
    net_amount: round2(amount - fee),
    currency: currencySelect.value,
    method,
    contact_email: val("contactEmail"),
    country: isBank ? countrySelect.value : null,
    holder_name: isBank ? val("holderName") : null,
    bank_name: isBank ? val("bankName") : null,
    iban: isBank && scheme.iban ? compact(val("iban")) : null,
    account_number: isBank && scheme.account ? compact(val("accountNumber")) : null,
    bank_code_type: isBank && scheme.code ? scheme.code.type : null,
    bank_code: isBank && scheme.code ? compact(val("bankCode")) : null,
    swift_bic: isBank && val("swift") ? compact(val("swift")) : null,
    paypal_email: method === "paypal" ? val("paypalEmail") : null,
    upi_id: method === "upi" ? val("upiId") : null,
    note: val("note"),
    status: "pending",
  };
}

async function saveRequest(request) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/withdrawals`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(request),
  });
  if (!res.ok) throw new Error(`Supabase insert failed (${res.status}): ${await res.text()}`);
}

function showFormError(message) {
  const banner = $("formError");
  banner.textContent = message;
  banner.hidden = false;
  banner.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Simulated 15-second "payment under process" screen
function runProcessing(done) {
  const bar = $("progressBar");
  const countdown = $("countdown");
  const steps = document.querySelectorAll("#steps li");

  let elapsed = 0;
  const render = () => {
    bar.style.width = (elapsed / PROCESSING_SECONDS) * 100 + "%";
    countdown.textContent = PROCESSING_SECONDS - elapsed;
    const current = Math.min(Math.floor((elapsed / PROCESSING_SECONDS) * steps.length), steps.length);
    steps.forEach((li, i) => {
      li.classList.toggle("done", i < current);
      li.classList.toggle("active", i === current);
    });
  };

  processing.hidden = false;
  render();

  const timer = setInterval(() => {
    elapsed++;
    render();
    if (elapsed >= PROCESSING_SECONDS) {
      clearInterval(timer);
      setTimeout(() => {
        processing.hidden = true;
        done();
      }, 400);
    }
  }, 1000);
}

function showSuccess(request) {
  const to = {
    bank: `your ${request.bank_name || "bank"} account`,
    paypal: "your PayPal account",
    upi: "your UPI ID",
  }[request.method];

  $("successText").textContent =
    `We've received your request to send ${money(request.net_amount, request.currency)} to ${to}. ` +
    `Keep your reference number for your records.`;
  $("rcRef").textContent = request.reference;
  $("rcAmount").textContent = money(request.amount, request.currency);
  $("rcNet").textContent = money(request.net_amount, request.currency);
  $("rcMethod").textContent = METHOD_LABELS[request.method];
  success.hidden = false;
}

$("newRequest").addEventListener("click", () => {
  form.reset();
  updateSummary();
  updateMethods();
  updateBankFields();
  success.hidden = true;
  form.hidden = false;
});

updateSummary();
updateMethods();
updateBankFields();
