import pool from './db.js';
async function init() {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE
    )`);
    console.log("Users table created.");
}

async function createUser(name, email) {
    const result = await pool.query(
        'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
        [name, email]
    );
    console.log("User created:", result.rows[0]);
    return result.rows[0],id;
}
async function getUserById() {
    const result = await pool.query(
        'SELECT * FROM users WHERE id = $1',
        [id]
    );
    console.log("User fetched:", result.rows[0]);
    return result.rows[0];
}   
async function updateUser(id, name, email) {
    const result = await pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
        [name, email, id]
    );
    console.log("User updated:", result.rows[0]);
    return result.rows[0];
}

