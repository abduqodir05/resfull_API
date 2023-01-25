const arr = [
  { name: "Anvar", age: 11 },
  { name: "Nodir", age: 21 },
  { name: "Nodir", age: 21 },
  { name: "Nodisr", age: 21 },
];

function getBigNum(arr) {
  let value = 0
  for (let el of arr) {
    if (el.age > 15) {
      value++
    }
  }
  return value;
}
console.log(getBigNum(arr));
