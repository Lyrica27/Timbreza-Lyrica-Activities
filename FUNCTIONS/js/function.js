document.addEventListener("DOMContentLoaded", () => {

  let firstNumber = "";
  let operator = "";
  let secondNumber = "";

  const display = document.getElementById("display");
  const operatorDisplay = document.getElementById("operatorDisplay");

  display.value = "0";

  function addNumber(num) {
    if (display.value === "0") {
      display.value = num;
    } else {
      display.value += num;
    }
  }
  function setOperator(op) {
    firstNumber = display.value || "0";
    operator = op;
    operatorDisplay.value = op;
    display.value = "0";
    secondNumber = display.value;
  }
  function calculate() {
    if (!operator) return;

    let result;``
    switch (operator) {
      case "+":
        result = Number(firstNumber) + Number(secondNumber);
        break;
      case "-":
        result = Number(firstNumber) - Number(secondNumber);
        break;
      case "*":
        result = Number(firstNumber) * Number(secondNumber);
        break;
      case "/":
        result = Number(secondNumber) === 0 ? "Error" : Number(firstNumber) / Number(secondNumber);
        break;
    }
    display.value = result;
    operatorDisplay.value = "";
  }
  function clearAll() {
    display.value = "0";
    operatorDisplay.value = "";
  }
  function clearOne() {
    if (display.value.length > 1) {
      display.value = display.value.slice(0, -1);
    } else {
      display.value = "0";
    }
  }
  window.addNumber = addNumber;
  window.setOperator = setOperator;
  window.calculate = calculate;
  window.clearAll = clearAll;
  window.clearOne = clearOne;

});