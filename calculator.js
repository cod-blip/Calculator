let currentInput = ""; // This variable stores the expression entered by the user

// Function to append input to the display
function appendToDisplay(value) {
  currentInput += value; // Append the clicked button's value to currentInput
  document.getElementById("answer").textContent = currentInput; // Update the display
}

// Function to calculate the res        ult
function calculate() {
  let result;

  // If the expression contains a plus sign, perform addition
  if (currentInput.includes("+")) {
    let operands = currentInput.split("+");
    result = parseFloat(operands[0]) + parseFloat(operands[1]);
  }
  // If the expression contains a minus sign, perform subtraction
  else if (currentInput.includes("-")) {
    let operands = currentInput.split("-");
    result = parseFloat(operands[0]) - parseFloat(operands[1]);
  }
  // If the expression contains a multiplication sign, perform multiplication
  else if (currentInput.includes("*")) {
    let operands = currentInput.split("*");
    result = parseFloat(operands[0]) * parseFloat(operands[1]);
  }
  // If the expression contains a division sign, perform division
  else if (currentInput.includes("/")) {
    let operands = currentInput.split("/");
    if (parseFloat(operands[1]) !== 0) {
      result = parseFloat(operands[0]) / parseFloat(operands[1]);
    } else {
      result = "Error"; // Display an error if division by zero is attempted
    }
  } else {
    result = "Error"; // If no valid operation is found, show an error
  }

  // Display the result or error
  document.getElementById("answer").textContent = result;
  currentInput = result.toString(); // Store the result for further calculations
}
