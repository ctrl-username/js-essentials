array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfTripleEvens(numbers) {
  //filter and store even numbers to the evens variable
  const evens = numbers.filter((x) => x % 2 === 0);
  //multiplies each even number by 3 and stores them in a new array called triple of evens
  const tripleOfEvens = evens.map((x) => x * 3);
  //adds up all the multiplied even numbers and stores em in sum of evens
  const sumOfEvens = tripleOfEvens.reduce(
    (number, anothernumber) => number + anothernumber
  );
  return sumOfEvens;
}

console.log(sumOfTripleEvens(array));
// array.map
// array.filter
// array.reduce
