const db = require('./database');

const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users WHERE email = ?`;
        db.get(query, [email], (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
};


const findUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users WHERE username = ?`;
        db.get(query, [username], (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
};


const saveUser = (username, email) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO users (username, email) VALUES (?, ?)`;
        db.run(query, [username, email], function (err) {
            if (err) reject(err);
            else resolve({ id: this.lastID, username, email });
        });
    });
};

module.exports = { findUserByEmail, findUserByUsername, saveUser };