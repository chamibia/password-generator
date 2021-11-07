//Build a password of user defined length lower case, upper case, special chars and numbers 

//selecting button with id 
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button, click generates window alerts 
generateBtn.addEventListener("click", writePassword);

//Create an array of lower case letters 
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

//Create an array of upper case letters 
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];  

//Create an array of special chars 
var SC = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",":", ";", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"]; 

// Create an array of numbers 
var Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; 

//Create final empty array 
var finalArray = []; 

var password = "";

var isLowerCase, isUpperCase, isNum, isSC;
var passwordLength;

//Get input from the user for LENGTH of password 
function writePassword() { 
   passwordLength = window.prompt("How many characters would you like your password? Choose between 8 to 128");     
   if (passwordLength >= 8 && passwordLength <= 128) { 
         window.confirm("Your password is: "  +  passwordLength +  " characterts long.");  
   } else { 
   window.alert ("This needs a value"); 
   } 

   // ask user if they want LOWER CASE LETTER 
   isLowerCase = window.confirm ("Will your password include lowercase letters?");
         if (isLowerCase) {
      window.alert("Your password will include lowercase letters.");
      }  else {
      window.alert("Your password will not include lowercase letters.");
   }
   // ask user if thy want UPPER CASE LETTER 
   isUpperCase = window.confirm ("Will your password include uppercase letters?"); 
      if (isUpperCase)  { 
         window.alert ("Your password will include uppercase letters."); 
      } else {
      window.alert("Your password will not include uppercase letters."); 
      }

   // ask user if they want NUMBER 
   isNum = window.confirm ("Will your password include numbers?"); 
      if (isNum) {
         window.alert("Your password will include numbers"); 
      } else {
         window.alert("Your password will not include numbers."); 
   }

   //ask user if they want SPECIAL CHAR
   isSC = window.confirm ("Will your password include special characters?"); 
      if (isSC) { 
         window.alert ("Your password will include special characters."); 
      }  else {
         window.alert ("Your password will not include special characters."); 
   }


   //1. is length greater than 8 and 2. did user select at least 1 criteria 
   if ((isLowerCase || isUpperCase || isSC || isNum) && (passwordLength >= 8)) {
      generatePassword(); 
   } else {
      window.alert("Please choose 1 test");
   }
}; 



//validation 


//inside the function generatePassword()
var generatePassword = function() {
   //if user has selected lower cases - add lower case to the final array 
   if(isLowerCase) { //true 
      finalArray += LowerCase; 
   }
   if (isUpperCase) { //true 
      finalArray += UpperCase; 
   }
   if (isNum) { //true 
      finalArray += Num; 
   }
   if (isSC) { //true 
      finalArray += SC 
   }


   //Create random selection variables 
   //for loop of length = user required length of password 
   for (var i = 0; i <= passwordLength; i++) {
      var randomVal = finalArray[Math.floor(Math.random() * finalArray.length)];
      password += randomVal; 
   }
   
   // This puts the password value into the textbox, changes function input to use textcontent  
   // function generatePassword() {
   //    document.getElementById("password").textContent; 
   // }
   console.log(password);
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







