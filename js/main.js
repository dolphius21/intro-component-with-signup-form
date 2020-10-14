const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('.form');
const regex = {
  password: /^[\w@-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

function validate(e) {
  if (firstName.value === "") {
    addStyle(firstName);
  }
  if (lastName.value === "") {
    addStyle(lastName);
  }
  if (!regex.email.test(email.value)) {
    addStyle(email);
  }
  if (!regex.password.test(password.value)) {
    addStyle(password);
  }
  
  e.preventDefault();
}

function addStyle (element) {
  element.style.border = "2px solid hsl(0, 100%, 74%)";
  element.nextElementSibling.style.display = "block";
  element.nextElementSibling.nextElementSibling.style.display = "block";
}

form.addEventListener('submit', validate);