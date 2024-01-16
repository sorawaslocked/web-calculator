const digitBtns = Array.from(document.querySelectorAll('.digit'));
const operatorBtns = Array.from(document.querySelectorAll('.operator'));
const equalBtn = document.querySelector('#equal');
const display = document.querySelector('#display');
const equalAndOperators = operatorBtns.slice().push(equalBtn);
let leftNumber = "";
let rightNumber = "";
let operator = "";

function changeDisplay() {
  display.textContent = leftNumber + operator + rightNumber;
}

digitBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (display.textContent.length <= 16) {
      if (operator === "") {
        leftNumber += btn.textContent;
      }
      else {
        rightNumber += btn.textContent;
      }
    }
    changeDisplay();
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    operator = btn.textContent;
    changeDisplay();
  });
});

operate = {
  "+": (a, b) => a + b,
  "−": (a, b) => a - b,
  "×": (a, b) => a * b,
  "÷": (a, b) => a / b,
}