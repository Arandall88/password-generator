// // Assignment Code
var generateBtn = document.querySelector("#generate"); 
var uppercase = document.querySelector("#uppercase"); 
var lowercase = document.querySelector("#lowercase"); 
var numbers = document.querySelector("#numbers"); 
var charats = document.querySelector("#charats"); 
// // generate password
function writePassword(){ 
  // prompt the user for password length
 passwordlength = prompt("can you see me");
 console.log(testresponse);
  //  cheeck to see if user entered length 
  if(confirm("password length") == true) {
    passwordlength = "Password Saved Successfully!";
  } else {
    passwordlength = "Save Cancelled";
  }
  
  // if (passswordlength < 128) {
  //   alert("would you like uppercase letters");
 // 4 confirms 
 confirm()
 confirm()
 confirm()
 confirm()
 // special characters
 // uppercase
 // generate password, based on user specifications.
 //  user specifications come from confirms 
 // save them in variables
 // 
  for(var i= 0; i < 10; i++){
    
  } 
   return "passwordlength";
}
 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
 }
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);