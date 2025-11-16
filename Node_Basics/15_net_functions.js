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
});

// 2. server.listen() - start server
server.listen(5000, () => {
  console.log("Server running on port 5000");

  // 4. Create TCP client after server starts
  const client = net.connect(5000, () => {
    console.log("Client connected to server.");

    // Send message to server
    client.write("Hello Server!");
  });
});

// 3. server.getConnections() - check active connections
setTimeout(() => {
  server.getConnections((err, count) => {
    console.log("Active connections:", count);
  });
}, 2000);
