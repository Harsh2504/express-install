// NET FUNCTIONS DEMONSTRATION
// This file demonstrates 5 key functions of the Node.js Net module:
// 1. net.createServer() - Create a TCP server
// 2. server.listen() - Start listening for connections
// 3. server.getConnections() - Get active connection count
// 4. net.connect() - Create a TCP client connection
// 5. socket.write() - Send data over socket

// HOW TO RUN:
// Terminal 1: node 15_net_server.js
// Terminal 2: node 15_net_client.js

// FUNCTIONS USED:
console.log(`
Net Module Functions Demonstrated:

1. net.createServer(callback)
   - Creates a TCP server
   - Callback receives socket object for each connection

2. server.listen(port, [host], [callback])
   - Starts server listening on specified port
   - Callback fires when server is ready

3. server.getConnections(callback)
   - Gets the number of active connections
   - Callback returns (err, count)

4. net.connect(options, [callback])
   - Creates a TCP client connection
   - Callback fires when connected

5. socket.write(data, [encoding], [callback])
   - Sends data to the socket
   - Works for both server and client sockets

See 15_net_server.js and 15_net_client.js for working examples.
`);
