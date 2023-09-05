function extractText() {
  const items = document.getElementsByTagName("li");
  const arr = Array.from(items).map((x) => x.textContent);
  let textArea = document.getElementById("result");
  textArea.value = arr.join("\n");
}
