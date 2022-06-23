'use strict';

let num1 = parseInt(prompt('Enter first number: '));
let operator = prompt('Enter operator(+, -, *, or /)');
let num2 = parseInt(prompt('Enter second number: '));
let result;

function logic() {
  if (isNaN(num1) || isNaN(num2)) {
    alert('INCORRECT INPUT! Refresh and Try Again');
  } else {
    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      (result = num1 / num2).toFixed(2);
    }
  }
  alert(num1 + operator + num2 + '=' + result);
}
logic();
