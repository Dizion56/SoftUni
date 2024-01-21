import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { logout } from "./api/auth.js";

const navTemplate = (user) => html`<div>
    <a href="/dashboard">Characters</a>
  </div>
  ${user
    ? html`<div class="user">
        <a href="/create">Add Character</a>
        <a href="javascript:void(0)" @click=${onLogout}>Logout</a>
      </div>`
    : html`<div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div> `} `;

export function updateNav(ctx, next) {
  render(navTemplate(ctx.user), document.querySelector("nav"));
  next();
}

export function session(ctx, next) {
  const user = sessionStorage.getItem("user");
  if (user) {
    ctx.user = user;
  }
  next();
}

async function onLogout(e) {
  e.preventDefault();
  await logout();
  page.show("/dashboard");
}
