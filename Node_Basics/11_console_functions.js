// 1. console.log()
console.log("1. This is console.log() - used for normal output");

// 2. console.error()
console.error("2. This is console.error() - used for error messages");

// 3. console.warn()
console.warn("3. This is console.warn() - used for warnings");
console.info("4. This is console.info() - used for informational messages");
// 4. console.table()
const student = [
  { name: "Harsh", age: 21 },
  { name: "Yash", age: 22 },
];
console.table(student);

// 5. console.time() and console.timeEnd()
console.time("LoopTime");
for (let i = 0; i < 1000000; i++) {}      // just a loop to measure time
console.timeEnd("LoopTime");
