import { render, html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getAllCars } from "../api/data.js";

const dashboardTemplate = (cars) => html`<h3 class="heading">Our Cars</h3>
  <section id="dashboard">
    ${cars.map(
      (c) => html` <div class="car">
        <img src="${c.imageUrl}" alt="example1" />
        <h3 class="model">${c.model}</h3>
        <div class="specs">
          <p class="price">Price: €${c.price}</p>
          <p class="weight">Weight: ${c.weight} kg</p>
          <p class="top-speed">Top Speed: ${c.speed} kph</p>
        </div>
        <a class="details-btn" href="/details/${c._id}">More Info</a>
      </div>`
    )}
  </section>
  ${cars.length == 0
    ? html`<h3 class="nothing">Nothing to see yet</h3>`
    : nothing} `;

export async function showDashboard() {
  try {
    const cars = await getAllCars();
    render(dashboardTemplate(cars), document.querySelector("main"));
  } catch (e) {
    throw new Error(e.message);
  }
}
