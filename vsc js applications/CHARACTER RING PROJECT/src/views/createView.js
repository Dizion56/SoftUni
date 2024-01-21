import { render, html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { createHeroes } from "../api/data.js";

const createTemplate = (onSubmit) => html`<section id="create">
  <div class="form">
    <img class="border" src="./images/border.png" alt="" />
    <h2>Add Character</h2>
    <form class="create-form" @submit=${onSubmit}>
      <input
        type="text"
        name="category"
        id="category"
        placeholder="Character Type"
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="2"
        cols="10"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="2"
        cols="10"
      ></textarea>
      <button type="submit">Add Character</button>
    </form>
    <img class="border" src="./images/border.png" alt="" />
  </div>
</section>`;

export function showCreate() {
  render(createTemplate(onSubmit), document.querySelector("main"));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const category = formData.get("category");
  const imageUrl = formData.get("image-url");
  const description = formData.get("description");
  const moreInfo = formData.get("additional-info");
  if (category != "" && imageUrl != "" && description != "" && moreInfo != "") {
    await createHeroes({ category, imageUrl, description, moreInfo });
    page.show("/dashboard");
  } else {
    return;
  }
}
