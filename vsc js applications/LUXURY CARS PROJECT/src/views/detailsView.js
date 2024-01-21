import { deleteCars, getCarsByID } from "../api/data.js";
import { render, html, nothing } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

const detailsTemplate = (car) => {
  const isOwner =
    car._ownerId === JSON.parse(sessionStorage.getItem("user"))?._id;
  return html`<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${car.imageUrl}" alt="example1" />
      <p id="details-title">${car.model}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="price">Price: €${car.price}</p>
          <p class="weight">Weight: ${car.weight} kg</p>
          <p class="top-speed">Top Speed: ${car.speed} kph</p>
          <p id="car-description">${car.about}</p>
        </div>
        ${isOwner
          ? html`<div id="action-buttons">
              <a href="/edit/${car._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="${car._id}" @click=${onDelete}
                >Delete</a
              >
            </div>`
          : nothing}
      </div>
    </div>
  </section>`;
};

export async function showDetails(context) {
  const car = await getCarsByID(context.params.id);
  render(detailsTemplate(car), document.querySelector("main"));
}

async function onDelete(e) {
  const conf = confirm("Are you sure?");
  if (conf) {
    await deleteCars(e.target.id);
    page.show("/dashboard");
  }
}
