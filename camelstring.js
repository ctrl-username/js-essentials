//create function
// function takes string seperated by dash as arguements
// functions uses dash as delimeter for string
// functions brakes string into array from delimeter
// function converts string array to string with camel case

function camelize(str) {
  let words = str.split("-");
  let camelCase = words.reduce((flat, camel) => {
    return flat + camel[0].toUpperCase() + camel.slice(1);
  });
  return camelCase;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
