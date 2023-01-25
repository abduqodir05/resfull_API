let arr = [23, 53, 85, 93, 10, 11, 8, 2];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

console.log(max);
