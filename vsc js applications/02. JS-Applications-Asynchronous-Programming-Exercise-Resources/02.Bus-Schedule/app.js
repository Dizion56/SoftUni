function solve() {
  const span = document.querySelector(".info");
  let busId = "depot";
  let busName = "";

  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");

  async function depart() {
    try {
      let data = await fetch(
        `http://localhost:3030/jsonstore/bus/schedule/${busId}`
      ).then((data) => data.json());
      console.log(data);
      busName = data.name;
      busId = data.next;
      span.textContent = `Next stop ${busName}`;
      departBtn.disabled = true;
      arriveBtn.disabled = false;
    } catch (err) {
      span.textContent = `Error`;
      departBtn.disabled = true;
      arriveBtn.disabled = true;
    }
  }

  function arrive() {
    span.textContent = `Arriving at ${busName}`;
    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
