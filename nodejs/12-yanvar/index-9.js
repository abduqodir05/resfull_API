const fs = require("fs");
const express = require("express");

const app = express();

app.use(express());

app.get("/users", (req, res) => {
  let users = fs.readFileSync("users9.json", "utf8");

  users = JSON.parse(users);
  res.send(users);
});

app.listen(8080, () => {
  console.log("working...");
})