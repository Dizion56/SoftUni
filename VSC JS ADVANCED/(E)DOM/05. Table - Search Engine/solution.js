function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const tableData = document.querySelectorAll("tbody tr");

  function onClick() {
    const searchWord = document
      .getElementById("searchField")
      .value.toLowerCase();

    for (const data of tableData) {
      const currField = data.textContent.toLowerCase();
      if (currField.includes(searchWord)) {
        data.className = "select";
      } else {
        data.className = "";
      }
    }
    document.getElementById("searchField").value = "";
  }
}
