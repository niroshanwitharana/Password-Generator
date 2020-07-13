// Assignment Code
var generateBtn = document.querySelector("#generate");

var rtnVal = "";
var allChar = [];
var charLength = 0;

// Write password to the #password input
function writePassword() {

  var charLength = prompt("choose a length of at least 8 characters and no more than 128 characters");
  charLength = parseInt(charLength);

  if (7 < charLength && charLength < 129) {
    var lowercaseType = prompt("Type 'lowercase' and press Enter if you wish to have lowercase characters in your password");
    var uppercaseType = prompt("Type 'uppercase' and press Enter if you wish to have uppercase characters in your password");
    var numericType = prompt("Type 'numeric' and press Enter if you wish to have numeric characters in your password");
    var specialType = prompt("Type 'special' and press Enter if you wish to have special characters in your password");

    var lowercaseType = lowercaseType.toLowerCase();
    var uppercaseType = uppercaseType.toLowerCase();
    var numericType = numericType.toLowerCase();
    var specialType = specialType.toLowerCase();



    if (lowercaseType != "lowercase" &&
      uppercaseType != "uppercase" &&
      numericType != "numeric" &&
      specialType != "special") {
      prompt("You must enter at least one character type to create a password")
    }
    else {

      function lowerCase() {
        if (lowercaseType === "lowercase") {
        var charSet1 = "abcdefghijklmnopqrstuvwxyz";
          allChar += allChar.concat(charSet1);
                   
        }
      }

      function upperCase() {

        if (uppercaseType === "uppercase") {
         var charSet2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          allChar += allChar.concat(charSet2);  
             
        }
      }

      function numericChar() {
        if (numericType === "numeric") {
         var charSet3 = "0123456789";
          allChar += allChar.concat(charSet3);
          
        }
      }

      function specialChar() {
        if (specialType === "special") {
         var charSet4 = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          allChar += allChar.concat(charSet4);
         
        }
      }
    }

  }
  
  else {
    prompt(charLength + " is not in the valid range..");
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    lowerCase();
    upperCase();
    numericChar();
    specialChar();

    for (var i = 0; i <= charLength; i++) {
      //picks a character within allCharSet at index of random number
      rtnVal += allChar.charAt(Math.floor(Math.random() * allChar.length));
      console.log(rtnVal);
    }

    return rtnVal;

  }

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

