let arr = [23, 53, 85, 93, 10, 11, 8, 2];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}

console.log(min);
