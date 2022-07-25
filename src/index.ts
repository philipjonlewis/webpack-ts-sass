import "./sass/style.scss";

import trialFunction from "./ts/about";

const btn = document.querySelector(".sample")!;

btn.addEventListener("click", () => {
  trialFunction();
  console.log("sample");
});

console.log("sourcemaps working");
