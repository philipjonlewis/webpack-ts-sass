import "./sass/style.scss";

import "./js/about";
import "./js/contact";

console.log("hello");

const btn = document.querySelector(".sample");

btn?.addEventListener("click", () => {
  console.log("sample");
});
