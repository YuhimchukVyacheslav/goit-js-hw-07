const textInputRef = document.querySelector("#name-input");
const textOutputRef = document.querySelector("#name-output");
const textBegin = textOutputRef.textContent;
textInputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    textOutputRef.textContent = event.currentTarget.value;
    return;
  }
  textOutputRef.textContent = textBegin;
});
