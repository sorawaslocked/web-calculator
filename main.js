const digitBtns = Array.from(document.querySelectorAll('.digit'));
const operatorBtns = Array.from(document.querySelectorAll('.operator'));
const display = document.querySelector('#display');
let leftNumber = "";
let rightNumber = "";
let operator = "";

console.log(digitBtns);

function changeDisplay() {
  display.textContent = leftNumber + operator + rightNumber;
}

digitBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    leftNumber += btn.textContent;
    changeDisplay();
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (operator === "") {
      operator = btn.textContent;
      changeDisplay();
    }
  });
});

operate = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
}