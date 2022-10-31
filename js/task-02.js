const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listUl = document.querySelector("#ingredients");
console.log(listUl);
const arr = ingredients.map((ingredient) => {
  const ingredientsLi = document.createElement("li");
  ingredientsLi.textContent = ingredient;
  ingredientsLi.classList.add("item");
  return ingredientsLi;
});
listUl.append(...arr);
