// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var getRandomLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var getRandomUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var getRandomNumber = ["0","1","2","3","4","5","6","7","8","9"]; 
var getRandomSymbol = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=",",","<",">","?","/","~"]; 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Assignment code here
function generatePassword(){

//Generate Prompts 
var passwordLength = window.prompt("How many characters would you like your password? Choose between 8 to 128"); 
console.log(passwordLength); 
if (passwordLength >= 8 && passwordLength <= 128) { 
  window.alert("Your password is" + passwordLength + "characterts long.");  
}

//Continue user input validation 
var forLowerCase = window.confirm ("Will your password include lowercase letters?");
if (forLowerCase) {
  window.alert("Your password will include lowercase letters.");
}
else {
  window.alert("Your password will not include lowercase letters.");
}

var forUpperCase = window.confirm("Will your password include uppercase letters?");
if (forUpperCase)
window.alert("Your password will include uppercase letters."); 
else {
  window.alert("Your password will not include uppercase letters."); 
}
var forNumbers = window.confirm("Will your password include numbers?"); 
if (forNumbers) {
  window.alert("Your password will include numbers."); 
}
else {
  window.alert("Your password will not include numbers."); 
}
var forSymbols = window.confirm("Will your password include symbols?"); 
if (forSymbols) {
  window.alert("Your password will include symbols.");
}
else {
  window.alert("Your password will not include symbols."); 
  } 
}