const ball = document.querySelector(".ball");

ball.onmousedown = function (event) {
  // (1) prepare to moving: make absolute and on top by z-index
  ball.style.position = "absolute";

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + "px";
    ball.style.top = pageY - ball.offsetHeight / 2 + "px";
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener("mousemove", onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  ball.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    ball.onmouseup = null;
  };

  ball.ondragstart = function () {
    return false;
  };
};