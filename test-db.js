const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

console.log('Testing database creation...');
console.log('Current directory:', process.cwd());

// Same logic as in your API route
const dbPath = path.join(process.cwd(), 'visits.db');
console.log('Database path:', dbPath);

// Check if sqlite3 module is working
console.log('SQLite3 module loaded successfully');

// Create database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error creating database:', err);
    return;
  }
  console.log('Database connection established');
});

// Create table
db.run(`
  CREATE TABLE IF NOT EXISTS visits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT,
    country TEXT,
    region TEXT,
    city TEXT,
    browser TEXT,
    os TEXT,
    platform TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`, (err) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created successfully');
  }
});

// Insert test data
db.run(
  `INSERT INTO visits (ip, country, region, city, browser, os, platform) VALUES (?, ?, ?, ?, ?, ?, ?)`,
  ['127.0.0.1', 'Local', 'Test', 'localhost', 'Chrome', 'Linux', 'x64'],
  function(err) {
    if (err) {
      console.error('Error inserting data:', err);
    } else {
      console.log('Test data inserted, ID:', this.lastID);
    }
  }
);

// Query data
db.all("SELECT * FROM visits", (err, rows) => {
  if (err) {
    console.error('Error querying data:', err);
  } else {
    console.log('Data in database:', rows);
  }
  
  // Close database
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('Database connection closed');
    }
    
    // Check if file was created
    if (fs.existsSync(dbPath)) {
      const stats = fs.statSync(dbPath);
      console.log('Database file created successfully!');
      console.log('File size:', stats.size, 'bytes');
    } else {
      console.log('Database file was not created');
    }
  });
});
