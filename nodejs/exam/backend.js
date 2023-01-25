const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const req_body = req.body;

  let users = fs.readFileSync("users.json", "utf8");
  users = JSON.parse(users);

  let filtered_user = users.find((el) => {
    if (el.login == req_body.login && el.password == req_body.password) {
      return true;
    }
  });
  console.log(filtered_user);
  if (filtered_user == undefined) {
    res.send({
      error: "invalid user info",
      access: false,
    });
    return;
  } else {
    res.send({
      id: filtered_user.id,
      name: filtered_user.login,
      access: true,
    });
    return;
  }
});

app.post("/users", (req, res) => {
  const req_body = req.body;

  let users = fs.readFileSync("users.json", "utf8");
  users = JSON.parse(users);

  let filtered_user = users.find((el) => {
    if (el.id == req_body.id) {
      return true;
    }
  });

  if (filtered_user == undefined) {
    res.send({
      error: "invalid user info",
      access: false,
    });
    return;
  }

  res.send(filtered_user.contacts);
  return;
});

app.post("/contacts", (req, res) => {
  const req_body = req.body;

  let users = fs.readFileSync("users.json", "utf8");
  users = JSON.parse(users);

  let index = users.findIndex((el) => el.id == req_body.id);

  let new_contact = {
    name: req_body.name,
    phone: req_body.phone,
  };

  users[index].contacts.push(new_contact);

  fs.writeFileSync("users.json", JSON.stringify(users, null, 2), "utf8");
  res.send(new_contact);
  return;
});

app.listen(8080, () => {
  console.log("http://localhost:8080");
});