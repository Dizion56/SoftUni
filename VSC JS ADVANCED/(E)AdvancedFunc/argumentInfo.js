function argumentInfo(...params) {
  const obj = {};
  params.forEach((element) => {
    console.log(`${typeof element}: ${element}`);
    if (obj.hasOwnProperty(typeof element)) {
      obj[typeof element] += 1;
    } else {
      obj[typeof element] = 1;
    }
  });
  const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (const [type, count] of sorted) {
    console.log(`${type} = ${count}`);
  }
}

argumentInfo("cat", "test", 42, function () {
  console.log("Hello world!");
});
