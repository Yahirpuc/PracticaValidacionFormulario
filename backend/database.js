const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ubicación del archivo de base de datos
const dbPath = path.resolve(__dirname, 'ciber_ciudadanos.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error("Error al abrir SQLite:", err.message);
    else console.log("Conectado a SQLite: ciber_ciudadanos.db");
});

// Definición de la tabla con restricciones de unicidad 
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL, 
        email TEXT UNIQUE NOT NULL
    )`);
});

module.exports = db;