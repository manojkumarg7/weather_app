const search_btn = document.querySelector(".search-icon");
const search_input = document.querySelector(".search-input");
console.log(search_btn);
search_btn.addEventListener("click", () => {
  search_input.focus();
  console.log("focusing");
});
