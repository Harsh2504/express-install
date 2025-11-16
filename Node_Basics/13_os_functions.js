const os = require("os");

console.log("1. Operating System Type:", os.type());

console.log("2. Platform:", os.platform());

console.log("3. CPU Architecture:", os.arch());

console.log("4. Free Memory (bytes):", os.freemem());

console.log("5. Total Memory (bytes):", os.totalmem());

console.log("6. Hostname:", os.hostname());
console.log("7. Uptime (seconds):", os.uptime());

console.log("8. Network Interfaces:", os.networkInterfaces());