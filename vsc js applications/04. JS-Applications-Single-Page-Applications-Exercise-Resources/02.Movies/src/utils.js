export function showView(section) {
  document.querySelectorAll(".view-section").forEach((e) => {
    e.style.display = "none";
  });
  section.style.display = "block";
}

export function updateNavBar() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const welcomeMsg = document.getElementById("welcome-msg");
  if (user) {
    welcomeMsg.textContent = `Welcome, ${user.email}`;

    document
      .querySelectorAll(".user")
      .forEach((e) => (e.style.display = "inline-block"));

    document
      .querySelectorAll(".guest")
      .forEach((e) => (e.style.display = "none"));
  } else {
    document
      .querySelectorAll(".user")
      .forEach((e) => (e.style.display = "none"));

    document
      .querySelectorAll(".guest")
      .forEach((e) => (e.style.display = "inline-block"));
  }
}
