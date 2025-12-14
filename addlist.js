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

// create un ordered list item for adding
