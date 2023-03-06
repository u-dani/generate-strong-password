//
// BOM DIA :DDDDDD
//

const passwordOptionsInputs = document.querySelectorAll(
  ".js-password-options-form input"
);

passwordOptionsInputs.forEach((input) => {
  input.addEventListener("input", updateAll);
});

const textCharactersNumber = document.querySelector(
  ".js-text-characters-number"
);

const charactersNumber = document.querySelector(".js-characters-number");

const uppercaseLetterCheckbox = document.querySelector(
  ".js-uppercase-letter-checkbox"
);

const lowercaseLetterCheckbox = document.querySelector(
  ".js-lowercase-letter-checkbox"
);

const numbersCheckbox = document.querySelector(".js-numbers-checkbox");
const symbolsCheckbox = document.querySelector(".js-symbols-checkbox");

const showPassword = document.querySelector(".js-show-password");
const btnNewPassword = document.querySelector(".js-btn-new-password");

btnNewPassword.addEventListener("click", updateAll);

//

function updateAll() {
  textCharactersNumber.textContent = charactersNumber.value;
  const password = generatePassword(+charactersNumber.value);
  showPassword.textContent = password;
}

function generatePassword(length) {
  const passwordList = [];
  const functionsList = [];

  if (uppercaseLetterCheckbox.checked) {
    functionsList.push(randomUppercaseLetter);
  }

  if (lowercaseLetterCheckbox.checked) {
    functionsList.push(randomLowercaseLetter);
  }

  if (numbersCheckbox.checked) {
    functionsList.push(randomNumber);
  }

  if (symbolsCheckbox.checked) {
    functionsList.push(randomSymbols);
  }

  if (functionsList.length === 0) {
    alert("selecione alguma opção :/");
    return;
  }

  let index = 0;

  for (let i = 0; i < length; i++) {
    const character = functionsList[index]();
    passwordList.push(character);

    index === functionsList.length - 1 ? (index = 0) : index++;
  }

  return passwordList.join("");
}

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

function randomLowercaseLetter() {
  // 97 a 122
  const randomNumber = Math.floor(Math.random() * 26) + 97;
  return String.fromCharCode(randomNumber);
}

function randomUppercaseLetter() {
  // 65 a 90
  const randomNumber = Math.floor(Math.random() * 26) + 65;
  return String.fromCharCode(randomNumber);
}

function randomSymbols() {
  // 0 - symbolList.lenght
  const symbolList = ["*", "$", "!", "@", "#", "^", "%"];
  const randomNumber = Math.floor(Math.random() * symbolList.length);
  return symbolList[randomNumber];
}

window.onload = () => {
  charactersNumber.value = 8;
  updateAll();
};
