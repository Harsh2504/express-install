const express = require("express");
const app = express();

app.use(express.json());

// In-memory data object
let users = {
  1: { id: 1, name: "Harsh", email: "harsh@gmail.com" },
  2: { id: 2, name: "Yash", email: "yash@gmail.com" }
};

// -------------------------
// 1. GET Method (Program 22)
// -------------------------
app.get("/users", (req, res) => {
  res.json({
    message: "GET Request - Fetching all users",
    data: users
  });
});

// Get single user
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    message: "GET Request - Fetching single user",
    data: users[id] || "User not found"
  });
});

// -------------------------
// 2. POST Method (Program 23)
// -------------------------
app.post("/users", (req, res) => {
  const { id, name, email } = req.body;

  users[id] = { id, name, email };

  res.json({
    message: "POST Request - User Created",
    createdUser: users[id]
  });
});

// -------------------------
// 3. PUT Method (Program 24)
// -------------------------
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;

  if (!users[id]) {
    return res.json({ message: "User not found" });
  }

  users[id] = { id, name, email };

  res.json({
    message: "PUT Request - User Updated",
    updatedUser: users[id]
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
