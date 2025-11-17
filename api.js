const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require('morgan');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.text());

// CORS middleware - Allow access from any IP/port
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Max-Age", "86400");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

app.use(morgan('dev'));

// Array of troll messages
const trollMessages = [
  "Do it yourself! 😂",
  "LMAO, you think I'm gonna help? 🤣",
  "Nope! Try harder!",
  "This is not for you! Go learn coding first!",
  "Stop wasting my APIs! 💀",
  "You call that a request? 🙈",
  "Skill issue detected! 📉",
  "Maybe Google knows? Try there! 🔍",
  "Error 404: Your coding skills not found!",
  "Nice try! But absolutely no! 🚫",
  "This API hates you! 😈",
  "Why are you even here? 👻",
  "Your request has been denied! Deal with it! 😎",
  "Imagine asking for help! Could never be me! 🤦",
  "I'm too good for this! 🌟",
  "Your code is bad and you should feel bad!",
  "Congratulations! You've activated troll mode! 🎉",
  "Bye Felicia! This ain't it! 👋",
  "You've officially been roasted! 🔥",
  "NOOOOPE! Keep trying though! 😂"
];

// Function to get random troll message
const getTrollMessage = () => {
  return trollMessages[Math.floor(Math.random() * trollMessages.length)];
};
const readFile = (filePath) => {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (err) {
    return null;
  }
};

app.get("/", (req, res) => {
  res.send(`🎉 GOTCHA! 🎉\n\n${getTrollMessage()}\n\nNo API for you!`);
});

app.get("/program/:id", (req, res) => {
  res.send(`🎉 GOTCHA! 🎉\n\n${getTrollMessage()}\n\nNo program codes for you either!`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`${getTrollMessage()}\n\nError: ${err.message}`);
});

// TROLL MODE - Catch-all middleware for any unmatched route
app.use((req, res) => {
  res.status(404).send(`🎉 GOTCHA! 🎉\n\n${getTrollMessage()}\n\nRoute: ${req.path}\n\nTry /program/:id instead (1-27) or go to / for help!`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on port ${PORT}..`);
  console.log(`API is running at http://localhost:${PORT}`);
  console.log(`Accessible from any IP on port ${PORT}`);
  console.log(`Get a program at http://localhost:${PORT}/:id (1-27)`);
});
