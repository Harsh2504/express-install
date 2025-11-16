const express = require("express");
const app = express();

// -----------------------------
// 1. Global Middleware using app.use()
// -----------------------------
app.use((req, res, next) => {
  console.log(`Middleware Log → Method: ${req.method} | URL: ${req.url}`);
  next(); // Continue to next handler
});

// -----------------------------
// 2. Adding timestamp to request using app.use()
// -----------------------------
app.use((req, res, next) => {
  req.requestTime = new Date().toLocaleTimeString();
  next();
});

// -----------------------------
// 3. Route example to show middleware results
// -----------------------------
app.get("/", (req, res) => {
  res.send(`Hello! Request came at: ${req.requestTime}`);
});

// -----------------------------
// 4. Route-level middleware using app.use()
// -----------------------------
app.use("/admin", (req, res, next) => {
  console.log("Admin Middleware: Checking admin access...");
  next();
});

app.get("/admin/dashboard", (req, res) => {
  res.send("Admin Dashboard Accessed!");
});

// -----------------------------
// 5. Error handling middleware (Bonus)
// -----------------------------
app.use((err, req, res, next) => {
  console.error("Error occurred:", err);
  res.status(500).send("Something broke!");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});
