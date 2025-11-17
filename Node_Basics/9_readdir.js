const fs = require("fs");

// Directory to read
const folderPath = "./arithmetic_module"; // current directory

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  console.log("Files and folders in the directory:");
  files.forEach((file) => {
    console.log(file);
  });
});


// more functions 