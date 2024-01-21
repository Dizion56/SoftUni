async function loadPage() {
  const tbody = document.querySelector("tbody");
  const url = " http://localhost:3030/jsonstore/collections/students";
  const request = await fetch(url);
  const data = await request.json();
  Object.values(data).forEach((x) => {
    const tr = document.createElement("tr");
    const tdFname = document.createElement("td");
    const tdLname = document.createElement("td");
    const tdFnumber = document.createElement("td");
    const tdgrade = document.createElement("td");
    tdFname.textContent = x.firstName;
    tdLname.textContent = x.lastName;
    tdFnumber.textContent = x.facultyNumber;
    tdgrade.textContent = x.grade;
    tr.appendChild(tdFname);
    tr.appendChild(tdLname);
    tr.appendChild(tdFnumber);
    tr.appendChild(tdgrade);
    tbody.appendChild(tr);
  });

  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", addStudent);

  async function addStudent() {
    const firstName = document.querySelector("input[name='firstName']").value;
    const lastName = document.querySelector("input[name='lastName']").value;
    const facultyNumber = document.querySelector(
      "input[name='facultyNumber']"
    ).value;
    const grade = document.querySelector("input[name='grade']").value;

    const data = JSON.stringify({
      firstName,
      lastName,
      facultyNumber,
      grade,
    });

    await fetch(url, {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: data,
    });

    firstName.textContent = "";
    lastName.textContent = "";
    facultyNumber.textContent = "";
    grade.textContent = "";

    loadPage();
  }
}

loadPage();
