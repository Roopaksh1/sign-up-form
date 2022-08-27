const bindEvents = () => {
  window.addEventListener("click", checkPassword);
}

window.addEventListener("load", bindEvents);

const checkPassword = () => {
  const password = document.querySelector("#pass");
  const confirmPass = document.querySelector("#confirm-pass");
  if (confirmPass.value === "") {
    return confirmPass.classList.remove("confirm-pass");
  }
  if (confirmPass.value === password.value) {
    confirmPass.classList.remove("confirm-pass");
  } else
    confirmPass.classList.add("confirm-pass");  
}
