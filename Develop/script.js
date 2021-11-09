//Build a password of user defined length lower case, upper case, special chars and numbers 

//selecting button with id 
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button, click generates window alerts 
generateBtn.addEventListener("click", writePassword);

//Create an array of lower case letters 
var LowerCase = "abcdefghijklmnopqrstuvwxyz"; 

//Create an array of upper case letters 
var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  

//Create an array of special chars 
var SC = "!#$%&()*+,-./:;<=>?@[]^_{|}~"; 

// Create an array of numbers 
var Num = 1234567890; 

//Create final empty array 
var finalArray = []; 



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
   var password = "";
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

   console.log(finalArray)

   //Create random selection variables 
   //for loop of length = user required length of password 
   for (var i = 0; i <= passwordLength - 1; i++) {
      password += finalArray.charAt(Math.floor(Math.random() * finalArray.length));
      
   }
   
   // This puts the password value into the textbox, changes function input to use textcontent  
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
   
}; 

