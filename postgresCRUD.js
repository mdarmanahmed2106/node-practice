import pool from "./db.js";

async function init() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL
    )
  `);
  console.log("✅ Users table ready");
}

async function createUser(name, email) {
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email]
  );
  console.log("Created:", result.rows[0]);
  return result.rows[0].id;
}

async function getUsers() {
  const result = await pool.query("SELECT * FROM users");
  console.log("All Users:", result.rows);
}

async function updateUser(id, name){
  const result = await pool.query(
    "UPDATE users SET name = $1 WHERE id = $2 RETURNING *",
    [name, id]
  );
  console.log("Updated:", result.rows[0]);
}

async function deleteUser(id) {
  const result = await pool.query(
    "DELETE FROM users WHERE id = $1 RETURNING *",
    [id]
  );
  console.log("Deleted:", result.rows[0]);
}
async function main() {
  await init();
  //await createUser("ABCD", "ABCD@example.com");
  // await getUsers();
  // await updateUser(userId, "ABC");
  // await deleteUser(userId);

  pool.end();
}
main();


//CREATE STUDENT MANAGEMENT SYSTEM WHERE
//STUDENT DETAILS WILL BE STORED WITH PSQL
//STUDENT DETAILS CAN BE UPDATED AND DELTED WITH PSQL 