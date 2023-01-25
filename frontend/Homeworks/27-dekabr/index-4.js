const arr = [31, 67, 13, 16, 89, 98, 37,75,98];
const new_arr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    new_arr.push(arr[i]);
  }
}
console.log(new_arr);
