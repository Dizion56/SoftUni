import { render, html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { createShoes } from "../api/data.js";
import page from "../../node_modules/page/page.mjs";

const createTemplate = html`<section id="create">
  <div class="form">
    <h2>Add item</h2>
    <form class="create-form" @submit=${onSubmit}>
      <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
      <input type="text" name="model" id="shoe-model" placeholder="Model" />
      <input
        type="text"
        name="imageUrl"
        id="shoe-img"
        placeholder="Image url"
      />
      <input
        type="text"
        name="release"
        id="shoe-release"
        placeholder="Release date"
      />
      <input
        type="text"
        name="designer"
        id="shoe-designer"
        placeholder="Designer"
      />
      <input type="text" name="value" id="shoe-value" placeholder="Value" />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export function showCreate() {
  render(createTemplate, document.querySelector("main"));
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
    await createShoes({ brand, model, imageUrl, release, designer, value });
    page.show("/dashboard");
  } else {
    return;
  }
}
