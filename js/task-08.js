const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;
  const answer = {};
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
    evt.currentTarget.reset();
    return;
  }
  answer.email = email.value;
  answer.password = password.value;
  console.log(answer);
});
