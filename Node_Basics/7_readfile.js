const fs = require("fs");

// Reading file asynchronously
fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File Contents:");
  console.log(data);
});
