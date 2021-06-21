// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    // User inputs
    var length = getLengthInput();
    var isLowercase = getLowercaseInput();
    var isUppercase = getUppercaseInput();
    var isNumeric = getNumericInput();
    var isSpecial = getSpecialInput();

    // Number of true user inputs
    var numberTrue = getTrue(isLowercase, isUppercase, isNumeric, isSpecial);

    // Array of possible characters
    var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialArray = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\", "\"", "\'"];

    var passwordTemplate = "";

    if (isLowercase) {
      for (var i = 0; i < length / numberTrue; i++) {
        passwordTemplate += characterRandomizer(lowercaseArray);
      }
    }

    if (isUppercase) {
      for (var i = 0; i < length / numberTrue; i++) {
        passwordTemplate += characterRandomizer(uppercaseArray);
      }
    }

    if (isNumeric) {
      for (var i = 0; i < length / numberTrue; i++) {
        passwordTemplate += characterRandomizer(numericArray);
      }
    }

    if (isSpecial) {
      for (var i = 0; i < length / numberTrue; i++) {
        passwordTemplate += characterRandomizer(specialArray);
      }
    }

    return passwordTemplate;
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt to input length of password
function getLengthInput() {
  // Ask user for their desired password length
  var lengthInput = window.prompt("Choose a password length from 8 to 128 characters long:");

  // If user cancels or inputs a number too high/low, function cancels
  if (
    (!lengthInput) ||
    (lengthInput < 8) ||
    (lengthInput > 128)
  ) {
    return;
  }
  return lengthInput;
}

// Prompt to input desired character types - lowercase
function getLowercaseInput() {
  //  Ask user if they want lowercase characters
  var lowercaseInput = window.confirm("Do you want lowercase letters?");

  // If user chooses no, function returns false
  if (!lowercaseInput) {
    return false;
  }
  return lowercaseInput;
}

// Prompt to input desired character types - uppercase
function getUppercaseInput() {
  //  Ask user if they want uppercase characters
  var uppercaseInput = window.confirm("Do you want uppercase letters?");

  // If user chooses no, function returns false
  if (!uppercaseInput) {
    return false;
  }
  return uppercaseInput;
}

// Prompt to input desired character types - numeric
function getNumericInput() {
  //  Ask user if they want numeric characters
  var numericInput = window.confirm("Do you want numeric characters?");

  // If user chooses no, function returns false
  if (!numericInput) {
    return false;
  }
  return numericInput;
}

// Prompt to input desired character types - special characters
function getSpecialInput() {
  //  Ask user if they want special characters
  var specialInput = window.confirm("Do you want special characters?");

  // If user chooses no, function returns false
  if (!specialInput) {
    return false;
  }
  return specialInput;
}

// Creates a random number
function characterRandomizer(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Gets number of user inputs that are true
function getTrue(lowercase, uppercase, numeric, special) {
  var trues = 0;
  if (lowercase) {
    trues += 1;
  }
  if (uppercase) {
    trues += 1;
  }
  if (numeric) {
    trues += 1;
  }
  if (special) {
    trues += 1;
  }
  return trues;
}