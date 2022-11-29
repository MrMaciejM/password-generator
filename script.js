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

// how many characters / length (at least 10, no more than 64 - you can use .length to count length of strings)
//var pwdLength = 11;

// Function to prompt user for password options
function getPasswordOptions() {
  //prompt("Enter desired password length: min: 10, max: 64");
  var pwdLength = prompt("Please enter the desired password length");

  var specialChar = confirm(
    "Press OK to include special characters in the password, i.e. #, $, !, @"
  );

  var numericChar = confirm("Press OK to include numbers in your password");

  var lowercaseChar = confirm("Press OK to include lowercase letters");

  var uppercaseChar = confirm("Press OK to include uppercase letters");
  // first check is to ensure that the user input is a number.
  if (pwdLength >= 10 && pwdLength <= 64) {
    console.log("inside IF of getPasswordOptions");
    // prettier-ignore
    console.log([pwdLength, specialChar, numericChar, lowercaseChar, uppercaseChar])

    // prettier-ignore
    var pwdOptions = [pwdLength, specialChar, numericChar, lowercaseChar, uppercaseChar];

    return pwdOptions;
  } else {
    console.log("ensure the value is a number between 10 and 64");
  }
}
//getPasswordOptions();

// Function for getting a random element from an array
// function getRandom(arr)
function getRandom() {
  var pwdOptions = getPasswordOptions();
  //console.log(getPasswordOptions());
  //console.log(getPasswordOptions()[0]);
  charArray = [];
  console.log("line 62: " + pwdOptions);
  if (pwdOptions[1] === true) {
    console.log("specialChar (pwdOptions) is working: ");
    charArray.push(specialCharacters);
  }
  console.log("numericChar is: " + pwdOptions[2]);
  if (pwdOptions[2] === true) {
    console.log("numericChar is: " + pwdOptions[2]);
    charArray.push(numericCharacters);
  }
  if (pwdOptions[3] === true) {
    console.log("lowercaseChar is: " + pwdOptions[3]);
    charArray.push(lowerCasedCharacters);
  }
  if (pwdOptions[4] === true) {
    console.log("uppercaseChar is: " + pwdOptions[4]);
    charArray.push(upperCasedCharacters);
  }
  console.log("After if statements");
  var arrayResult = "";
  var result = "";
  console.log("Chararray before loop is: " + charArray);

  console.log("is it 11??? " + pwdOptions[0]);
  for (var j = 0; j < pwdOptions[0]; j++) {
    console.log("Char array is: " + charArray);
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
  console.log("Result is: " + result);
  return result;

  // removed unnecessary switch statement
}

// Function to generate password with user input
function generatePassword() {
  return [getRandom()];
}
//console.log("pwd generated is: " + generatePassword());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
