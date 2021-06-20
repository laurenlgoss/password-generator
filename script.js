// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    return getLengthInput();
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


// Prompt to input desired character types - uppercase


// Prompt to input desired character types - numeric


// Prompt to input desired character types - special characters


// Password generated


// Password displayed in HTML
