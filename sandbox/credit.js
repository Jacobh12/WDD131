const form = document.querySelector(".checkout");
const cardNumberInput = form.number;

// Create or select error message element
let errorMsg = document.querySelector(".errorMsg");
if (!errorMsg) {
  errorMsg = document.createElement("p");
  errorMsg.classList.add("errorMsg");
  errorMsg.style.color = "red";
  form.appendChild(errorMsg);
}


form.addEventListener("submit", submitHandler);

function submitHandler(event) {
  
  event.preventDefault();

  
  const cardNumber = this.number.value.trim().replace(/\s+/g, "");

  
  if (isNaN(cardNumber)) {
    errorMsg.textContent = "❌ Card number must be numeric only.";
    return false;
  }

  
  if (cardNumber.length < 13 || cardNumber.length > 19) {
    errorMsg.textContent = "❌ Card number must be between 13 and 19 digits.";
    return false;
  }

  
  errorMsg.textContent = "";
  alert("✅ Card number is valid!");
  
}