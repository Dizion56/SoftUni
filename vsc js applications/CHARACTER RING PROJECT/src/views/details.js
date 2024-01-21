import { render, html, nothing } from "../../node_modules/lit-html/lit-html.js";
import {
  deleteHeroes,
  getAllLikes,
  getHeroesByID,
  isLiked,
  likeChar,
} from "../api/data.js";
import page from "../../node_modules/page/page.mjs";

const detailsTemplate = (hero, onDelete, likes, onLike, liked) => {
  const isLoggedUser =
    JSON.parse(sessionStorage.getItem("user")) !== null ? true : false;
  console.log(isLoggedUser);
  console.log(JSON.parse(sessionStorage.getItem("user")));
  const isOwner =
    hero._ownerId === JSON.parse(sessionStorage.getItem("user"))?._id;
  return html`<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${hero.imageUrl}" alt="example1" />
      <div>
        <p id="details-category">${hero.category}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p id="description">${hero.description}</p>
            <p id="more-info">${hero.moreInfo}</p>
          </div>
        </div>
        <h3>Is This Useful:<span id="likes">${likes}</span></h3>
        ${
          isLoggedUser
            ? html`<div id="action-buttons">
                ${isOwner
                  ? html`
                      <a href="/edit/${hero._id}" id="edit-btn">Edit</a>
                      <a
                        href="javascript:void(0)"
                        id=${hero._id}
                        @click=${onDelete}
                        >Delete</a
                      >
                    `
                  : nothing}
                ${isOwner || liked
                  ? nothing
                  : html`<a href="" id=${hero._id} @click=${onLike}>Like</a>`}
              </div>`
            : nothing
        }
        
        </div>
      </div>
    </div>
  </section>`;
};

export async function showDetails(context) {
  const hero = await getHeroesByID(context.params.id);
  const likes = await getAllLikes(context.params.id);
  const result = await isLiked(
    JSON.parse(sessionStorage.getItem("user"))?._id,
    context.params.id
  );
  const liked = result === 1 ? true : false;
  render(
    detailsTemplate(hero, onDelete, likes, onLike, liked),
    document.querySelector("main")
  );
}

async function onDelete(e) {
  const conf = confirm("Are you sure?");
  if (conf) {
    await deleteHeroes(e.target.id);
    page.show("/dashboard");
  }
}

async function onLike(e) {
  const characterId = e.target.id;
  await likeChar({ characterId });
  page.show(`/details/${e.target.id}`);
}
