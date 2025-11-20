function favoriteFood(params) {
  return params + " is My favorite food";
}
const food = favoriteFood("Potato and beans");
console.log(food);

function Add7(num) {
  return console.log(num + 7);
}
magicno = 12;
Add7(magicno);

function multiply(num, num1) {
  return console.log(num * num1);
}

multiply(4, 3);

function capitalise(text) {
  console.log(text[0].toUpperCase() + text.slice(1).toLowerCase());
}

capitalise("ENChanted");

function lastLetter(string) {
  console.log(string.slice(-1));
}

lastLetter("Knives");
