function contains(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return "yes";
    }
  }
  return "no";
}

console.log(
  contains([1, 3, 4, 5, 7, 8, 99, 8, 7, 65, 5, 23, 23, 23, 90, 70, 50, 30], 55)
);
