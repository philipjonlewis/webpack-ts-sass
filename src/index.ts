import "./sass/style.scss";

console.log("hello");

type userSchema = {
  name: string;
  age: number;
};

const btn = document.querySelector(".sample");

btn?.addEventListener("click", () => {
  console.log("sample");
});
