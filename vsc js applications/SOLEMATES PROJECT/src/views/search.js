import { render, html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { searchShoe } from "../api/data.js";

const foundItemsTemplate = (results) => html`${results
  ? html`<ul class="card-wrapper">
      ${results.map(
        (r) => html`<li class="card">
          <img src="${r.imageUrl}" alt="travis" />
          <p><strong>Brand: </strong><span class="brand">${r.brand}</span></p>
          <p><strong>Model: </strong><span class="model">${r.model}</span></p>
          <p><strong>Value:</strong><span class="value">${r.value}</span>$</p>
          ${sessionStorage.getItem("user")
            ? html`<a class="details-btn" href="/details/${r._id}">Details</a>`
            : nothing}
        </li>`
      )}
    </ul>`
  : nothing}
${results && results.length == 0
  ? html`<h2>There are no results found.</h2>`
  : nothing}`;

const searchTemplate = html`<section id="search">
  <h2>Search by Brand</h2>
  <form class="search-wrapper cf" @submit=${onSubmit}>
    <input
      id="#search-input"
      type="text"
      name="search"
      placeholder="Search here..."
      required
    />
    <button type="submit">Search</button>
  </form>

  <h3>Results:</h3>

  <div id="search-container"></div>
</section>`;

export function showSearch() {
  render(searchTemplate, document.querySelector("main"));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const search = formData.get("search");
  if (search != "") {
    const result = await searchShoe(search);
    render(
      foundItemsTemplate(result),
      document.querySelector("#search-container")
    );
  } else {
    return;
  }
}
