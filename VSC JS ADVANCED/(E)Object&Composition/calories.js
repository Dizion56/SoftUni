function calorieObject(arr) {
  let obj = {};
  while (arr.length !== 0) {
    let key = arr.shift();
    let value = arr.shift();
    obj[key] = Number(value);
  }
  return obj;
}
console.log(calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]));
console.log(
  calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"])
);
