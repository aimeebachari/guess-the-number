let randomNumber = Math.floor((Math.random() * 100) + 1);

let name = prompt("Please enter your name.");

let number = prompt("Enter a number from 1 to 100");

if (number === randomNumber) {
  alert(`${name}, you have won`);
} else {
  alert(`Sorry ${name}, try again`);
}
