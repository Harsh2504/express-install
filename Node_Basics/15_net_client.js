const net = require("net");

// 4. Create TCP client
const client = net.connect(5000, "localhost", () => {
  console.log("Connected to server on port 5000");

  // Send message to server
  client.write("Hello Server! This is the client.");
});

// Receive data from server
client.on("data", (data) => {
  console.log("Server says:", data.toString());
});

client.on("end", () => {
  console.log("Disconnected from server.");
  process.exit(0);
});

client.on("error", (err) => {
  console.error("Connection error:", err.message);
  process.exit(1);
});

// Send another message after 2 seconds
setTimeout(() => {
  if (!client.destroyed) {
    client.write("Second message from client.");
  }
}, 2000);

// Close connection after 5 seconds
setTimeout(() => {
  if (!client.destroyed) {
    client.end();
  }
}, 5000);
