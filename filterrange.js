// create function that accepts three arguements array, a and b
// function iterates through array values
// function looks for array values that is equal or higher than a and lower and equal to b
// return a result as an array

let arr = [5, 8, 3, 1];
function filterRange(array, a, b) {
  return array.filter((x) => x >= a && x <= b);
}

console.log(filterRange(arr, 1, 4));
