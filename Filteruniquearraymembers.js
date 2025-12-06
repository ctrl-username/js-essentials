function unique(arr) {
  /* your code */
  return arr.filter((a, b) => arr.indexOf(a) === b);
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.table(unique(strings)); // Hare, Krishna, :-O
