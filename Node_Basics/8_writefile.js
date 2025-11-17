const fs = require("fs");

const content = "This text is written using Node.js fs.writeFile() method.";

// Writing file asynchronously
fs.writeFile("output.txt", content, "utf8", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("File written successfully! Check output.txt");
});


//alternatives, append