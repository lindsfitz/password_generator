// Assignment Code
var generateBtn = document.querySelector("#generate"); //pulls button from html


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

//defining the arrays containing the different options to include for the password 
const lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const specArray = ["!","@","#","$","%","^","&","*","(",")"];
const numArray = ["1","2","3","4","5","6","7","8","9","0"];


//defining the function to generate a password. creates prompts/confirms to gather the users choices and then sorts the original arrays into a holding array containing only the users selected character types
function generatePassword() {
  
  var holdingArray = [];
  var passwordArray = [];

  var charInput = prompt("Please choose a password character length between 8 and 128.");
  if (isNaN(charInput) || charInput < 8 || charInput > 128) {
    alert("Please choose a number between 8 and 128.");
    return "Please try again.";
  }

  var lowerInput = confirm("Include lowercase letters?");
  var upperInput = confirm("Include uppercase letters?");
  var specialInput = confirm("Include special characters?");
  var numericInput = confirm("Include numbers?");
  
  if (!lowerInput && !upperInput && !specialInput && !numericInput) {
    alert("You must choose at least one.");
    return "Please try again.";
  }
  

  if (lowerInput) {
    holdingArray = holdingArray.concat(lowerArray);
  }
  
  if (upperInput) {
    holdingArray = holdingArray.concat(upperArray)
  }
  
  if (specialInput) {
    holdingArray = holdingArray.concat(specArray)
  }
  if (numericInput) {
    holdingArray = holdingArray.concat(numArray)
  }

  for (let i=0; i<charInput; i++) {
    var selectedChar = holdingArray[Math.floor(Math.random()*holdingArray.length)];
    passwordArray.push(selectedChar);
  }

  return passwordArray.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

