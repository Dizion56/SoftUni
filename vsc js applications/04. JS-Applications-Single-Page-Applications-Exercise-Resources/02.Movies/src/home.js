import { showView } from "./utils.js";

const section = document.getElementById("home-page");
const catalog = section.querySelector("#movies-list");

export function home() {
  showView(section);
  displayMovies();
}

async function displayMovies() {
  const movies = await getMovies();
  await catalog.replaceChildren(...movies.map(createMoviePreview));
}

function createMoviePreview(movie) {
  const liElem = document.createElement("li");
  liElem.className = "card mb-4";
  liElem.innerHTML = `
  <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-tittle">${movie.title}</h4>
        <a href="/details/${movie._id}">
            <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>
    <div class="card-footer">
    </div>`;

  return liElem;
}

async function getMovies() {
  const res = await fetch("http://localhost:3030/data/movies");
  return await res.json();
}
