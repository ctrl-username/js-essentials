arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumOfTripledEvens(array) {
  even = array.filter((x) => x % 2 === 0);
  console.log(even);
}

sumOfTripledEvens(arrays);
