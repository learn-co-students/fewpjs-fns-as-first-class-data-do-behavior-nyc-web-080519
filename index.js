/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const timeNumber = Number.parseInt(timeString.split(":").join(""));
  switch(true) {
    case timeNumber < 1200:
      return "Good Morning";
    case timeNumber < 1700:
      return "Good Afternoon"
    case timeNumber <= 2359:
      return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}