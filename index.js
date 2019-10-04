function greet(time) {
  const hour = parseInt(time.split(":")[0]);
  const min = parseInt(time.split(":")[1]);
  if (hour < 12) {
    return "Good Morning";
  }
  else if (hour >= 12 && hour <= 17) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}

function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
} 
