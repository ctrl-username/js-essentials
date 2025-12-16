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
function addItem(event) {
  event.preventDefault();

  // create li,span and button element
  const shopItem = document.createElement("li");
  const shopItemText = document.createElement("span");
  const deleteButton = document.createElement("button");

  // store input form value
  let inputValue = userInput.value;

  // clear userinput value
  userInput.value = "";

  // set text content for item span and delete button element

  shopItemText.textContent = inputValue;
  deleteButton.textContent = "Delete";
  shopItem.append(shopItemText);
  shopItem.append(deleteButton);
  shopListContainer.append(shopItem);
  //event listener for delete button to delete
  deleteButton.addEventListener("click", () => shopItem.remove());
  console.log(shopItemText);
  userInput.focus();
}

addButton.addEventListener("click", addItem);

//mdn solution
// //
// <script>
//    const list = document.querySelector('ul');
//    const input = document.querySelector('input');
//    const button = document.querySelector('button');

//    button.addEventListener('click', (event) => {
//      event.preventDefault();

//      const myItem = input.value;
//      input.value = '';

//      const listItem = document.createElement('li');
//      const listText = document.createElement('span');
//      const listBtn = document.createElement('button');

//      listItem.appendChild(listText);
//      listText.textContent = myItem;
//      listItem.appendChild(listBtn);
//      listBtn.textContent = 'Delete';
//      list.appendChild(listItem);

//      listBtn.addEventListener('click', () => {
//        list.removeChild(listItem);
//      });

//      input.focus();
//    });
//  </script>
