const express = require("express");
const router = express.Router();

// In-memory DB
let users = {
  1: { id: 1, name: "Harsh", email: "harsh@gmail.com" },
  2: { id: 2, name: "Yash", email: "yash@gmail.com" }
};

// GET all
router.get("/", (req, res) => {
  res.json({ message: "Router GET - All users", data: users });
});

// GET one
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: "Router GET - Single user", data: users[id] });
});

// POST create
router.post("/", (req, res) => {
  const { id, name, email } = req.body;
  users[id] = { id, name, email };
  res.json({ message: "Router POST - User Created", user: users[id] });
});

// PUT update
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  users[id] = { id, name, email };
  res.json({ message: "Router PUT - User Updated", user: users[id] });
});

module.exports = router;
