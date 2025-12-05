// function takes in three arguements array, a and b
//function iterates array values
// function removes all values from array except ones that are between a and b
// function changes array value in place
function filterRangeInPlace(array, a, b) {
  const filtered = array.filter((x) => x >= a && x <= b);

  // empty array
  array.length = 0;
  // fill array with filtered content
  array.push(...filtered);
}
//filterRangeInPlace(arr, 1, 4);

function filterRInPlace(array, a, b) {
  const filterd = array.filter((x) => x >= a && x <= b);
  array.splice(0, array.length, ...filterd);
}

let arr = [5, 8, 1, 3];

// filterRInPlace(arr, 1, 4);
// console.log(arr);

// assingment solution

function filterRangeInPlaceS(array, a, b) {
  for (let i = 0; i < array.length; i++) {
    let val = array[i];

    if (val < a || val > b) {
      array.splice(i, 1);

      i--;
    }
  }
}
filterRangeInPlaceS(arr, 1, 4);
console.log(arr);
