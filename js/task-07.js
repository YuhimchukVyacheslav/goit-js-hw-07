const inputRangeRef = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

inputRangeRef.oninput = () => {
  text.style.fontSize = inputRangeRef.value + "px";
};
