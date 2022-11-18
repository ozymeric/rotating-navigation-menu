
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

function rotateForward() {
  container.classList.add("forward");
  document.querySelector(".circle").style.rotate = "-60deg";
  document.querySelector("nav").style.rotate = "0deg";
}

function rotateBackward() {
  container.classList.remove("forward");
  document.querySelector(".circle").style.rotate = "30deg";
  document.querySelector("nav").style.rotate = "90deg";
}

open.addEventListener("click", rotateForward);
close.addEventListener("click", rotateBackward);
