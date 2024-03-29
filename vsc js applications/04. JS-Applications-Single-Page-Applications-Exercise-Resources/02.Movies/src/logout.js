import { updateNavBar } from "./utils.js";

export async function logout() {
  const user = JSON.parse(sessionStorage.user);

  await fetch("http://localhost:3030/users/logout", {
    method: "get",
    headers: {
      "X-Authorization": user.accessToken,
    },
  });

  sessionStorage.removeItem("user");
  updateNavBar();
}
