// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var length = getLengthInput();
    var isLowercase = getLowercaseInput();
    var isUppercase = getUppercaseInput();
    var isNumeric = getNumericInput();
    var isSpecial = getSpecialInput();
    return;
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

// Password generated


// Password displayed in HTML
