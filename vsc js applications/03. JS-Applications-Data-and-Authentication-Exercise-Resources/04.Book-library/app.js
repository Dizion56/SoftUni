const url = "http://localhost:3030/jsonstore/collections/books";

const loadBtn = document.getElementById("loadBooks");
loadBtn.addEventListener("click", loadBooks);

async function loadBooks() {
  const response = await fetch(url);
  const data = await response.json();

  const tbody = document.querySelector("tbody");

  Object.values(data).forEach((x) => {
    const tr = document.createElement("tr");
    const authorTd = document.createElement("td");
    const titleTd = document.createElement("td");
    const actionTd = document.createElement("td");

    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    authorTd.textContent = x.author;
    titleTd.textContent = x.title;
    actionTd.appendChild(editBtn);
    actionTd.appendChild(deleteBtn);

    tr.appendChild(authorTd);
    tr.appendChild(titleTd);
    tr.appendChild(actionTd);
    tbody.appendChild(tr);
  });
}
