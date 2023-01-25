const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  let users = fs.readFileSync("users.json", "utf8");

  users = JSON.parse(users);
  res.send(users);
});
app.post("/users", (req, res) => {
  const req_obj = req.body;

  let users = fs.readFileSync("users.json", "utf8");
  users = JSON.parse(users);
  users.push({
    id: req_obj.id,
    name: req_obj.name,
    password: req_obj.password,
  });

  fs.writeFileSync("users.json", JSON.stringify(users, null, 2), "utf8");
  res.send("added");
});

app.put("/users", (req, res) => {
  const req_obj = req.body;

  let users = fs.readFileSync("users.json", "utf8");
  users = JSON.parse(users);
  for (let el of users) {
    if (el.id == req_obj.id) {
      el.name = req_obj.name || el.name;
      el.password = req_obj.password || el.password;
    }
  }
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2), "utf8");
  res.send("changed");
});
app.delete("/users", (req, res) => {
  const req_obj = req.body;

  let users = fs.readFileSync("users.json", "utf8");
  users = JSON.parse(users);

  users.filter((el) => {
    if (el.id != req_obj.id) {
      return true;
    }
  });
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2), "utf8");
  res.send("deleted");
});

app.listen(8080, () => {
  console.log("working...");
});
