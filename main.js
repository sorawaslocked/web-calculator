const digitBtns = Array.from(document.querySelectorAll('.digit'));
const operatorBtns = Array.from(document.querySelectorAll('.operator'));
const display = document.querySelector('#display');
let leftNumber = "";
let rightNumber = "";
let operator = "";


operate = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
}