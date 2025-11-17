const net = require("net");

// 1. Create TCP Server
const server = net.createServer((socket) => {
  console.log("Client connected.");

  // 5. socket.write() - send data to client
  socket.write("Welcome to Node TCP Server!\n");

  // Receive data from client
  socket.on("data", (data) => {
    console.log("Client says:", data.toString());
  });

  socket.on("end", () => {
    console.log("Client disconnected.");
  });

  // Handle errors gracefully
  socket.on("error", (err) => {
    console.log("Socket error:", err.message);
  });
});

// 2. server.listen() - start server
server.listen(5000, () => {
  console.log("Server running on port 5000");
});

// 3. server.getConnections() - check active connections
setInterval(() => {
  server.getConnections((err, count) => {
    if (err) {
      console.error("Error:", err);
    } else {
      console.log("Active connections:", count);
    }
  });
}, 5000);
