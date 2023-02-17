// Lets write a function which will change the text written o the page on clicking

// function changeHeading() {
//   var ele = document.getElementById("heading1");
//   ele.innerHTML = "text is changed";
// }

// var ele = document.getElementById("heading1");

// ele.addEventListener("click", changeHeading);
let counter = document.getElementById("counter").innerHTML;

function increment_counter() {
  counter++;
  console.log(counter);
  document.getElementById("counter").innerHTML = counter;
}

function decrement_counter() {
  //   let counter = document.getElementById("counter").innerHTML;
  //   if (counter > 0) {
  //     counter--;
  //     console.log(counter);
  //     document.getElementById("counter").innerHTML = counter;
  //   }
  counter = 0;
  document.getElementById("counter").innerHTML = counter;
}
document
  .getElementById("incrementBtn")
  .addEventListener("click", increment_counter);

document
  .getElementById("DecrementBtn")
  .addEventListener("click", decrement_counter);
