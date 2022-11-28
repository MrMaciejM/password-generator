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
/*
var specialChar = false;
var numericChar = false;
var lowercaseChar = true;
var uppercaseChar = true;
*/
// Function to prompt user for password options
function getPasswordOptions() {
  //prompt("Enter desired password length: min: 10, max: 64");
  var pwdLength = 11;
  var specialChar = true;
  var numericChar = true;
  var lowercaseChar = true;
  var uppercaseChar = false;
  //prompt("Please enter the desired length of the password: ");
  while (true) {
    // first check is to ensure that the user input is a number.
    if (pwdLength >= 10 && pwdLength <= 64) {
      //console.log("inside number and is a number");
      return [
        pwdLength,
        specialChar,
        numericChar,
        lowercaseChar,
        uppercaseChar,
      ];
    } else {
      console.log("ensure value is a number between 10 and 64");
    }
    break;
  }
}
//getPasswordOptions();

// Function for getting a random element from an array
// function getRandom(arr)
function getRandom() {
  console.log(getPasswordOptions());
  console.log(getPasswordOptions()[0]);
  charArray = [];
  if (getPasswordOptions()[1] === true) {
    //console.log("specialChar is true: ");
    charArray.push(specialCharacters);
  }
  if (getPasswordOptions()[2] === true) {
    //console.log("numericChar is true");
    charArray.push(numericCharacters);
  }
  if (getPasswordOptions()[3] === true) {
    charArray.push(lowerCasedCharacters);
  }
  if (getPasswordOptions()[4] === true) {
    charArray.push(upperCasedCharacters);
  }
  console.log("After if statements");
  var arrayResult = "";
  var result = "";
  console.log("Chararray before loop is: " + charArray);

  for (var j = 0; j < getPasswordOptions()[0]; j++) {
    console.log("Char array is: " + charArray);
    var randomArray = Math.floor(Math.random(charArray) * charArray.length);
    console.log("Line 82: " + charArray);
    console.log("Line 83: " + randomArray);
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

  switch (randomArray) {
    case 0:
      console.log("Entered case 0 - special: " + result);
      return result;
    //break;
    case 1:
      console.log("Entered case 1 - numeric: " + result);
      return result;
    //break;
    case 2:
      console.log("Entered case 2 - lower: " + result);
      return result;
    //break;
    case 3:
      console.log("Entered case 3 - uppercase: " + result);
      return result;
    //break;
  }
}

// Function to generate password with user input
function generatePassword() {
  /*
var specialChar = true;
var numericChar = true;
var lowercaseChar = true;
var uppercaseChar = true;
*/

  getPasswordOptions();
  return getRandom();

  // get password
}
console.log("pwd generated is: " + generatePassword());

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
