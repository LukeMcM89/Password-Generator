// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// While I added uppercase, lowercase numbers, special symnbols and fullfilled the requirements, I also experimented further with adding emojis just for the fun of it. 

var generateBtn = document.querySelector("#generate");
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~", "|", ".", "_", "/", "`", "🌹", "💿", "🍕", "🚦", "🚀", "🍩", "🐸", "🦖", "🦕"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialCharacter;
var NumericCharacter;

function generatePassword () {
  var confirmLength = (prompt("How many characters would you like your password to be?"));


  while(confirmLength <=7 || confirmLength >= 128) {
    alert("Your password length must be between 8 - 128 characters! Please try again.");
    var confirmLength = (prompt ("How many characters would you like your password to have?"));
  }

  alert ("Your password will have {confirmLength} characters");

var confirmLowerCase = confirm("Click OK if you want to use lowercase letters.");
var confirmUpperCase = confirm("Click OK if you want to use uppercase letters.");
var confirmSpecialCharacter = confirm("Click OK if you want to use special characters.");
var confirmNumericCharacter = confirm("Click OK if you want to use numbers.");

while(confirmLowerCase === false && confirmUpperCase === false && confirmNumericCharacter === false && confirmSPEcialCharacter) {
  
  alert("You have to choose one parameter!");
  var confirmLowerCase = confirm("Click OK if you want to use lowercase letters.");
  var confirmUpperCAse = confirm("Click OK if you want to use uppercase letters.");
  var confirmSpecialCharacter = confirm("Click OK if you want to use special character symbols.");
  var confirmNumericCharacter = confirm("Click OK if you want to use numbers.");
} 

var passwordCharacters = []

if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(alphabetLower)
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(alphannbetUpper)
}

if (confirmSpecialCharacterss) {
  passwordCharacters = passwordCharacters.concat(SpecialChar)
}

if (confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(number)
}