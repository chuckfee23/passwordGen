// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
var lowerCase = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];
// define a function that we will use to pull a random character from an array
var getRandom = function (list) {
  return list[Math.floor(Math.random() * list.length)];
};
// define a function that will construct the final password, and check to make sure all of the user criteria that they wanted their password comprised of is included
var makePassword = function (
  pwLength,
  merged,
  includeCaps,
  includeLowerCase,
  includeNumbers,
  includeCharacters
) {
  var finalPw = " ";
  var capsAdded = false;
  var lowsAdded = false;
  var numsAdded = false;
  var charsAdded = false;

  // Grab random character from the merged array, then check to make sure the other characters that the user wanted to add to the password are indeed included, and if not, add them

  for (var i = 0; i < pwLength; i++) {
    var newLetter = getRandom(merged);
    if (includeCaps && !capsAdded) {
      newLetter = getRandom(upperCase);
      capsAdded = true;
    } else if (includeLowerCase && !lowsAdded) {
      newLetter = getRandom(lowerCase);
      lowsAdded = true;
    } else if (includeNumbers && !numsAdded) {
      newLetter = getRandom(numbers);
      numsAdded = true;
    } else if (includeCharacters && !charsAdded) {
      newLetter = getRandom(specialChar);
      charsAdded = true;
    }

    finalPw = finalPw + newLetter;
  }
  return finalPw;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// define a function that will take the user input for the criteria they want included in their password
var generatePassword = function () {
  // Ask the user to input the length of the password, and check that it meets the needed criteria of password length
  var merged = [];
  var pwLength = prompt(
    "How many characters would you like your password to be? Please enter a value between 8-128."
  );
  if (pwLength >= 8 && pwLength <= 128) {
    alert(
      "Thank you! We'll create a password the is " +
        pwLength +
        " characters long."
    );
  } else {
    alert("Invalid input. Please enter a numeric value between 8 - 128");
    return;
  }
  // ask user if they want to include capital letters in password, and if so, add them to new array containing characters user wants in password
  var includeCaps = confirm(
    "Would you like your password to include CAPITAL letters?"
  );
  if (includeCaps) {
    merged = merged.concat(upperCase);
    // console.log(merged);
  }
  // ask user if they would like to include lower case letters in password, and if so, add them to new array containing characters user wants in password
  var includeLowerCase = confirm(
    "Would you like your password to include lower case letters?"
  );
  if (includeLowerCase) {
    merged = merged.concat(lowerCase);
    // console.log(merged);
  }
  // ask user if they would like to include numbers in password, and if so, add them to new array containing characters user wants in password
  var includeNumbers = confirm(
    "Would you like your password to include numbers?"
  );
  if (includeNumbers) {
    merged = merged.concat(numbers);
    // console.log(merged);
  }
  // Ask user if they would like to include special characters, and if so, add them to new array containing characters user wants in password
  var includeCharacters = confirm(
    "Would you like to include special characters (ex: @ $ % &) in your password?"
  );
  if (includeCharacters) {
    merged = merged.concat(specialChar);
  }

  console.log(merged);

  // validate that the user has passed a true value for the types of characters to use in their password
  if (
    !includeCaps &&
    !includeLowerCase &&
    !includeNumbers &&
    !includeCharacters
  ) {
    alert(
      "It is impossible to make a password without any characters. Please start over."
    );
    return;
  }
  // call the function that will make the final password and
  return makePassword(
    pwLength,
    merged,
    includeCaps,
    includeLowerCase,
    includeNumbers,
    includeCharacters
  );
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
