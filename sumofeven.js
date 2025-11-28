array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfTripleEvens(even) {
  //filter and store even numbers to the evens variable
  evens = even.filter((x) => x % 2 === 0);
  //multiplies each even number by 3 and stores them in a new array called triple of evens
  tripleofevens = evens.map((x) => x * 3);
  sumofevens = tripleofevens.reduce(
    (number, anothernumber) => number + anothernumber
  );
  console.log(evens, tripleofevens, sumofevens);
}

sumOfTripleEvens(array);
// array.map
// array.filter
// array.reduce
