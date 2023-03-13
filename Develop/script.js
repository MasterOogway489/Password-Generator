// Assignment Code
const generateBtn = document.querySelector("#generate");

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialChar = ["!", "@", "#", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "?", ">", "<", "]", "[", "}", "{"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function getNumberOfChars(){
  let numberOfCharacters = Number(prompt("What is the desired number of characters for your password (8-128)?"));

  if (numberOfCharacters < 8 || numberOfCharacters > 128){
    numberOfCharacters = getNumberOfChars()
  } 

  return numberOfCharacters
}


function getTrueOrFalse(promptMessage){
  let promptResult = prompt(promptMessage).toLowerCase();
  
  // By default returns false if yes, y or true is not inputted
  if(promptResult === "yes" || promptResult === "y" || promptResult === "true"){
    return true
  } else {
    return false
  }

}

function pickRandomArrayItem(arrayInput){
  let char = (Math.floor(Math.random() * arrayInput.length));
  let charToAdd = arrayInput[char];

  return charToAdd
}

// Write password to the #password input
function generatePassword() {
  const numberOfChars = getNumberOfChars();

  const usesNumbers = getTrueOrFalse("Do you want your password to include numbers?");
  const usesLowerCase = getTrueOrFalse("Do you want your password to include lower case letters?");
  const usesUpperCase = getTrueOrFalse("Do you want your password to include upper case letters?");
  const usesSpecialCharacters = getTrueOrFalse("Do you want your password to include special characters?");

  let userPassword = '';
  let combinedArray = []

  if (usesNumbers === true) {
    combinedArray = combinedArray.concat(numbers);
  }

  if (usesLowerCase === true) {
    combinedArray = combinedArray.concat(lowerCase);
  }

  if (usesUpperCase === true) {
    combinedArray = combinedArray.concat(upperCase);
  }

  if (usesSpecialCharacters === true) {
    combinedArray = combinedArray.concat(specialChar);
  }

  let hasNumber = false;
  let hasSpecialCharacter = false;
  let hasLowercase = false;
  let hasUppercase = false;

  for (var i = 0; i < numberOfChars; i++) {
    let randomCharacter = pickRandomArrayItem(combinedArray);

    // Handles edge case if a character needed hasn't been selected yet
    if(numberOfChars - 4 <= i){
      if(!hasLowercase && usesLowerCase){
        randomCharacter = pickRandomArrayItem(lowerCase)
        hasLowercase = true;
      }else if(!hasUppercase && usesUpperCase){
        randomCharacter = pickRandomArrayItem(upperCase)
        hasUppercase = true;
      }
      else if(!hasSpecialCharacter && usesSpecialCharacters){
        randomCharacter = pickRandomArrayItem(specialChar)
        hasSpecialCharacter = true;
      }
      else if(!hasNumber && usesNumbers){
        randomCharacter = pickRandomArrayItem(numbers)
        hasNumber = true;
      }
    }
  
    if(lowerCase.includes(randomCharacter)){
      hasLowerCase = true;
    }else if (upperCase.includes(randomCharacter)){
      hasUppercase = true;
    }else if (specialChar.includes(randomCharacter)){
      hasSpecialCharacter = true;
    }else if (numbers.includes(randomCharacter)){
      hasNumber = true;
    }

    userPassword += randomCharacter;
  }

  return userPassword
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
