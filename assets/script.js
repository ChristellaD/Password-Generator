// Assignment code here

//character sets
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerics = "1234567890";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//min and max password length
const minLength = 8;
const maxLength = 128;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword () {

var lengthInput = prompt("Please choose a length for your password in between 8-128 characters.");
var length = parseInt(lengthInput);

//verifies user input is within allotted range
if (length == null || length == "") {
  alert("You must enter a number between 8 and 128!");
} else if (length < minLength) {
    alert("Input is too short.");
} else if (length > maxLength) {
      alert("Input is too long.");
};

let uppercase = confirm("Include uppercase letters? (Click OK for yes. Click Cancel for no.)");
let lowercase = confirm("Include lowercase letters? (Click OK for yes. Click Cancel for no.)");
let numbers = confirm("Include numbers? (Click OK for yes. Click Cancel for no.)");
let special = confirm("Include special characters? (Click OK for yes. Click Cancel for no.)");

let password = "";
let charset = [];

if (uppercase == true) {charset.push(uppercaseChar)};
if (lowercase == true) {charset.push(lowercaseChar)};
if (numbers == true) {charset.push(numerics)}; 
if (special == true) {charset.push(specialChar)};

let allowedchars = charset.toString();

  for (let i = 0; i < length; i++) {
    password += allowedchars[Math.floor(Math.random() * allowedchars.length)];
  }

  //reference to the password text area
var passwordText = document.querySelector("#password");
passwordText.value = password;
};
