 
const express = require("express");
const app = express();

app.use(express.json()); // To read JSON body

// 1. req.method
// 2. req.url
// 3. req.headers
app.get("/", (req, res) => {
  res.send({
    method: req.method,
    url: req.url,
    headers: req.headers
  });
});

// 4. req.query - http://localhost:3000/search?name=Harsh&age=21
app.get("/search", (req, res) => {
  res.send({
    message: "Query Parameters Received",
    query: req.query
  });
});

// 5. req.params - http://localhost:3000/user/123
app.get("/user/:id", (req, res) => {
  res.send({
    message: "Route Parameter Received",
    params: req.params
  });
});

// EXTRA: req.body (POST Request)
app.post("/register", (req, res) => {
  res.send({
    message: "Body Data Received",
    body: req.body
  });
});

// Start Server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
