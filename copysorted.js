let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array) {
  return (copy = [...array].sort());
}

let sorted = copySorted(arr);

console.warn(sorted); // CSS, HTML, JavaScript
console.warn(arr); // HTML, JavaScript, CSS (no changes)
