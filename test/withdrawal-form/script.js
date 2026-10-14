// Front-end only: no data is sent anywhere.
const BALANCE = 25000;
const MIN_AMOUNT = 100;
const FEE_RATE = 0.01;

const form = document.getElementById("withdrawForm");
const amountInput = document.getElementById("amount");
const success = document.getElementById("success");

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
  if (!validate()) {
    const first = form.querySelector(".invalid, .error:not(:empty)");
    if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const btn = form.querySelector(".submit");
  btn.disabled = true;
  btn.textContent = "Processing…";

  setTimeout(() => {
    const amount = parseFloat(amountInput.value);
    const labels = { bank: "bank account", upi: "UPI ID", paypal: "PayPal account" };
    document.getElementById("successText").textContent =
      `Your withdrawal of ${money(amount - amount * FEE_RATE)} to your ` +
      `${labels[selectedMethod()]} is being processed. It usually takes 1–3 business days.`;
    form.hidden = true;
    success.hidden = false;
    btn.disabled = false;
    btn.textContent = "Request Withdrawal";
  }, 1000);
});

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
