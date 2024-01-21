import { render, html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getAllShoes } from "../api/data.js";

const dashboardTemplate = (shoes) => html`<section id="dashboard">
  <h2>Collectibles</h2>
  <ul class="card-wrapper">
    ${shoes.map(
      (s) => html`<li class="card">
        <img src="${s.imageUrl}" alt="travis" />
        <p><strong>Brand: </strong><span class="brand">${s.brand}</span></p>
        <p><strong>Model: </strong><span class="model">${s.model}</span></p>
        <p><strong>Value:</strong><span class="value">${s.value}</span>$</p>
        <a class="details-btn" href="/details/${s._id}">Details</a>
      </li>`
    )}
  </ul>
  ${shoes.length == 0 ? html`<h2>There are no items added yet.</h2>` : nothing}
</section>`;

export async function showDashboard() {
  const shoes = await getAllShoes();
  render(dashboardTemplate(shoes), document.querySelector("main"));
}
