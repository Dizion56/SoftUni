async function getInfo() {
  const busUl = document.getElementById("buses");
  busUl.innerHTML = "";
  try {
    const stopName = document.getElementById("stopName");

    const stopId = document.getElementById("stopId").value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const data = await fetch(url).then((data) => data.json());

    stopName.textContent = data.name;

    Object.entries(data.buses).forEach(([busId, time]) => {
      const li = document.createElement("li");
      li.textContent = `Bus ${busId} arrives in ${time} minutes`;
      busUl.appendChild(li);
    });
  } catch (err) {
    stopName.textContent = "Error";
  }
}
