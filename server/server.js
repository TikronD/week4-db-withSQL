import express from "express";
import cors from "cors";

import Database from "better-sqlite3";
const db = new Database("database.db");
const app = express();
app.use(express.json());
app.use(cors()); // middleware - to bridge between 2 servers

app.get("/", function (request, response) {
  response.json("You are looking at my root route, how rude!");
});

// statement to receive the messages from the database
app.get("/messages", function (request, response) {
  const messages = db.prepare("SELECT * FROM messages").all();
  response.json(messages);
});

app.post("/messages", function (request, response) {
  console.log(request.body);
  const guest = request.body.guest;
  const message = request.body.message;

  const newGuest = db
    .prepare(`INSERT INTO messages (guest, message) VALUES (?, ?)`)
    .run(guest, message);
  response.json("This is where I will send my messages in our database");
});

app.listen(8080, function () {
  console.log("IT'S WORKING!");
});
