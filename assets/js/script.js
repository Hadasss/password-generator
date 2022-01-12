var generateBtn = document.querySelector("#generate");
var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
var numStr = "1234567890";
var specialCaseStr = '!"#$%&()*+,-.;:<>=?@[]_^`{}~|';
var userChoice = [];

// prompt to get user input for password length
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

// prompt to get user input to select caharacter types + variable to hold the value for reuse.
var userInput = function () {
  var choicePrompt = prompt(
    "Choose type of charecters you want in your password:\n1 for uppercase\n2 for lowercase\n3 for numeric\n4 for special charecters\n5 for ALL"
  );
  userChoice = choicePrompt;
};

// function to get user input for selected character types from prompt
var charType = function () {
  userInput();

  // BUG - scope issue: userChoice out of scope!! //
  if (userChoice == 1) {
    console.log(userChoice);
    return (userChoice += userChoice);
  } else if (userChoice == 2) {
    console.log("user picked 2");
  } else if (userChoice == 3) {
    console.log("user picked 3");
  } else if (userChoice == 4) {
    console.log("user picked 4");
  } else if (userChoice == 5) {
    console.log("user picked 5");
  } else {
    alert("Please choose a valid option");
    userInput();
  }
};

// function to generate random characters from a each character type string. the function will receive parameters for number of characters and type of caracter
var generateRandomChar = function () {
  // generate random char from each type

  if (userChoice.includes(2)) {
    var resultLower =
      upperCaseStr[Math.floor(Math.random() * upperCaseStr.length)];
  }
};

// function to trigger all other functions and combine the generating of character types. this function will take arguments: password length and type of characters.
var generatePassword = function () {
  var password = "";

  passwordLength();

  charType();

  // generator code here

  // take password length, devide by number of types selected (result: var charPerTypeNum).
  // check if result includes() 1 2 3 4 or 5
  // generate random characters based on number of characters from each type (var charPerTypeNum)
  // if odd number - add 1 lowercase.

  return password;
};

function writePassword() {
  // Write password to the #password input
  // concatenate all generated characters to one string value
  // display in textarea
  var passwordText = document.querySelector("#password"); // textarea text value
  passwordText.value = generatePassword(); // to displays generated password in textarea
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
