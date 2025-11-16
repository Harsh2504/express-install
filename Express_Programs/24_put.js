const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON body

// PUT Method Example
app.put("/update/:id", (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;

  res.json({
    message: "PUT Request Received! User Updated.",
    updatedUser: {
      id: userId,
      name,
      email
    }
  });
});

// Start Server
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
