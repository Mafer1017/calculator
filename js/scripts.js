function add(num1, num2) {
  return num1 + num2;
}

// const num1 = parseInt(prompt(`Enter a number: `));
// const num2 = parseInt(prompt(`Enter another number: `));
// const result = celToFer(num1);
// alert(result);

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function celToFer() {
  let temp = parseInt(prompt(`Enter a temperature: `));
  return temp * 1.8 + 32;
}
function galToLit() {
  let weight = parseInt(prompt('Enter gallons: '));
  return weight * 3.78541
}
console.log(alert(galToLit()));