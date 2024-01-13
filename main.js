const digitBtns = Array.from(document.querySelectorAll('.digit'));
const operatorBtns = Array.from(document.querySelectorAll('.operator'));
const display = document.querySelector('#display');
let leftNumber = "";
let rightNumber = "";
let operator = "";

console.log(digitBtns);

digitBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    rightNumber += btn.textContent;
    display.textContent = leftNumber + operator + rightNumber;
  });
});

operate = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
}