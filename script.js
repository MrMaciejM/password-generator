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
// confirm special characters
// include numeric characters
// lower case chars
// upper case chars

//var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Function to prompt user for password options
function getPasswordOptions() {
  var pwdLength = 11;
  var specialChar = false;
  var numericChar = true;
  var lowercaseChar = true;
  var uppercaseChar = true;
  //prompt("Enter desired password length: min: 10, max: 64");

  while (true) {
    // first check is to ensure that the user input is a number.
    // I do this by checking for anything equal to or larger than 0. Any other value will not work, thus ensuring correct value is passed.

    // prettier-ignore
    if (pwdLength >= 10 && pwdLength <= 64) {
      console.log("inside number and is a number");
      
      break;
    } 
    
    // prettier-ignore
    else {
      console.log("ensure value is a number between 10 and 64");
    }

    break;
  }
}
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  var arr = [
    specialCharacters,
    numericCharacters,
    lowerCasedCharacters,
    upperCasedCharacters,
  ];
  var randomPick = Math.floor(Math.random(arr) * arr.length);

  console.log(randomPick);
  // random generator
  //var rndGenerator = Math.random(arr) * ;
  // specialCharacters
  // numericCharacters
  // lowerCasedCharacters
  // upperCasedCharacters
}
getRandom();
//getRandom(arr);

// Function to generate password with user input
function generatePassword() {}

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
