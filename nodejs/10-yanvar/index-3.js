const fs = require("fs");
const text_file = fs.readFileSync("a.txt", "utf8");

if (text_file.length > 50) {
  console.log("more than 50 letters");
} else {
  console.log("less than 50 letter");
}
