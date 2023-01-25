let arr = ["car", 29, 43, "car", true, "car", 22, "car"];
let iterator = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == "car") {
    iterator++;
  }
}
console.log(iterator);
