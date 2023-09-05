function magicMatrices(arr) {
  let isMagic = arr[0].reduce((acc, sum) => acc + sum, 0);
  for (let i = 0; i < arr.length; i++) {
    let rowSum = 0;
    let colSum = 0;
    for (let j = 0; j < arr.length; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
    }

    if (isMagic !== rowSum || isMagic !== colSum) {
      return false;
    }
  }
  return true;
}
console.log(
  magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
