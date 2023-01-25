const fs = require("fs");
const users_file = fs.readFileSync("members.json", "utf8");

let users = JSON.parse(users_file);

function searchUser(name, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name == name && users[i].password == password) {
      return users[i];
    }
  }
}
console.log(searchUser("nodir", 1222));
