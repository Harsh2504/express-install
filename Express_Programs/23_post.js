const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON body

// POST Method Example
app.post("/register", (req, res) => {
  const { name, email } = req.body;

  res.json({
    message: "POST Request Received!",
    receivedData: {
      name,
      email
    }
  });
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});
