  const arr = [ 12, 62, 7, 18, 9, 15, 19 ] 
  sum = 0
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 == 0) {
      element += sum
    }
  }
  console.log(sum);