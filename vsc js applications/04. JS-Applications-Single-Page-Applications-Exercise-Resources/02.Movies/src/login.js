import { home } from "./home.js";
import { showView, updateNavBar } from "./utils.js";
const section = document.getElementById("form-login");
const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

export function login() {
  showView(section);
}

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");

  await loginRequest(email, password);
  form.reset();
  updateNavBar();
  home();
}

async function loginRequest(email, password) {
  try {
    const res = await fetch("http://localhost:3030/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const user = await res.json();
    sessionStorage.setItem("user", JSON.stringify(user));
  } catch (err) {
    alert(err.message);
  }
}
