const arr = [34, 67, 12, 16, 89, 98, 32];
const new_arr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    new_arr.push(arr[i]);
  }
}
console.log(new_arr);
