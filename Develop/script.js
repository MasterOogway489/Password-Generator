// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "%", "^", "&", "*","(", ")", "_", "+", "=", "-", "?", ">", "<", "]", "[", "}", "{"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var numberOfCharacters = prompt ("What is the desired number of characters for your password?");
var usesNumbers = prompt ("Do you want your password to include numbers?");
var usesLowerCase = prompt ("Do you want your password to include lower case letters?");
var usesUpperCase = prompt ("Do you want your password to include upper case letters?");
var usesSpecialCharacters = prompt ("Do you want your password to include special characters?");

var passwordLength = 10;

var combinedArray = []

if (usesNumbers = true) {
  combinedArray = combinedArray.concat(numbers);
}
if (usesLowerCase = true) {
  combinedArray = combinedArray.concat(lowerCase);
}
if (usesUpperCase = true) {
  combinedArray = combinedArray.concat(upperCase);
}
if (usesSpecialCharacters = true) {
  combinedArray = combinedArray.concat(specialChar);
}

if (passwordLength > 8 || passwordLength < 128) {

}
console.log(combinedArray.length);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
