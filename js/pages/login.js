const users = [
  {
    login: "victor",
    email: "victorNinjaTurtle@hola.com",
    password: "turtle1980",
  },
  {
    login: "torus",
    email: "torusTheNecromancer@hola.com",
    password: "monksFaliant"
  }
];



function UserLogin() {
  // inputs values validate
  let loginEmailInputValue = document.getElementById("pass-login-email").value;
  let userLogin = users.find(user => user.login === loginEmailInputValue);

  let loginPasswordInputValue = document.getElementById("pass-login-password").value;
  let userPassword = users.find(user => user.login === loginEmailInputValue).password;

  let loginErrorPlace = document.getElementById("pass-login-error")

  if (userLogin != undefined && userPassword === loginPasswordInputValue || loginEmailInputValue === undefined) {
    console.log("ture")
    loginErrorPlace.classList.add("disabled")
  } else {
    loginErrorPlace.classList.remove("disabled")
  }
}


function UserResetPassword() {
  let resetEmailInput = document.getElementById("pass-reset-email");
  let userEmail = users.find(user => user.email === resetEmailInput.value);

  let userEmailError = document.getElementById("pass-reset-error")
  let userEmailErrorLink = document.getElementById("pass-reset-error-link")


  if (userEmail != undefined) {
    console.log(userEmail)
    userEmailError.classList.add("disabled")
    userEmailErrorLink.classList.add("disabled")
  } else {
    userEmailError.classList.remove("disabled")
    userEmailErrorLink.classList.remove("disabled")
  }
}

function UserRegister() {
  let registerErrorPlace = document.getElementById("pass-register-error");
  let registerPassword = document.getElementById("pass-register-password")
  console.log("first")

  // Проверить длину
  if (registerPassword.value.length >= 8) {
    registerErrorPlace.classList.remove("disabled");
  } else {
    registerErrorPlace.classList.add("disabled");
  }

  // Проверка строчных букв
  var lowerCaseLetters = /[a-z]/g;
  if (registerPassword.value.match(lowerCaseLetters)) {
    registerErrorPlace.classList.remove("disabled");
    console.log("1-t")
  } else {
    registerErrorPlace.classList.add("disabled");
    console.log("1-f")
  }

  // Проверка заглавных букв
  var upperCaseLetters = /[A-Z]/g;
  if (registerPassword.value.match(upperCaseLetters)) {
    registerErrorPlace.classList.remove("disabled");
    console.log("2-t")
  } else {
    registerErrorPlace.classList.add("disabled");
    console.log("2-f")
  }

  // Проверка чисел
  var numbers = /[0-9]/g;
  if (registerPassword.value.match(numbers)) {
    registerErrorPlace.classList.remove("disabled");
    console.log("3-t")
  } else {
    registerErrorPlace.classList.add("disabled");
    console.log("3-f")
  }
  
}

// let CurrUser = UserLogin('victor')

const passLogin = document.querySelector(".pass__login");
const passRegister = document.querySelector(".pass__register");
const passReset = document.querySelector(".pass__reset");

function changeActive(BlockToActive) {
  const passBlocks = document.querySelectorAll(".pass__block");
  for (let index = 0; index < passBlocks.length; index++) {
    passBlocks[index].classList.remove("active")
  }
  BlockToActive.classList.add("active")
}


// login btns
const loginBtn = document.getElementById("pass-login-enter-btn")
loginBtn.onclick = function () {
  UserLogin()
}

const loginToRegisterBtn = document.getElementById("pass-login-to-register-btn");
loginToRegisterBtn.onclick = function () {
  changeActive(passRegister)
}
const loginForgetPassword = document.getElementById("pass-login-forget-password");
loginForgetPassword.onclick = function () {
  changeActive(passReset)
}



// reset btns
const resetPasswordBtn = document.getElementById("pass-reset-btn");
resetPasswordBtn.onclick = function () {
  UserResetPassword();
}

const resetBackBtn = document.getElementById("pass-reset-back-btn");
resetBackBtn.onclick = function () {
  changeActive(passLogin);
}




// register btns
const registerBtn = document.getElementById("pass-register-btn");
registerBtn.onclick = function () {
  UserRegister()
}
const registerBackBtn = document.getElementById("pass-register-to-login");
registerBackBtn.onclick = function () {
  changeActive(passLogin)
}





