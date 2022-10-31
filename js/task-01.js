const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);
allCategories.forEach((category) => {
  const categoriesArray = category.firstElementChild.textContent;
  const counts = category.querySelectorAll("li").length;
  console.log(categoriesArray);
});
