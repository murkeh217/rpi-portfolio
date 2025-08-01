const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(process.cwd(), 'visits.db');
const db = new sqlite3.Database(dbPath);

console.log('📊 Current visits in database:\n');

db.all("SELECT * FROM visits ORDER BY timestamp DESC", (err, rows) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  
  if (rows.length === 0) {
    console.log('No visits recorded yet.');
  } else {
    console.log(`Total visits: ${rows.length}\n`);
    rows.forEach((row, index) => {
      console.log(`${index + 1}. ID: ${row.id}`);
      console.log(`   IP: ${row.ip}`);
      console.log(`   Location: ${row.city}, ${row.region}, ${row.country}`);
      console.log(`   Browser: ${row.browser} on ${row.os} (${row.platform})`);
      console.log(`   Time: ${row.timestamp}`);
      console.log('');
    });
  }
  
  db.close();
});
