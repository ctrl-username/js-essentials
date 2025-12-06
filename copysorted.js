let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array) {
  return [...array].sort();
  //alternatively you can use array.slice().sort(); since slice() makes a new copy of the array
}

let sorted = copySorted(arr);

console.warn(sorted); // CSS, HTML, JavaScript
console.warn(arr); // HTML, JavaScript, CSS (no changes)
