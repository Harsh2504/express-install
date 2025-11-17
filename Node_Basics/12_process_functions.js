// 1. process.cwd() - current working directory
console.log("1. Current Working Directory:", process.cwd());

// 2. process.pid - process ID
console.log("2. Process ID:", process.pid);

// 3. process.version - Node.js version
console.log("3. Node.js Version:", process.version);

// 4. process.memoryUsage() - memory usage details
console.log("4. Memory Usage:");
console.table(process.memoryUsage());

// 5. process.argv - command line arguments
console.log("5. Command Line Arguments:", process.argv);

// 6. process.exit() - exit process (commented for safety)
// process.exit();


//proper functions find