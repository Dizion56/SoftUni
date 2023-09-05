function create(words) {
  const content = document.getElementById("content");
  words.forEach((word) => {
    let newDiv = document.createElement("div");
    let newParagraph = document.createElement("p");
    newParagraph.textContent = word;
    newParagraph.style.display = "none";
    newDiv.addEventListener("click", show);
    newDiv.appendChild(newParagraph);
    content.appendChild(newDiv);

    function show(e) {
      newParagraph.style.display = "block";
    }
  });
}
