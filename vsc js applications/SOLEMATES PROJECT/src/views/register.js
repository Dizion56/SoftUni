import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/auth.js";
import page from "../../node_modules/page/page.mjs";

const registerTemplate = html`<section id="register">
  <div class="form">
    <h2>Register</h2>
    <form class="login-form" @submit=${onSubmit}>
      <input type="text" name="email" id="register-email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"
      />
      <input
        type="password"
        name="re-password"
        id="repeat-password"
        placeholder="repeat password"
      />
      <button type="submit">login</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>`;

export function showRegister() {
  render(registerTemplate, document.querySelector("main"));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");
  const rePass = formData.get("re-password");

  if (email != "" && password != "" && rePass != "") {
    await register(email, password);
    page.show("/dashboard");
  } else {
    return;
  }
}
