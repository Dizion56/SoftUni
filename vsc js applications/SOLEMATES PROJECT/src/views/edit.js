import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { getShoesByID, updateShoes } from "../api/data.js";
import page from "../../node_modules/page/page.mjs";

const editTemplate = (shoe) => html`<section id="edit">
  <div class="form">
    <h2>Edit item</h2>
    <form class="edit-form" @submit=${onSubmit} id=${shoe._id}>
      <input
        type="text"
        name="brand"
        id="shoe-brand"
        placeholder="Brand"
        value=${shoe.brand}
      />
      <input
        type="text"
        name="model"
        id="shoe-model"
        placeholder="Model"
        value=${shoe.model}
      />
      <input
        type="text"
        name="imageUrl"
        id="shoe-img"
        placeholder="Image url"
        value=${shoe.imageUrl}
      />
      <input
        type="text"
        name="release"
        id="shoe-release"
        placeholder="Release date"
        value=${shoe.release}
      />
      <input
        type="text"
        name="designer"
        id="shoe-designer"
        placeholder="Designer"
        value=${shoe.designer}
      />
      <input
        type="text"
        name="value"
        id="shoe-value"
        placeholder="Value"
        value=${shoe.value}
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function showEdit(context) {
  const shoe = await getShoesByID(context.params.id);
  render(editTemplate(shoe), document.querySelector("main"));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const brand = formData.get("brand");
  const model = formData.get("model");
  const imageUrl = formData.get("imageUrl");
  const release = formData.get("release");
  const designer = formData.get("designer");
  const value = formData.get("value");

  if (
    brand != "" &&
    model != "" &&
    imageUrl != "" &&
    release != "" &&
    designer != "" &&
    value != ""
  ) {
    await updateShoes(e.target.id, {
      brand,
      model,
      imageUrl,
      release,
      designer,
      value,
    });
    page.show(`/details/${e.target.id}`);
  } else {
    return;
  }
}
