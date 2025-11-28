array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfTripleEvens(numbers) {
  return (evens = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((sum, num) => sum + num));
}

console.log(sumOfTripleEvens(array));
// array.map
// array.filter
// array.reduce
