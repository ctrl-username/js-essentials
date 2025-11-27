arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even;
function filterEvenNumbers(array) {
  even = array.filter((x) => x % 2 === 0);
  console.log(even);
}
let multipleofevens;
function multipleOfEvens(evenNumbers) {
  return (multipleofevens = evenNumbers.map((num) => num * 3));
}

filterEvenNumbers(arrays);
multipleOfEvens(even);
console.log(even);

let sum = 0;
function sumOfEvens(multipleofevens) {
  for (let i = 0; i < multipleofevens.length; i++) {
    sum = sum + multipleofevens[i];
  }
}

console.log("multiple of evens", multipleofevens);
sumOfEvens(multipleofevens);
console.log("sum of evens", sum);
