const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const error = document.getElementById("error");
const message = document.getElementById("emailErrorMessage");

submitBtn.addEventListener('click', () => {

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(emailInput.value.trim())) {
    error.style.display = "inline-block";
    emailInput.classList.add("err");
    message.style.display = "block";
  }
  else{
    error.style.display = "none";
    emailInput.classList.remove("err");
  }
})
