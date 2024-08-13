const form = document.getElementById("form");

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const age = document.getElementById("age");
const number = document.getElementById("number");
const passInput = document.getElementById("password");

const eye = document.querySelector(".ph");

eye.addEventListener("click", function () {
  if (passInput.type == "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkInputs();
});

number.onkeypress = function (event) {
  if (isNaN(event.key) && event.key !== "Backspace") {
    event.preventDefault();
  }

  if (number.value.length >= 10) {
    event.preventDefault();
  }
};
age.addEventListener("keypress", function (e) {
  if (isNaN(e.key) && e.key != "Backspace") {
    e.preventDefault();
  }
  if (age.value.length >= 3) {
    e.preventDefault();
  }
});

const setErrorFor = (input, message) => {
  const errorControl = input.parentElement;
  const errorDisplay = errorControl.querySelector(".error");

  errorDisplay.innerText = message;
  errorControl.classList.add("error");
  errorControl.classList.remove("success");
};

const setSuccess = (input) => {
  const errorControl = input.parentElement;
  const errorDisplay = errorControl.querySelector(".error");

  errorDisplay.innerText = "";
  errorControl.classList.add("success");
  errorControl.classList.remove("error");
  console.log("form submitted");
};

function checkInputs() {
  const fnamevalue = fname.value.trim();
  const lnamevalue = lname.value.trim();
  const agevalue = age.value.trim();
  const numbervalue = number.value.trim();
  const passvalue = passInput.value.trim();

  if (fnamevalue === "") {
    setErrorFor(fname, "First name cannot be blank");
  } else {
    setSuccess(fname);
  }
  if (lnamevalue === "") {
    setErrorFor(lname, "Last name cannot be blank");
  } else {
    setSuccess(lname);
  }
  if (agevalue === "") {
    setErrorFor(age, "Age cannot be blank");
  } else {
    setSuccess(age);
  }
  if (numbervalue === "") {
    setErrorFor(number, "Number cannot be blank");
  } else {
    setSuccess(number);
  }
  if (passvalue === "") {
    setErrorFor(passInput, "Password cannot be blank");
  } else {
    setSuccess(passInput);
  }
}
