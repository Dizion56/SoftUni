function search() {
  let towns = document.querySelectorAll("#towns li");
  const searchWord = document.querySelector("input").value.toLowerCase();
  let result = document.getElementById("result");
  let matchCount = 0;
  for (const town of towns) {
    const word = town.textContent.toLowerCase();
    if (word.includes(searchWord)) {
      town.style.textDecoration = "underline";
      town.style.fontWeight = "bold";
      matchCount++;
    } else {
      town.style.textDecoration = "";
      town.style.fontWeight = "";
    }
  }

  result.textContent = `${matchCount} matches found`;
}
