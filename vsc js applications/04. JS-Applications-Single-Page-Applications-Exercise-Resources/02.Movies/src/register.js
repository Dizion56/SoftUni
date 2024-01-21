import { home } from "./home.js";
import { showView, updateNavBar } from "./utils.js";

const section = document.getElementById("form-sign-up");
const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

export function register() {
  showView(section);
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email").trim();
  const password = formData.get("password").trim();
  const repeatPassword = formData.get("repeatPassword").trim();
  if (email !== "" && password.length >= 6 && password === repeatPassword) {
    await registerRequest(email, password);
  } else {
    if (email === "") {
      alert("Email must not be empty!");
      return;
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    } else if (password !== repeatPassword) {
      alert("Passwords must match!");
      return;
    }
  }
}

async function registerRequest(email, password) {
  try {
    const res = await fetch("http://localhost:3030/users/register", {
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
    form.reset();
    home();
    updateNavBar();
  } catch (err) {
    alert(err.message);
  }
}
