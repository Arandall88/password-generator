// Assignment Code
var generateBtn = document.querySelector("#generate");

// generate password
function generatePassword();{
 // prompt the user for password length

 var gener = confirm("The question is, do *you* like sushi?");
    var  createpassword= prompt("Please Create a Password");


//  cheeck to see if user entered length 
// 4 confirms
// special characters 
// numbers 
// lowercase
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
