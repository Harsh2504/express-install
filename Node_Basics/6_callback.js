// A simple function that uses a callback
function greetUser(name, callback) {
  console.log("Processing...");

  // Simulating async task using setTimeout
  setTimeout(() => {
    callback(`Hello, ${name}!`);
  }, 1000);
}

// Callback function
function displayMessage(message) {
  console.log(message);
}

// Calling the function with callback
greetUser("Harsh", displayMessage);
