// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphaLower = ["abcdefghijklmnopqrstuvwxyz"]
var alphaUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var symbols = ["!@#$%^&*?~|"]
var numbers = [0123456789]
function generatePassword () {

}



// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);