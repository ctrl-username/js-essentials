const listContainer = document.querySelector(".list-container");

const input = document.createElement("input");

Object.assign(input, {
  type: "text",
  placeholder: "Enter Todo",
  minlength: "10",
  maxlength: "20",
  required: "true",
  id: "todoinput",
});
listContainer.append(input);
const todoListInput = document.querySelector("#todoinput");
let todoListValue;
//
const getInputValue = () => {
  return (todoListValue = input.value);
};
// create add list button
const addTodoBtn = document.createElement("button");
addTodoBtn.textContent = "add todo";
listContainer.append(addTodoBtn);
// create un ordered list item for adding
const todoList = document.createElement("ul");
listContainer.append(todoList);

// create function to add todo
const addTodo = () => {
  let todoValue = getInputValue();
  if (todoValue.length <= 0) {
    alert("invalid input");
    return;
  }
  let list = document.createElement("li");
  list.textContent = todoValue;
  todoList.append(list);
};

addTodoBtn.addEventListener("click", addTodo);
