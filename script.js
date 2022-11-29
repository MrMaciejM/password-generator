// Array of special characters to be included in password

// prettier-ignore
var specialCharacters = [  "@",  "%", "+", "\\", "/", "'", "!", "#", "$", 
"^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
// prettier-ignore
var lowerCasedCharacters = [  "a",  "b",  "c",  "d",  "e",  "f",  "g",  "h",  "i",  "j",  "k",  "l",  "m",  "n",  "o",  "p",  "q",  "r",
  "s",  "t",  "u",  "v",  "w",  "x",  "y",  "z",];

// Array of uppercase characters to be included in password
// prettier-ignore
var upperCasedCharacters = [  "A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",  "N",  "O",  "P",  "Q",  "R",
  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z",
];

function getPasswordOptions() {
  var pwdLength = prompt("Please enter the desired password length");

  // checks if entered password length is appropriate
  parseInt(pwdLength);
  if (pwdLength < 10 || pwdLength > 64) {
    alert("Please enter a number! Min: 10, Max: 64 ");
    return;
  }
  // checks if password is not a number, e.g. a string, or if it is an empty string.
  if (isNaN(pwdLength) === true || pwdLength === "") {
    alert("Please enter a number! Min: 10, Max: 64 ");
    return;
  }

  var specialChar = confirm(
    "Press OK to include special characters in the password, i.e. #, $, !, @"
  );

  var numericChar = confirm("Press OK to include numbers in your password");

  var lowercaseChar = confirm("Press OK to include lowercase letters");

  var uppercaseChar = confirm("Press OK to include uppercase letters");

  // checks if user cancelled out of all password options
  if (
    specialChar === false &&
    numericChar === false &&
    lowercaseChar === false &&
    uppercaseChar === false
  ) {
    alert("You must click OK on at least one of the password options");
    return;
  }

  // final check to see if the value is between 10 and 64
  if (pwdLength >= 10 && pwdLength <= 64) {
    // prettier-ignore
    var pwdOptions = [pwdLength, specialChar, numericChar, lowercaseChar, uppercaseChar];
    return pwdOptions;
  } else {
    console.log("ensure the value is a number between 10 and 64");
  }
}

function getRandom() {
  var pwdOptions = getPasswordOptions();

  // I start off with empty array, because the final array of password options will depend on the user inputs, thus making it dynamic is essential.
  charArray = [];

  // the following will check if password options are equal to 'true', and if so, will add them to charArray
  if (pwdOptions[1] === true) {
    charArray.push(specialCharacters);
  }
  if (pwdOptions[2] === true) {
    charArray.push(numericCharacters);
  }
  if (pwdOptions[3] === true) {
    charArray.push(lowerCasedCharacters);
  }
  if (pwdOptions[4] === true) {
    charArray.push(upperCasedCharacters);
  }

  // these two vars will be used to store and then combine results at the end of loops
  var arrayResult = "";
  var result = "";

  // pwdOptions[0] is the password length entered by the user in previous function
  for (var j = 0; j < pwdOptions[0]; j++) {
    var randomArray = Math.floor(Math.random(charArray) * charArray.length);
    for (var i = 0; i <= charArray[randomArray].length; i++) {
      // random character will be generated with randomChar variable, the array from which this is generated will be random and depends on randomArray variable
      var randomChar = Math.floor(
        Math.random(charArray[randomArray]) * charArray[randomArray].length
      );
      arrayResult = charArray[randomArray][randomChar];
    }
    result += arrayResult;
  }
  // I may want to log this to the console for my own reference, therefore I will leave this commented out for the future use.
  //console.log("Result is: " + result);
  return result;
}

// Function to generate password with user input
function generatePassword() {
  return [getRandom()];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
