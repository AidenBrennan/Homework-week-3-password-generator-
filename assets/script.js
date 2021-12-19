// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {

 var passwordCharacters = [""];

 var passwordlength = window.prompt("enter desired length of password");
 if ( passwordlength<8)
 alert ("reccomended to use a password of atleast 8 characters")


  if (window.confirm("do you wish to use lowercase letters (recommended)") == true) {
      passwordCharacters.push ("q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m");  
  }
  if (window.confirm("do you wish to use uppercase letters (recommended)") == true) {
    passwordCharacters.push ("Q","W","E","R","S","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M");
  }


  if (window.confirm("do you wish to use numbers (recommended)") == true) {
    passwordCharacters.push ("1","2","3","4","5","6","7","8","9","10");
  }

 window.confirm("do you wish to use symbols (recommended)")
  if (window.confirm("do you wish to use symbols letters (recommended)") == true) {
    passwordCharacters.push ("!","@","#","$","%","^","&","*","(",")");   
  }

  let passwordFinal = ("")
for (let i=0; i<passwordlength; i++){
   passwordFinal += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
   console.log(passwordFinal)

   return passwordFinal;
}

 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

