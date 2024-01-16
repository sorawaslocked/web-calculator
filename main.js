const digitBtns = Array.from(document.querySelectorAll('.digit'));
const operatorBtns = Array.from(document.querySelectorAll('.operator'));
const equalBtn = document.querySelector('#equal');
const display = document.querySelector('#display');
const equalAndOperators = operatorBtns.slice();
equalAndOperators.push(equalBtn);
let leftNumber = "";
let rightNumber = "";
let operator = "";

function changeDisplay() {
  if (display.textContent.length < 16)
    display.textContent = leftNumber + operator + rightNumber;
}

function operate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '−':
      return a - b;
    case '×':
      return a * b;
    case '÷':
      return a / b;
  }
}

digitBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (operator === "") {
      leftNumber += btn.textContent;
    }
    else {
      rightNumber += btn.textContent;
    }
    changeDisplay();
  });
});

operatorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (leftNumber !== "") {
      operator = btn.textContent;
      changeDisplay();
    }
  });
});

equalAndOperators.forEach(btn => {
  btn.addEventListener('click', () => {
    if (leftNumber !== "" && rightNumber !== "") {
      leftNumber = operate(leftNumber, rightNumber, operator);
      operator = "";
      rightNumber = "";  
      changeDisplay();
    }
  });
});