let result = document.getElementById("result");
const toggle = document.getElementById("toggle");
const buttons = document.querySelectorAll(".btn");

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

let eqn = "";
let op = "";
let opUsed = false;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let btnValue = btn.innerHTML;
    let ans = 0;
    if (btnValue === "CE" || btnValue === "AC") {
      result.value = "";
      eqn = "";
      opUsed = false;
    } else if (btnValue === "=") {
      let res = eqn.split(op);
      console.log(eqn);
      res.forEach((item, idx) => (res[idx] = parseInt(item)));
      console.log(res);

      if (op == "+") {
        ans = res[0] + res[1];
      } else if (op == "-") {
        ans = res[0] - res[1];
      } else if (op == "*") {
        ans = res[0] * res[1];
      } else if (op == "/") {
        ans = res[0] / res[1];
      } else if (op == "%") {
        ans = res[0] % res[1];
      }
      result.value = ans;
      eqn = result.value;
      console.log(ans);
    } else if (
      ["+", "-", "*", "/", "%"].some((elem) => elem == btnValue) &&
      opUsed
    ) {
      result.value = "We have functionality of one operator only";
    } else if (
      ["+", "-", "*", "/", "%"].some((elem) => elem == btnValue) &&
      !opUsed
    ) {
      op = btnValue;
      opUsed = true;
      eqn += btnValue;
      result.value += btnValue;
    } else {
      eqn += btnValue;
      result.value += btnValue;
    }
  });
});