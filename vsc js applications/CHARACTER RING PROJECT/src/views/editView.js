import { render, html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getHeroesByID, updateHeroes } from "../api/data.js";

const editTemplate = (hero, onSubmit) => html`<section id="edit">
  <div class="form">
    <img class="border" src="./images/border.png" alt="" />
    <h2>Edit Character</h2>
    <form class="edit-form" @submit=${onSubmit} id=${hero._id}>
      <input
        type="text"
        name="category"
        id="category"
        placeholder="Character Type"
        value=${hero.category}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        value=${hero.imageUrl}
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        value=${hero.description}
        rows="2"
        cols="10"
      >
${hero.description}</textarea
      >
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        value=${hero.moreInfo}
        rows="2"
        cols="10"
      >
${hero.moreInfo}</textarea
      >
      <button type="submit">Edit</button>
    </form>
    <img class="border" src="./images/border.png" alt="" />
  </div>
</section>`;

export async function showEdit(context) {
  const hero = await getHeroesByID(context.params.id);
  render(editTemplate(hero, onSubmit), document.querySelector("main"));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const category = formData.get("category");
  const imageUrl = formData.get("image-url");
  const description = formData.get("description");
  const moreInfo = formData.get("additional-info");
  if (category != "" && imageUrl != "" && description != "" && moreInfo != "") {
    await updateHeroes(e.target.id, {
      category,
      imageUrl,
      description,
      moreInfo,
    });
    page.show(`/details/${e.target.id}`);
  } else {
    return;
  }
}
