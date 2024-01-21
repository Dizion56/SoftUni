function attachEvents() {
  const ul = document.getElementById("phonebook");
  url = "http://localhost:3030/jsonstore/phonebook";
  const btnLoad = document.getElementById("btnLoad");
  btnLoad.addEventListener("click", loadPhonebook);
  const btnCreate = document.getElementById("btnCreate");
  btnCreate.addEventListener("click", createContact);

  async function loadPhonebook() {
    const response = await fetch(url);
    const data = await response.json();

    ul.innerHTML = "";
    Object.values(data).forEach((x) => {
      const li = document.createElement("li");
      li.textContent = `${x.person}: ${x.phone}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.setAttribute("id", x._id);
      deleteBtn.addEventListener("click", deleteItem);
      li.appendChild(deleteBtn);
      ul.appendChild(li);
    });

    async function deleteItem(e) {
      const itemId = e.target.id;
      await fetch(`${url}/${itemId}`, {
        method: "Delete",
      });

      loadPhonebook();
    }
  }

  async function createContact() {
    const person = document.getElementById("person").value.trim();
    const phone = document.getElementById("phone").value.trim();
    if (person === "" || phone === "") {
      alert("Name and phone must not be empty!");
      return;
    }
    const data = JSON.stringify({
      person,
      phone,
    });

    await fetch(url, {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: data,
    });
    person.textContent = "";
    phone.textContent = "";
    loadPhonebook();
  }
}

attachEvents();
