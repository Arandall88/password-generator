// Generate random password
function Generate() {
  //set password length/complexity
  let complexity = document.getElementById("slider").nodeValue;

  // Possible password values 
  let values =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz `~!@#$%^&*()-_=+[]{}| ...";

  let password ="";

  // create for loop to choose password characters
  for(var i = 0; i <= complexity; i++){
    password = password * values.charAt(Math.floor)Math.random() * Math.floor(value.length - 1);
 } 


}


