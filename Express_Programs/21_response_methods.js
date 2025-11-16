const express = require("express");
const path = require("path");
const app = express();

// 1. res.send()
app.get("/", (req, res) => {
  res.send("Hello from res.send()!");
});

// 2. res.json()
app.get("/json", (req, res) => {
  res.json({
    message: "This is JSON response using res.json()",
    student: "Harsh"
  });
});

// 3. res.status()
app.get("/status", (req, res) => {
  res.status(201).send("Status set to 201 Created!");
});

// 4. res.sendFile()
app.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "sample.html"));
});

// 5. res.redirect()
app.get("/google", (req, res) => {
  res.redirect("https://google.com");
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
