// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLength;
var lowercaseIncluded;
var uppercaseIncluded;
var numberIncluded;
var specialIncluded;
var lowercaseArray;
var uppercaseArray;
var specialArray;
var numberArray;
var fullCharacterArray;
var random;
var passwordArray = [];
var passwordString;
var password;

function requestCharacterLength () {
    characterLength = prompt("How many characters would you like your password to be?");

    if (characterLength < 8 || characterLength > 128) {

      alert("Password needs to be between 8 and 128 characters.");
      requestCharacterLength();
      }

    if (isNaN(characterLength)) {

      alert("Error: please enter a number value");
      requestCharacterLength();
      }
}

requestCharacterLength();
checkIncludedCharacters();

function checkIncludedCharacters() {
    lowercaseIncluded = confirm("Click OK if you want lowercase letters included in your password.");
    uppercaseIncluded = confirm("Click OK if you want uppercase letters included in your password.");
    numberIncluded = confirm("Click OK if you want numeric values included in your password.");
    specialIncluded = confirm("Click OK if you want special characters included in your password.");

  if (!lowercaseIncluded && !uppercaseIncluded && !numberIncluded && !specialIncluded)
    {
      alert("At least one type of character must be included in your password. Please choose again.");
      checkIncludedCharacters();
    }

}


if (lowercaseIncluded) {

  lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

}

else if (!lowercaseIncluded) {

  lowercaseArray = [];

}

if (uppercaseIncluded) {

  uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

}

else if (!uppercaseIncluded) {

  uppercaseArray = [];

}

if (specialIncluded) {

  specialArray = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}",":",";","<",",",">",".","?","/"];

}

else if (!specialIncluded) {

  specialArray = [];

}

if (numberIncluded) {

  numberArray = [0,1,2,3,4,5,6,7,8,9];

}

else if (!numberIncluded) {

  numberArray = [];

}

if (lowercaseIncluded) {

  fullCharacterArray = lowercaseArray.concat(uppercaseArray, specialArray, numberArray);
}

else if (uppercaseIncluded) {

  fullCharacterArray = uppercaseArray.concat(lowercaseArray, specialArray, numberArray);

}

else if (specialIncluded) {

  fullCharacterArray = specialArray.concat(lowercaseArray, uppercaseArray, numberArray);

}

else if (numberIncluded) {

  fullCharacterArray = numberArray.concat(lowercaseArray, uppercaseArray, specialArray);

}

var arrayLength = fullCharacterArray.length;


// Write password to the #password input
function writePassword() {

  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {

  passwordArray = [];

  for (var i = 0; i < characterLength; i++) {

      random = Math.floor(Math.random() * arrayLength);
      passwordArray.push(fullCharacterArray[random]);

  }

  passwordString = passwordArray.join("");
  return passwordString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);