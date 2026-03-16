const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "password",
  database: "testdb"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/", (req, res) => {
  res.send("Hello from Node.js Backend");
});

app.get("/data", (req, res) => {
  db.query("SELECT NOW() AS time", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

