const { MongoClient } = require("mongodb");
const readline = require("readline");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function insertRecords() {
  try {
    await client.connect();

    const db = client.db("APL_Practical_DB");
    const collection = db.collection("students");

    const students = [
      { id: 1, name: "Harshvardhan Patil", age: 21 },
      { id: 2, name: "Yash Ainpaure", age: 22 },
      { id: 3, name: "Pruthviraj Sawant", age: 23 }
    ];

    const result = await collection.insertMany(students);

    console.log("Records inserted successfully!");
    console.log(result);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

async function insertUserRecord() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (prompt) => new Promise((resolve) => rl.question(prompt, resolve));

  try {
    await client.connect();

    const db = client.db("APL_Practical_DB");
    const collection = db.collection("students");

    const id = await question("Enter student ID: ");
    const name = await question("Enter student name: ");
    const age = await question("Enter student age: ");

    const student = {
      id: parseInt(id),
      name: name,
      age: parseInt(age)
    };

    const result = await collection.insertOne(student);

    console.log("Record inserted successfully!");
    console.log(result);

  } catch (err) {
    console.error(err);
  } finally {
    rl.close();
    await client.close();
  }
}

async function fetchAllRecords() {
  try {
    await client.connect();

    const db = client.db("APL_Practical_DB");
    const collection = db.collection("students");

    const records = await collection.find({}).toArray();

    console.log("All Records:");
    console.log(records);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

async function fetchOneRecord(id) {
  try {
    await client.connect();

    const db = client.db("APL_Practical_DB");
    const collection = db.collection("students");

    const record = await collection.findOne({ id: parseInt(id) });

    if (record) {
      console.log("Record Found:");
      console.log(record);
    } else {
      console.log("No record found with ID: " + id);
    }

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

module.exports = { insertRecords, insertUserRecord, fetchAllRecords, fetchOneRecord };