// //a dynamic shopping list that allows users to add items using the input
//form
//after you type in an item in the input field and click
// the enter button
// or add item button
//each item should have a button next to it that removes the item when clicked
// the input fieled should be cleared and focused ready for a new entry
const shopListContainer = document.querySelector("ul");
const userInput = document.querySelector("input");
const addButton = document.querySelector("button");

// add button
function addItem(params) {
  preventDefault();
  // create li,span and button element
  const shopItem = document.createElement("li");
  const shopItemText = document.createElement("span");
  const deleteButton = document.createElement("button");
  // store input form value
  let inputValue = userInput.value;
  // clear userinput value
  userInput.value = "";
}
