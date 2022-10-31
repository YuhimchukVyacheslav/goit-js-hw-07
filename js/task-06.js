const inputVal = document.querySelector("#validation-input");
inputVal.addEventListener("blur", onChangeFocus);
function onChangeFocus() {
  if (inputVal.value.length === Number(inputVal.dataset.length)) {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  } else {
    inputVal.classList.remove("valid");
    inputVal.classList.add("invalid");
  }
}
