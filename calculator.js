window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const userInput  = { amount: 5000, years: 4, rate: 5};
  const loanAmount = document.getElementById("loan-amount");
  const howManyYears = document.getElementById("loan-years");
  const interest = document.getElementById("loan-rate"); 
  loanAmount.value = userInput.amount; 
  howManyYears.value = userInput.years;
  interest.value = userInput.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentInput = getCurrentUIValues();

  updateMonthly(calculateMonthlyPayment(currentInput));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(userInput) {
  const monthly = (userInput.rate / 100) / 12;
  const num = Math.floor(userInput.years * 12);
  return (
    (monthly * userInput.amount) / (1 - Math.pow((1 + monthly), -num))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPay = document.getElementById("monthly-payment");
  monthlyPay.innerText = "$" + monthly;
}
