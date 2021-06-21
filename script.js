// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  if (password !== undefined) {
    passwordText.value = password;
  }
}

function generatePassword() {
  passwordText.value = "";

  // Ask user for their desired password length
  var length = window.prompt("Choose a password length from 8 to 128 characters long:");

  // If user cancels, inputs a number too high/low, or inputs a non-number when asked for length, function cancels
  if (
    (!length) ||
    (length < 8) ||
    (length > 128) ||
    (isNaN(length))
  ) {
    return;
  }

  // Ask user what type of characters they want
  var isLowercase = window.confirm("Do you want lowercase letters?");
  var isUppercase = window.confirm("Do you want uppercase letters?");
  var isNumeric = window.confirm("Do you want numeric characters?");
  var isSpecial = window.confirm("Do you want special characters?");

  var booleanArray = [isLowercase, isUppercase, isNumeric, isSpecial];

  // Number of true user inputs
  var numberTrue = getTrues(booleanArray);

  // Array of possible characters
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArray = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\", "\"", "\'"];

  var passwordTemplate = addRandomChars();

  // If user chooses lowercase, add random lowercase letters to passwordTemplate
  passwordTemplate += addRandomChars(isLowercase, length, numberTrue, lowercaseArray);

  // If user chooses uppercase, add random uppercase letters to passwordTemplate
  passwordTemplate += addRandomChars(isUppercase, length, numberTrue, uppercaseArray);

  // If user chooses numeric, add random numeric characters to passwordTemplate
  passwordTemplate += addRandomChars(isNumeric, length, numberTrue, numericArray);

  // If user chooses special, add random special characters to passwordTemplate
  passwordTemplate += addRandomChars(isSpecial, length, numberTrue, specialArray);

  // Generate array from passwordTemplate
  var passwordTemplateArray = passwordTemplate.split("");

  // Shuffle array into new random array
  var newArray = shuffleArray(passwordTemplateArray);

  // Return new random array as a string
  return newArray.join("");
}

// Get a random string from chosen array
function characterRandomizer(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Get number of user inputs that are true
function getTrues(booleanArray) {
  var trues = 0;
  for (var i = 0; i < booleanArray.length; i++) {
    if (booleanArray[i]) {
      trues += 1;
    }
  }
  return trues;
}

// Add random characters to passwordTemplate based on user input
function addRandomChars(userInput, length, numberTrue, array) {
  var passwordChunk = "";
    if (userInput) {
      for (var i = 0; i < length / numberTrue; i++) {
        passwordChunk += characterRandomizer(array);
      }
    }
  return passwordChunk;
}

// Shuffle order of characters within array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}