import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    guest TEXT,
    message TEXT
  )
`);

// code to insert message into database
db.exec(`
    INSERT INTO messages (guest, message)
    VALUES
    ('Thess', 'Beautiful food, lovely service and surroundings.'),
    ('Helen','Lovely food, lovely wine, fantastic company, love you Chez Vous!'),
    ('Albert', 'Very enjoyable meal, friendly & helpful staff.'),
    ('Parker', 'The meal was lovely and we had a lovely time, thank you for making us so welcome.')
`);
