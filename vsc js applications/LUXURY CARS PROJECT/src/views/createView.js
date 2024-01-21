import page from "../../node_modules/page/page.mjs";
import { render, html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { createCars } from "../api/data.js";

const createTemplate = (onSubmit) => html`<section id="create">
  <div class="form form-auto">
    <h2>Share Your Car</h2>
    <form class="create-form" @submit=${onSubmit}>
      <input type="text" name="model" id="model" placeholder="Model" />
      <input
        type="text"
        name="imageUrl"
        id="car-image"
        placeholder="Your Car Image URL"
      />
      <input type="text" name="price" id="price" placeholder="Price in Euro" />
      <input
        type="number"
        name="weight"
        id="weight"
        placeholder="Weight in Kg"
      />
      <input
        type="text"
        name="speed"
        id="speed"
        placeholder="Top Speed in Kmh"
      />
      <textarea
        id="about"
        name="about"
        placeholder="More About The Car"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add</button>
    </form>
  </div>
</section>`;

export function showCreate() {
  render(createTemplate(onSubmit), document.querySelector("main"));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const model = formData.get("model");
  const imageUrl = formData.get("imageUrl");
  const price = formData.get("price");
  const weight = formData.get("weight");
  const speed = formData.get("speed");
  const about = formData.get("about");

  if (
    model != "" &&
    imageUrl != "" &&
    price != "" &&
    weight != "" &&
    speed != "" &&
    about != ""
  ) {
    try {
      await createCars({ model, imageUrl, price, weight, speed, about });
      page.show("/dashboard");
    } catch (e) {
      throw new Error(e.message);
    }
  } else {
    alert("Error");
    return;
  }
}
