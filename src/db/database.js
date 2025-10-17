const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();



const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
})

const getConnection = () => connection;

module.exports = {
  getConnection
}
