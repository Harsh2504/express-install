const fs = require("fs");

// 1. Write File
fs.writeFile("demo.txt", "Hello, this is writeFile!", "utf8", (err) => {
  if (err) throw err;
  console.log("1. File written successfully.");

  // 2. Read File
  fs.readFile("demo.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("2. File contents:", data);

    // 3. Append File
    fs.appendFile("demo.txt", "\nThis text is appended!", (err) => {
      if (err) throw err;
      console.log("3. Data appended to file.");

      // 4. Rename File
      fs.rename("demo.txt", "demo-renamed.txt", (err) => {
        if (err) throw err;
        console.log("4. File renamed successfully.");

        // 5. Delete File
        fs.unlink("demo-renamed.txt", (err) => {
          if (err) throw err;
          console.log("5. File deleted successfully.");
        });
      });
    });
  });
});
