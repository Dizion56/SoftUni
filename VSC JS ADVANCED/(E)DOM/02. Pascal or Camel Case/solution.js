function solve() {
  let input = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  input = input.toLowerCase().split(" ");
  let buff = "";
  if (convention === "Camel Case") {
    buff += input[0];
    for (let i = 1; i < input.length; i++) {
      buff += input[i].charAt(0).toUpperCase() + input[i].slice(1);
    }
  } else if (convention === "Pascal Case") {
    for (let i = 0; i < input.length; i++) {
      buff += input[i].charAt(0).toUpperCase() + input[i].slice(1);
    }
  } else {
    buff += "Error!";
  }
  const result = document.getElementById("result");
  result.textContent = buff;
}
