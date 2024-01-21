import page from "../../node_modules/page/page.mjs";
import { render, html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { createCars, getCarsByID, updateCars } from "../api/data.js";

const editTemplate = (car, onSubmit) => html`<section id="edit">
  <div class="form form-auto">
    <h2>Edit Your Car</h2>
    <form class="edit-form" @submit=${onSubmit} id=${car._id}>
      <input
        type="text"
        name="model"
        id="model"
        placeholder="Model"
        value=${car.model}
      />
      <input
        type="text"
        name="imageUrl"
        id="car-image"
        placeholder="Your Car Image URL"
        value=${car.imageUrl}
      />
      <input
        type="text"
        name="price"
        id="price"
        placeholder="Price in Euro"
        value=${car.price}
      />
      <input
        type="number"
        name="weight"
        id="weight"
        placeholder="Weight in Kg"
        value=${car.weight}
      />
      <input
        type="text"
        name="speed"
        id="speed"
        placeholder="Top Speed in Kmh"
        value=${car.speed}
      />
      <textarea
        id="about"
        name="about"
        placeholder="More About The Car"
        rows="10"
        cols="50"
        value=${car.about}
      >
${car.about}</textarea
      >
      <button type="submit">Edit</button>
    </form>
  </div>
</section>`;

export async function showEdit(context) {
  const car = await getCarsByID(context.params.id);
  render(editTemplate(car, onSubmit), document.querySelector("main"));
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
    await updateCars(e.target.id, {
      model,
      imageUrl,
      price,
      weight,
      speed,
      about,
    });
    page.show("/dashboard");
  } else {
    alert("Error");
    return;
  }
}
