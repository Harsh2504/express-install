const express = require("express");
const app = express();

// GET Method Example
app.get("/hello", (req, res) => {
  res.send("Hello! This is GET method response from Express.js");
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});
