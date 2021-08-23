const coin = document.querySelector(".coin");

coin.onmousedown = function (event) {
  // (1) prepare to moving: make absolute and on top by z-index
  coin.style.position = "absolute";

  // centers the coin at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    coin.style.left = pageX - coin.offsetWidth / 2 + "px";
    coin.style.top = pageY - coin.offsetHeight / 2 + "px";
  }

  // move our absolutely positioned coin under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the coin on mousemove
  document.addEventListener("mousemove", onMouseMove);

  // (3) drop the coin, remove unneeded handlers
  coin.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    coin.onmouseup = null;
  };

  coin.ondragstart = function () {
    return false;
  };
};