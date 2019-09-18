/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(hHMM) {
  const hour = parseInt(hHMM);
  switch (true) {
    case (hour < 12 ):
      return "Good Morning";
      break;
    case (hour >= 12 && hour <= 17):
      return "Good Afternoon";
      break;
    case (hour >17 ):
      return "Good Evening";
      break;
  }

}
/* Write your implementation of greet() */

function displayMessage(string) {
  const block = document.querySelector("#greeting")
  block.innerText = string
}
/* Write your implementation of displayMessage() */
