import { variables } from "../helpers/variables";

export const theme = () => {
  const { themeToggle } = variables();

  let night = "dark";
  let day = "light";
  const html = document.documentElement;
  const getTheme = localStorage.getItem("theme");

  html.classList.add(day);

  if (getTheme === night) {
    html.classList.remove(day);
    html.classList.add(night);
    themeToggle.classList.add("activeTheme");
  }

  themeToggle.addEventListener("click", () => {
    themeToggle.classList.toggle("activeTheme");

    if (html.classList.contains(day)) {
      html.classList.remove(day);
      html.classList.add(night);
      localStorage.setItem("theme", night);
    } else if (html.classList.contains(night)) {
      html.classList.add(day);
      html.classList.remove(night);
      localStorage.setItem("theme", day);
    }
  });
};
