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
var pwdLength = 11;
var specialChar = true;
var numericChar = true;
var lowercaseChar = true;
var uppercaseChar = true;
// Function to prompt user for password options
function getPasswordOptions() {
  //prompt("Enter desired password length: min: 10, max: 64");

  while (true) {
    // first check is to ensure that the user input is a number.
    if (pwdLength >= 10 && pwdLength <= 64) {
      //console.log("inside number and is a number");
      //console.log(specialChar);
      //break;
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
  charArray = [
    specialCharacters,
    numericCharacters,
    lowerCasedCharacters,
    upperCasedCharacters,
  ];
  // randomArray generates random number from 0 to 3, it will then use this to select appropriate array.
  var randomArray = Math.floor(Math.random(charArray) * charArray.length);
  console.log(randomArray);

  var result = "";
  //function randomiseChar() {
  for (var i = 0; i <= charArray[randomArray].length; i++) {
    var mathRandomResult = Math.floor(
      Math.random(charArray[randomArray]) * charArray.length
    );
    result = charArray[randomArray][mathRandomResult];
  } //end of for loop

  console.log("Result is: " + result);
  //}
  //console.log(randomPick);
  switch (randomArray) {
    case 0:
      randomiseChar(specialCharacters);
      console.log("Entered case 0" + specialCharacters);
      break;
    case 1:
      randomiseChar(numericCharacters);
      console.log("Entered case 1");
      break;
    case 2:
      randomiseChar(lowerCasedCharacters);
      console.log("Entered case 2");
      break;
    case 3:
      randomiseChar(upperCasedCharacters);
      console.log("Entered case 3 ");
      break;
  }

  //console.log(randomPick);
  // random generator
  //var rndGenerator = Math.random(arr) * ;
  // specialCharacters
  // numericCharacters
  // lowerCasedCharacters
  // upperCasedCharacters
}
//getRandom();
//getRandom(arr);

// Function to generate password with user input
function generatePassword() {
  getRandom();
  // get password
}
generatePassword();

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
