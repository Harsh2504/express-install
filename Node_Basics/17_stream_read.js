const fs = require("fs");

// Create a readable stream
const readStream = fs.createReadStream("sample.txt", "utf8");

// Event: when a chunk of data is available
readStream.on("data", (chunk) => {
  console.log("Received chunk:");
  console.log(chunk);
});

// Event: when reading is finished
readStream.on("end", () => {
  console.log("Finished reading the file.");
});

// Event: if an error occurs
readStream.on("error", (err) => {
  console.error("Error:", err);
});
