const path = require("path");

const filePath = "C:/Users/Harsh/Desktop/test/file.txt";

console.log("1. Basename:", path.basename(filePath));
// Output: file.txt

console.log("2. Directory Name:", path.dirname(filePath));
// Output: C:/Users/Harsh/Desktop/test

console.log("3. File Extension:", path.extname(filePath));
// Output: .txt

console.log("4. Join Path:", path.join("folder", "subfolder", "file.js"));
// Output: folder/subfolder/file.js

console.log("5. Resolve Path:", path.resolve("folder", "file.js"));
// Output: C:\Users\HARSH\...\folder\file.js (absolute path)

console.log("6. Parse Path:", path.parse(filePath));
// Output: object with root, dir, base, ext, name
