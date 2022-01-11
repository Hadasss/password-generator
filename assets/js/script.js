// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength = function () {
  var passLength = prompt(
    "How long would you like your password to be?\nChoose between 8-128 characters."
  );

  if (passLength >= 8 && passLength <= 128) {
    return passLength;
  } else {
    alert("Choose a number between 8-128!");
    passwordLength();
  }
};

var charType = function () {
  var userInput = prompt(
    "Chose type of charecters you want in your password:\n1 for uppercase\n2 for lowercase\n3 for numeric\n4 for special charecters\n5 for ALL"
  );

  if (userInput == 1) {
    console.log("user picked 1");
  } else if (userInput == 2) {
    console.log("user picked 2");
  } else if (userInput == 3) {
    console.log("user picked 3");
  } else if (userInput == 4) {
    console.log("user picked 4");
  } else if (userInput == 5) {
    console.log("user picked 5");
  } else {
    alert("Please choose a valid option");
  }
};

var randomChar = function () {
  // grab passLength
  // grab types of characters from
};

function writePassword() {
  passwordLength();

  charType();

  // Write password to the #password input

  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // textarea text value

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
