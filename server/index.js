
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files from the client folder
app.use(express.static(path.join(__dirname, '../client')));


// SQLite database setup
const db = new sqlite3.Database('./projects.db', (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to SQLite database');
  }
});


// Create projects table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL
)`);


// Default Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/Html/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get('/api/projects', (req, res) => {
  db.all('SELECT * FROM projects', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});