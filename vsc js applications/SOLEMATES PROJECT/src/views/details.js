import { render, html, nothing } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { deleteShoes, getShoesByID } from "../api/data.js";

const detailsTemplate = (shoe) => {
  const isOwner =
    shoe._ownerId === JSON.parse(sessionStorage.getItem("user"))?._id;

  return html`<section id="details">
    <div id="details-wrapper">
      <p id="details-title">Shoe Details</p>
      <div id="img-wrapper">
        <img src="${shoe.imageUrl}" alt="example1" />
      </div>
      <div id="info-wrapper">
        <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
        <p>Model: <span id="details-model">${shoe.model}</span></p>
        <p>Release date: <span id="details-release">${shoe.release}</span></p>
        <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
        <p>Value: <span id="details-value">${shoe.value}</span></p>
      </div>
      ${isOwner
        ? html`<div id="action-buttons">
            <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id=${shoe._id} @click=${onDelete}
              >Delete</a
            >
          </div>`
        : nothing}
    </div>
  </section>`;
};

export async function showDetails(context) {
  const shoe = await getShoesByID(context.params.id);

  render(detailsTemplate(shoe), document.querySelector("main"));
}

async function onDelete(e) {
  await deleteShoes(e.target.id);
  page.show("/dashboard");
}
