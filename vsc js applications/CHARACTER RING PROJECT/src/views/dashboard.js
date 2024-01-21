import { render, html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getAllHeroes } from "../api/data.js";

const dashboardTemplate = (hero) => html`<h2>Characters</h2>
  <section id="characters">
    ${hero.map(
      (h) => html` <div class="character">
        <img src="${h.imageUrl}" alt="example1" />
        <div class="hero-info">
          <h3 class="category">${h.category}</h3>
          <p class="description">${h.description}</p>
          <a class="details-btn" href="/details/${h._id}">More Info</a>
        </div>
      </div>`
    )}
    </section>
    ${hero.length == 0 ? html`<h2>No added Heroes yet.</h2>` : nothing}
  </section> `;

export async function showDashboard() {
  const hero = await getAllHeroes();
  render(dashboardTemplate(hero), document.querySelector("main"));
}
