const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

// Helper functions
const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;


// math function
const math = function(num1, num2, operator) {
  return operator === "add" ? add(num1, num2)
    : operator === "subtract" ? subtract(num1, num2)
    : operator === "multiply" ? multiply(num1, num2)
    : divide(num1, num2);
};

// Event listener for the button
btn.addEventListener('click', function(e) {
  const num1 = parseInt(document.querySelector('#num1').value); //Parsing integer to avoid string concatenation
  const num2 = parseInt(document.querySelector('#num2').value);
  const operator = document.querySelector('#operators').value;
  result.innerHTML = math(num1, num2, operator);
});