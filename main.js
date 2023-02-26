let theme = localStorage.getItem("theme"),
  checkbox = document.querySelector(".checkbox"),
  reload = document.querySelector(".reload");

if (theme == "dark") {
  document.body.classList.add("dark");
}

reload.addEventListener("click", () => {
  location.reload();
});

checkbox.addEventListener("change", (e) => {
  localStorage.getItem("theme") == "dark"
    ? localStorage.setItem("theme", "light")
    : localStorage.setItem("theme", "dark");
  document.body.classList.toggle("dark");
});
