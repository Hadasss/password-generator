var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
var numStr = "12345678901234567890";
var specialCaseStr = '!"#$%&()*+,-.;:<>=?@[]_^`{}~|';
var userChoice = "";
var passLength = "";
var passLengthNum = "";
var passwordArr = [];
var password = "";

var passwordLength = function () {
  passLength = prompt(
    "How long would you like your password to be?\nChoose between 8-128 characters."
  );

  if (passLength >= 8 && passLength <= 128) {
    passLengthNum = parseInt(passLength);
    console.log(passLengthNum);
  } else {
    alert("Choose a number between 8-128!");
    passwordLength();
  }
};

var userInput = function () {
  var lowerCaseChoice = confirm("Would you like to use lowercase?");
  if (lowerCaseChoice) userChoice += lowerCaseStr;

  var upperCaseChoice = confirm("Would you like to use uppercase?");
  if (upperCaseChoice) userChoice += upperCaseStr;

  var numericChoice = confirm("Would you like to use numbers?");
  if (numericChoice) userChoice += numStr;

  var specialChoice = confirm("Would you like to use special characters?");
  if (specialChoice) userChoice += specialCaseStr;

  console.log(userChoice);
};

var randomArr = function () {
  for (var i = 0; i < passLengthNum; i++) {
    var randomChar = userChoice[Math.floor(Math.random() * userChoice.length)];
    password += randomChar;
  }
  console.log(password);
  return password;
};

var generatePassword = function () {
  passwordLength();
  userInput();
  randomArr();
};

function writePassword() {
  password = "";
  alert("Please choose the characteristics for your password");

  generatePassword();

  passwordText.value = password;
  console.log(password);
}

generateBtn.addEventListener("click", writePassword);
