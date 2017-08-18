let complete = document.getElementByClass("complete");

complete.addEventListener("click", turnRed);

function turnRed() {
  complete.classList.add('red');
}
