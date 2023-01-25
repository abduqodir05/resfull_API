const fs = require("fs");
const users_file = fs.readFileSync("users.json", "utf8");

let users = JSON.parse(users_file);

function password3tadanKopbosin() {
  const validUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].password.length > 3) {
      validUsers.push(users[i]);
    }
  }
  return validUsers;
}

const validUserlar = password3tadanKopbosin();
const myJson = JSON.stringify(validUserlar);
console.log(myJson);

fs.writeFileSync("valid_users.json", myJson, "utf8");
