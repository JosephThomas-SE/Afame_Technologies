const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (waitingForSecondValue) {
      if (isNaN(value)) {
        // Operator clicked, perform calculation
        calculate(firstValue, operator, parseFloat(display.value)); // Ensure second value is parsed to number
        operator = value;
      } else {
        // Append number to second value
        display.value += value;
      }
    } else {
      if (isNaN(value)) {
        // First operator clicked, store value and operator
        firstValue = parseFloat(display.value);
        operator = value;
        waitingForSecondValue = true;
        display.value = ""; // Clear display for second value
      } else {
        // Append number to display
        display.value += value;
      }
    }
  });
});

function calculate(firstNum, op, secondNum) {
  let result;
  switch (op) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    case '/':
      if (secondNum === 0) {
        // Handle division by zero error
        result = "Error: Division by zero";
      } else {
        result = firstNum / secondNum;
      }
      break;
    default:
      result = "Error: Invalid operator";
  }
  display.value = result;
  firstValue = null;
  operator = null;
  waitingForSecondValue = false;
}

// Add functionality for the "C" (clear) button
document.querySelector('.buttons button[data-value="C"]').addEventListener('click', () => {
  display.value = "";
  firstValue = null;
  operator = null;
  waitingForSecondValue = false;
});
