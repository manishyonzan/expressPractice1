// const pool = require("../database");

const pool = require("../database");

class LoginRepository {
    async getLogin() {
        const response = await pool.query('SELECT * FROM notes_app.note');
        return response[0];
    }
}

module.exports = new LoginRepository();