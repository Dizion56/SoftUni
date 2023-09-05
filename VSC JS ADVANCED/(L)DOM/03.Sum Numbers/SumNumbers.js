function calc() {
  const elOne = document.getElementById("num1");
  const elTwo = document.getElementById("num2");
  const num1 = Number(elOne.value);
  const num2 = Number(elTwo.value);
  const elThree = document.getElementById("sum");
  elThree.value = num1 + num2;
}
