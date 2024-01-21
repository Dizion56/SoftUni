import { home } from "./home.js";
import { login } from "./login.js";
import { logout } from "./logout.js";
import { register } from "./register.js";
import { updateNavBar } from "./utils.js";

const routes = {
  "/": home,
  "/login": login,
  "/logout": logout,
  "/register": register,
};

document.querySelector("nav").addEventListener("click", onNvaigate);

function onNvaigate(e) {
  if (e.target.tagName === "A" && e.target.href) {
    e.preventDefault();
    const url = new URL(e.target.href);
    const view = routes[url.pathname];

    view();
  }
}

home();
updateNavBar();
