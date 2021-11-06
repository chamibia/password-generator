//Build a password of user defined length lower case, upper case, special chars and numbers 

//selecting button with id 
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button, click generates window alerts 
generateBtn.addEventListener("click", writePassword);

//Create an array of lower case letters 
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]; 

//Create an array of upper case letters 
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 

//Create an array of special chars 
var specialChar = ["~!@#$%^&*()_+[]{}<>,./?"]; 

// Create an array of numbers 
var numbers = ["1234567890"]; 

//Create final empty array 
var finalArray = []; 

//Get input from the user for LENGTH of password 
var length = window.prompt("How many characters would you like your password? Choose between 8 to 128");     
if (passwordLength >= 8 && passwordLength <= 128) { 
      window.alert("Your password is: "  +  passwordLength +  " characterts long.");  
} else { 
window.alert ("This needs a value"); 
} 

// ask user if they want LOWER CASE LETTER 
var isLowerCase = ("Will your password include lowercase letters?");
      if (isLowerCase) {
   window.alert("Your password will include lowercase letters.");
   }  else {
   window.alert("Your password will not include lowercase letters.");
}
// ask user if thy want UPPER CASE LETTER 
var isUpperCase = window.prompt ("Will your password include uppercase letters?"); 
   if (isUpperCase)  { 
      window.alert ("Your password will include uppercase letters."); 
   } else {
     window.alert("Your password will not include uppercase letters."); 
   }

// ask user if they want NUMBER 
var isNum = window.prompt ("Will your password include numbers?"); 
   if (isNum) {
      window.alert("Your password will include numbers"); 
   } else {
      window.alert("Your password will not include numbers."); 
}

//ask user if they want SPECIAL CHAR
var isSC = window.prompt ("Will your password include special characters?"); 
   if (isSC) { 
      window.alert ("Your password will include special characters."); 
    }  else {
      window.alert ("Your password will not include special characters."); 
}

//validation 

//1. is length greater than 8 and 2. did user select at least 1 criteria 

if ((isLowerCase || isUpperCase || isSC || isNum) && length > 8) {
   generatePassword(); 
} else {
   window.alert("Please choose 1")
}

//inside the function generatePassword()
var generatePassword = function() {
//if user has selected lower cases - add lower case to the final array 
if(isLowerCase) { //true 
   finalArray += lowerCaseArray; 
}
if (isUpperCase) { //true 
   finalArray =+ upperCaseArray; 
}
if (isNum) { //true 
   finalArray += isNum; 
}
if (isSC) { //true 
   finalArray += isSC 
}

//password variable is array placeholder for user generated amount of length
var password = []; 

//Create random selection variables 
//for loop of length = user required length of password 
for (var i = 0; i < passwordLength; i++) {
var randomArray = Math.floor(Math.random() * finalArray.length);
password.push(randomArray); 
}

// This puts the password value into the textbox, changes function input to use textcontent  
function generatePassword() {
   document.getElementById("password").textContent; 
}

var passwordText = document.querySelector("#password");
   passwordText.value = password;
 }; 



// var random = finalArray [randomNumber]; 
// password = password + randomChar; 




// function generatePassword 


// // // Write password to the #password input


//    var password = generatePassword();
   














  
  
//     var password = []; 
//     for(var i = 0; i < passwordLength; i++ ) {
//      var pickResult = result[Math.floor(Math.random() * result.length)]; 
//      password.push(pickedResult); 
//     }
//     var ps = password.join(""); 
//     UserInput(ps); 
//     return ps; 

//  

//   //Generate password function 

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() *26) + 65);
// }
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//   const symbols = '!@#$%^&*()[]{}+=<>/.'; 
//   return symbols[Math.floor(Math.random() * symbols.length)]; 
// }




// // //all boolean variables for conditions
// // var allBool = [forLowerCase, forUpperCase, forNumbers, forSymbols];
// // //all the bool that are true
// // var includedBool = []; 

// //     for(i=0; i < 4; i++){
// //       var current = allBool[i];
// //       if(current){
// //         includedBool.push(current);
// //       }
// //     }//at the end we will get an array with only the true booolean values (only the chars we want in the password)
    

// // loop that does code until it reaches passwordLength 
// // exit condition is when loop is done 
// // first, randomly pick characters off of these variables 
// // variables will be decided based on passwordLength, lastly
