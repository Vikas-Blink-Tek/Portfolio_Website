// Supabase: submitted requests are saved to the `withdrawals` table (see supabase.sql).
// The publishable key is safe to expose in the browser; RLS only allows inserts.
const SUPABASE_URL = "https://smwfnxztjycmglarzvyd.supabase.co";
const SUPABASE_KEY = "sb_publishable_VFxZ_fd9NtP-Hv2zKssOMg_sAXBEphV";

const BALANCE = 25000;
const MIN_AMOUNT = 100;
const FEE_RATE = 0.01;

const form = document.getElementById("withdrawForm");
const amountInput = document.getElementById("amount");
const success = document.getElementById("success");
const processing = document.getElementById("processing");
const PROCESSING_SECONDS = 15;

const money = (n) =>
  "₹" + n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

document.getElementById("balance").textContent = money(BALANCE);

// Quick amount buttons
document.querySelectorAll(".quick-amounts button").forEach((btn) => {
  btn.addEventListener("click", () => {
    amountInput.value = btn.dataset.amount === "max" ? BALANCE : btn.dataset.amount;
    updateSummary();
    clearError("amount");
  });
});

// Fee summary
function updateSummary() {
  const amount = parseFloat(amountInput.value) || 0;
  const fee = amount * FEE_RATE;
  document.getElementById("sumAmount").textContent = money(amount);
  document.getElementById("sumFee").textContent = money(fee);
  document.getElementById("sumTotal").textContent = money(Math.max(amount - fee, 0));
}
amountInput.addEventListener("input", updateSummary);

// Show fields for the selected method
function selectedMethod() {
  return form.querySelector('input[name="method"]:checked').value;
}

form.querySelectorAll('input[name="method"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    document.querySelectorAll(".method-fields").forEach((section) => {
      section.hidden = section.dataset.method !== selectedMethod();
    });
  });
});

// IFSC uppercase
document.getElementById("ifsc").addEventListener("input", (e) => {
  e.target.value = e.target.value.toUpperCase();
});

// Validation helpers
function setError(name, message) {
  const el = form.querySelector(`.error[data-for="${name}"]`);
  const input = document.getElementById(name);
  if (el) el.textContent = message;
  const target = name === "amount" ? input.parentElement : input;
  if (target && name !== "terms") target.classList.add("invalid");
}

function clearError(name) {
  const el = form.querySelector(`.error[data-for="${name}"]`);
  const input = document.getElementById(name);
  if (el) el.textContent = "";
  const target = name === "amount" ? input.parentElement : input;
  if (target) target.classList.remove("invalid");
}

form.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("input", () => input.id && clearError(input.id));
});

function validate() {
  let valid = true;
  const fail = (name, msg) => {
    setError(name, msg);
    valid = false;
  };
  const val = (id) => document.getElementById(id).value.trim();

  form.querySelectorAll(".error").forEach((el) => clearError(el.dataset.for));

  const amount = parseFloat(amountInput.value);
  if (!amount) fail("amount", "Please enter an amount.");
  else if (amount < MIN_AMOUNT) fail("amount", `Minimum withdrawal is ${money(MIN_AMOUNT)}.`);
  else if (amount > BALANCE) fail("amount", "Amount exceeds your available balance.");

  const method = selectedMethod();
  if (method === "bank") {
    if (!val("holderName")) fail("holderName", "Account holder name is required.");
    if (!val("bankName")) fail("bankName", "Bank name is required.");
    if (!/^\d{9,18}$/.test(val("accountNumber")))
      fail("accountNumber", "Enter a valid account number (9–18 digits).");
    if (val("confirmAccount") !== val("accountNumber"))
      fail("confirmAccount", "Account numbers do not match.");
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(val("ifsc")))
      fail("ifsc", "Enter a valid 11-character IFSC code.");
  } else if (method === "upi") {
    if (!/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(val("upiId"))) fail("upiId", "Enter a valid UPI ID.");
  } else if (method === "paypal") {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val("paypalEmail")))
      fail("paypalEmail", "Enter a valid email address.");
  }

  if (!document.getElementById("terms").checked)
    fail("terms", "Please confirm before submitting.");

  return valid;
}

// Submit (simulated)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formError").hidden = true;
  if (!validate()) {
    const first = form.querySelector(".invalid, .error:not(:empty)");
    if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const request = buildRequest();
  // Resolves to null on success or the error, so a failure isn't reported as unhandled.
  const saving = saveRequest(request).then(() => null, (err) => err);

  form.hidden = true;
  runProcessing(async () => {
    const err = await saving;
    if (!err) return showSuccess(request);
    console.error(err);
    form.hidden = false;
    showFormError("We couldn't submit your request. Please check your connection and try again.");
  });
});

function buildRequest() {
  const val = (id) => document.getElementById(id).value.trim() || null;
  const amount = parseFloat(amountInput.value);
  const fee = Math.round(amount * FEE_RATE * 100) / 100;
  const method = selectedMethod();
  return {
    reference: "WD" + Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2, 6).toUpperCase(),
    amount,
    fee,
    net_amount: Math.round((amount - fee) * 100) / 100,
    method,
    holder_name: method === "bank" ? val("holderName") : null,
    bank_name: method === "bank" ? val("bankName") : null,
    account_number: method === "bank" ? val("accountNumber") : null,
    ifsc: method === "bank" ? val("ifsc") : null,
    upi_id: method === "upi" ? val("upiId") : null,
    paypal_email: method === "paypal" ? val("paypalEmail") : null,
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
  const banner = document.getElementById("formError");
  banner.textContent = message;
  banner.hidden = false;
  banner.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Simulated 15-second "payment under process" screen
function runProcessing(done) {
  const bar = document.getElementById("progressBar");
  const countdown = document.getElementById("countdown");
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
  const labels = { bank: "bank account", upi: "UPI ID", paypal: "PayPal account" };
  document.getElementById("successText").textContent =
    `Your withdrawal of ${money(request.net_amount)} to your ` +
    `${labels[request.method]} has been initiated. It usually takes 1–3 business days to reflect.`;
  document.getElementById("reference").textContent = request.reference;
  success.hidden = false;
}

document.getElementById("newRequest").addEventListener("click", () => {
  form.reset();
  updateSummary();
  document.querySelectorAll(".method-fields").forEach((s) => {
    s.hidden = s.dataset.method !== "bank";
  });
  success.hidden = true;
  form.hidden = false;
});

updateSummary();
