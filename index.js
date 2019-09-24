/* Given Code, don't edit */

function handleClick(e) {
  debugger
  const timeString = document.getElementById('time').value
  
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let newTime = time.split(':');
  let numTime = parseInt(newTime);
  if (numTime < 12) {
    return "Good Morning"
    }
  else if (numTime > 11 && numTime < 17) {
    return "Good Afternoon"
    }
  else if (numTime > 16) {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let greeting = document.getElementById('greeting')
  greeting.innerText = message
}
