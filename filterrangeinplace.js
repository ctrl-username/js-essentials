// function takes in three arguements array, a and b
//function iterates array values
// function removes all values from array except ones that are between a and b
// function changes array value in place
let arr = [5, 8, 1, 3];
function filterRangeInPlace(array, a, b) {
  arr = array.filter((x) => {
    if (x >= a && x <= b) {
      return x;
    } else {
      //   array.pop();
    }
  });
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);
