const arr = [
  { name: "Anvar", age: 11 },
  { name: "Nodir", age: 21 },
];

let filtered_arr = arr.filter((el) => {
  return el.age > 15;
});

console.log(filtered_arr);
