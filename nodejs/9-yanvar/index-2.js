const fs = require("fs");
const text_file = fs.readFileSync("a.txt", "utf8");

let newstr = ""

for (let i = text_file.length-1; i > 0; i--){
  if(text_file[i] == " "){
      break
  } else {
    newstr += text_file[i]
  }
}
// console.log(newstr);

newstr = newstr.split("").reverse().join("")
console.log(newstr);
