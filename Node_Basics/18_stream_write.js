const fs = require("fs");

// Create a writable stream
const writeStream = fs.createWriteStream("stream_output.txt", "utf8");

// Write data to the stream
writeStream.write("This is the first line written using writable stream.\n");
writeStream.write("This is the second line.\n");

// End the stream
writeStream.end();

// Event: when writing is finished
writeStream.on("finish", () => {
  console.log("Writing finished! Check stream_output.txt");
});

// Event: handle errors
writeStream.on("error", (err) => {
  console.error("Error:", err);
});
