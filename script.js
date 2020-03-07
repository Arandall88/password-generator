console.log("");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// generate password
function generatePassword();{
 // prompt the user for password length
   
 var  createpassword= prompt("Please Choose a password between 8 and 128 characters");


 //  cheeck to see if user entered length 

  var passwordlength = [""]


// 4 confirms
// special characters
// uppercase
// generate password, based on user specifications.
//  user specifications come from confirms 
// save them in variables
// 
 for(var i= 0; i < 10; i++){
   
 } 


  return "something";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
