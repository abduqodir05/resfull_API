const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", (request, response) => {
  const body = request.body;

  if (!body.name) {
    response.send({ Error: "enter your name" });
    return;
  } else if (!body.last_name) {
    response.send({ Error: "enter your surname" });
    return;
  } else if (!body.age) {
    response.send({ Error: "enter your age" });
    return;
  } else if (!body.password) {
    response.send({ Error: "enter your password" });
    return;
  }

  let users = fs.readFileSync("users.json", "utf8");
  users = JSON.parse(users);

  let already_has_user = users.filter((el) => {
    if (el.name == body.name && el.last_name == body.last_name) {
      return true;
    }
  });
  if (already_has_user.length > 0) {
    response.send({ Error: "user with this name and surname already exist" });
    return;
  }

  let new_id = 1;
  if (users.length > 0) {
    new_id = users[users.length - 1].id + 1;
  }

  let new_user = {
    id: new_id,
    name: body.name,
    last_name: body.last_name,
    age: body.age,
    password: body.password,
  };

  users.push(new_user);
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2), "utf8");
  response.send(new_user);
  return;
});

app.listen(8080, () => {
  console.log("working...");
});
