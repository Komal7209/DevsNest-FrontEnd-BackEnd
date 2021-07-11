var buttons = document.querySelectorAll("button");

for (i of buttons) {
  i.addEventListener("click", (e) => {
    console.log("button click event is called");

    var firstNum = document.getElementById("firstNum").value;
    var secondNum = document.getElementById("secondNum").value;
    console.log(firstNum, secondNum);

    if (e.target.value == "+") {
      return (document.getElementById("result").innerHTML =
        parseInt(firstNum) + parseInt(secondNum));
    }
  });
}

function calculate(operator) {
  var firstNum = document.getElementById("firstNum").value;
  var secondNum = document.getElementById("secondNum").value;
  console.log("function called");

  if (operator == "+") {
    return (document.getElementById("result").innerHTML =
      parseInt(firstNum) + parseInt(secondNum));
  } else if (operator == "-") {
    return (document.getElementById("result").innerHTML = firstNum - secondNum);
  } else if ((operator == "x") | (operator == "X")) {
    return (document.getElementById("result").innerHTML = firstNum * secondNum);
  } else if (operator == "/") {
    return (document.getElementById("result").innerHTML = firstNum / secondNum);
  }
}