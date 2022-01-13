var generateBtn = document.querySelector("#generate"); // button
var passwordText = document.querySelector("#password"); // textarea text value
var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
var numStr = "1234567890";
var specialCaseStr = '!"#$%&()*+,-.;:<>=?@[]_^`{}~|';
var userChoice = "";
var passLength = "";
var passLengthNum = "";
var passwordArr = [];

// prompt to get user input for password length
var passwordLength = function () {
  passLength = prompt(
    "How long would you like your password to be?\nChoose between 8-128 characters."
  );

  if (passLength >= 8 && passLength <= 128) {
    passLengthNum = parseInt(passLength);
  } else {
    alert("Choose a number between 8-128!");
    passwordLength();
  }
};

// prompt to get user input to select caharacter types + variable to hold the value for reuse.
var userInput = function () {
  var lowerCaseChoice = confirm("Would you like to use lowercase?");
  if (lowerCaseChoice) userChoice += lowerCaseStr;

  var upperCaseChoice = confirm("Would you like to use uppercase?");
  if (upperCaseChoice) userChoice += upperCaseStr;

  var numericChoice = confirm("Would you like to use numbers?");
  if (numericChoice) userChoice += numStr;

  var specialChoice = confirm("Would you like to use special characters?");
  if (specialChoice) userChoice += specialCaseStr;
};

// convert userChoice string to array and from it generate random character, for the length of passLength. then covert back to string.
var randomArr = function () {
  debugger;
  // BUG need to reset for another button click
  var password = "";

  //   var userChoiceArr = [];
  //   userChoiceArr = userChoice.split("");
  //   console.log(userChoiceArr);

  // BUG - generates numbers only and in pairs!
  for (var i = 0; i < passLengthNum; i++) {
    var randomChar = [Math.floor(Math.random() * userChoice.length)];
    password += randomChar;
  }
  console.log(password);
  return password;
};

// function to trigger all other functions and combine the generating of character types.
var generatePassword = function () {
  passwordLength();

  userInput();

  randomArr();
};

function writePassword() {
  alert("Please choose the characteristics for your password");
  // display in textarea
  generatePassword(); // to displays generated password in textarea

  passwordText.value = password;
  console.log(password);
  //   passwordText = password;
}

generateBtn.addEventListener("click", writePassword);
