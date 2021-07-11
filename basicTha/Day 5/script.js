// ---getting variables---
// input numbers
const num1 = document.getElementById("input1");
const num2 = document.getElementById("input2");

// buttons
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");

// result
const result = document.getElementById("result");

// --- event listeners for button ---
addBtn.addEventListener("click", () => {
  const sum = parseInt(num1.value) + parseInt(num2.value);
  result.innerText = `Result: ${sum}`;
});

subtractBtn.addEventListener("click", () => {
  const subtract = parseInt(num1.value) - parseInt(num2.value);
  result.innerText = `Result: ${subtract}`;
});

multiplyBtn.addEventListener("click", () => {
  const multiply = parseInt(num1.value) * parseInt(num2.value);
  result.innerText = `Result: ${multiply}`;
});

divideBtn.addEventListener("click", () => {
  const divide = parseInt(num1.value) / parseInt(num2.value);
  result.innerText = `Result: ${divide}`;
});