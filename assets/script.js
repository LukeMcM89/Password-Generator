
var passwordText = document.querySelector("#password");

// For the copy-to-clip-board button. 

var copyBtn = document.getElementById("copy");

document.querySelector("#generate").addEventListener("click", writePassword);

// While I added uppercase, lowercase numbers, special symnbols and fullfilled the requirements, I also experimented further with adding emojis just for the fun of it. 

//Constant Arrays.

var generateBtn = document.querySelector("#generate");
const alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~", "|", ".", "_", "/", "`", "🌹", "💿", "🍕", "🚦", "🚀", "🍩", "🐸", "🦖", "🦕"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialCharacter;
var NumericCharacter;

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to be?"));

  while (confirmLength <= 7 || confirmLength >= 128) {
    alert("Your password length must be between 8 - 128 characters! Please try again.");
    var confirmLength = (prompt("How many characters would you like your password to have?"));
  }

  alert("Understood! Click OK to continue customizing your password.");

  //Lines 32-35 determine the restrictions of the password being created.

  var confirmLowerCase = confirm("Click OK if you want to use lowercase letters.");
  var confirmUpperCase = confirm("Click OK if you want to use uppercase letters.");
  var confirmSpecialCharacter = confirm("Click OK if you want to use special characters.");
  var confirmNumericCharacter = confirm("Click OK if you want to use numbers.");

  //Then will loop if the requirements are not fullfille by user

  while (confirmLowerCase === false && confirmUpperCase === false && confirmNumericCharacter === false && confirmSpecialCharacter === false) {

    alert("You have to choose at least one!");

    var confirmLowerCase = confirm("Click OK if you want to use lowercase letters.");
    var confirmUpperCase = confirm("Click OK if you want to use uppercase letters.");
    var confirmSpecialCharacter = confirm("Click OK if you want to use special character symbols.");
    var confirmNumericCharacter = confirm("Click OK if you want to use numbers.");
  }

  var passwordCharacters = []

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphabetLower)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphabetUpper)
  }

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialCharacter)
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(numbers)
  }

  console.log(passwordCharacters)

//This is filled (emtpy string) from the 'for' loop that is pulling random character from the constant arrays on lines 8-11.

  var randomizedPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomizedPassword = randomizedPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];

    console.log(randomizedPassword)
  }
  return randomizedPassword;
}

//Pushes the password and writes.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Added a copy-to-clipboard.

function copyPassword() {
  let copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy");
  alert("Saved to Clipboard");
}

copyBtn.addEventListener("click", copyPassword);