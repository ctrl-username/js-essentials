// function takes in three arguements array, a and b
//function iterates array values
// function removes all values from array except ones that are between a and b
// function changes array value in place
let arr = [5, 8, 1, 3];
function filterRangeInPlace(array, a, b) {
  filtered = array.filter((x) => x >= a && x <= b);

  array.length = 0;
  array.push(...filtered);
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);
