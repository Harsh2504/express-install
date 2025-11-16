const express = require("express");
const app = express();
const userRouter = require("./users");

app.use(express.json());

// Attach router for /users
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Router Demo Server at http://localhost:3000/");
});
