const fs = require("fs");
const text_file = fs.readFileSync("a.txt", "utf8");

let count = 0;

for (let i = 0; i < text_file.length; i++) {
  if (
    text_file[i] == "a" ||
    text_file[i] == "i" ||
    text_file[i] == "e" ||
    text_file[i] == "o" ||
    text_file[i] == "u"
  ) {
    count++;
  }
}
console.log(count);
