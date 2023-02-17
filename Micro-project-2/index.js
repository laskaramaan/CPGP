let counter = document.getElementById("counter").innerHTML;

function increment_counter() {
  counter++;
  console.log(counter);
  document.getElementById("counter").innerHTML = counter;
}

function decrement_counter() {
  counter = 0;
  document.getElementById("counter").innerHTML = counter;
}
document
  .getElementById("incrementBtn")
  .addEventListener("click", increment_counter);

document
  .getElementById("DecrementBtn")
  .addEventListener("click", decrement_counter);
