// Function to format the time as HH:MM:SS
function formatTime(unit) {
  return unit < 10 ? `0${unit}` : unit; // Add leading zero if needed
}

// Function to display the clock
function displayClock() {
  const now = new Date(); // Get the current date and time
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());

  // Clear the terminal and display the time
  console.clear();
  console.log(`\n   ${hours}:${minutes}:${seconds}\n`);
}

// Update the clock every second
setInterval(displayClock, 1000);
