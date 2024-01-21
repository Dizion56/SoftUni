import { render, html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { login } from "../api/auth.js";

const loginTemplate = (onSubmit) => html`<section id="login">
  <div class="form">
    <img class="border" src="./images/border.png" alt="" />
    <h2>Login</h2>
    <form class="login-form" @submit=${onSubmit}>
      <input type="text" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button type="submit">login</button>
      <p class="message">
        Not registered? <a href="/register">Create an account</a>
      </p>
    </form>
    <img class="border" src="./images/border.png" alt="" />
  </div>
</section>`;

export function showLogin() {
  render(loginTemplate(onSubmit), document.querySelector("main"));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");
  if (email != "" && password != "") {
    await login(email, password);
    page.show("/");
  } else {
    return;
  }
}
