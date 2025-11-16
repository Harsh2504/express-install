const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017"; // Local MongoDB
const client = new MongoClient(url);

async function createDatabase() {
  try {
    await client.connect();

    console.log("Connected to MongoDB");

    // Database name
    const db = client.db("APL_Practical_DB");

    // Create a sample collection
    await db.createCollection("students");

    console.log("Database and collection created successfully!");

  } catch (err) {
    console.error(err);
  } finally {
    await client.close(); 
  }
}

module.exports = createDatabase;