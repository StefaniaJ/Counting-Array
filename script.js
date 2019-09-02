"use strict";

//Count
let counter = 0;
const array = [];
window.addEventListener("DOMContentLoaded", start);

function start() {
  //reset the counter
  counter = 0;

  setInterval(count, 500);
}

function count() {
  //implement counter
  counter++;

  //insert counter into beginning of array
  array.unshift(counter);

  //limit the length of the array
  //if it is longer then 9 -remove the numbers
  if (array.length > 9) {
    array.pop();
  }

  //display counter
  console.log(counter);

  //display array
  console.log(array);
}
