const fs = require("fs");
const express = require("express");
const { response } = require("express");

const app = express();

app.use(express.json());

app.get("/expenses", (req, res) => {
  let users = fs.readFileSync("users10.json", "utf8");

  users = JSON.parse(users);
  res.send(users);
});

app.post("/expenses", (req, res) => {
  const req_obj = req.body;
  let users = fs.readFileSync("users10.json", "utf8");

  users = JSON.parse(users);
  users.push({
    id: req_obj.id,
    month: req_obj.month,
    amount: req_obj.amount,
  });
  fs.writeFileSync("users10.json", JSON.stringify(users, null, 2), "utf8");
  res.send("Qoshildi");
});

app.put("/expenses", (req, res) => {
  const req_obj = req.body;
  let users = fs.readFileSync("users10.json", "utf8");

  users = JSON.parse(users);
  for (let el of users) {
    if (el.id == req_obj.id) {
      el.month == req_obj.month || el.month;
      el.amount == req_obj.amount || el.amount;
    }
  }
  fs.writeFileSync("users10.json", JSON.stringify(users, null, 2), "utf8");
  res.send(users);
});

app.delete("/expenses", (req, res) => {
  const req_obj = req.body;
  let users = fs.readFileSync("users10.json", "utf8");

  users = JSON.parse(users);
  // console.log(req_obj);
  users.filter((el) => {
    if (el.id != req_obj.id) {
      return true;
    }
  });
  fs.writeFileSync("users10.json", JSON.stringify(users, null, 2), "utf8");
  res.send("deleted");
});

app.get("/expenses-All", (req, res) => {
  let users = fs.readFileSync("users10.json", "utf8");
  let user = JSON.parse(users)

  let sum = 0

  for (let i = 0; i < user.length; i++) {
    sum += user[i].amount

  }
  let userobj = {sum}
  res.send(userobj)
});

app.listen(8080, () => {
  console.log("working...");
});
