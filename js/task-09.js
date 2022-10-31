function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const clickChangeCl = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

clickChangeCl.addEventListener("click", () => {
  const colorRef = getRandomHexColor();
  document.body.setAttribute("style", `background-color: ${colorRef}`);
  spanRef.textContent = colorRef;
  console.log(colorRef);
});
