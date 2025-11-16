const createDatabase = require("./create_db");
const { insertRecords, insertUserRecord, fetchAllRecords, fetchOneRecord } = require("./insert_records");

async function main() {
  await createDatabase();
  await insertRecords();
  await insertUserRecord();
  await fetchAllRecords();
  await fetchOneRecord(1);
}

main();