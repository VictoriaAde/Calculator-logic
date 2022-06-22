'use strict';

let num1 = parseInt(prompt('Enter first number: '));
let operator = prompt('Enter operator(+, -, *, /)');
let num2 = parseInt(prompt('Enter second number: '));
let result;

function logic() {
  if (isNaN(num1) || isNaN(num2)) {
    alert('INCORRECT INPUT! Refresh and try again');
  } else {
    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      result = num1 / num2;
      result.toFixed(3);
    }
  }
  alert(num1 + operator + num2 + '=' + result);
}
logic();
