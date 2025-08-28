const toggle = document.getElementById("darkToggle");
const logo = document.getElementById("header-logo");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  if (logo) logo.src = "/assets/images/header-dark.png";
} else {
  if (logo) logo.src = "/assets/images/header-light.png";
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");

    if (logo) {
      logo.src = isDark
        ? "/assets/images/header-dark.png"
        : "/assets/images/header-light.png";
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
