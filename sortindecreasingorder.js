let arr = [5, 2, 1, -10, 8];

//arr.sort();  // Converts to strings, compares Unicode
// "-" (Unicode 45) comes before digits (48-57)
// So -10 would come first by accident

// ... your code to sort it in decreasing order
arr.sort((a, b) => b - a);
// Does NOT convert to strings!
// a and b stay as NUMBERS
// b - a does NUMERIC subtraction
// Negative/positive result determines order

console.table(arr); // 8, 5, 2, 1, -10

//sort default behaviour
// sorts from lowest unicode to highest unicode order
