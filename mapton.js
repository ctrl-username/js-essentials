//maptonames javascript
let john = {name: "John", age: 25,}
let pete = {name: "Pete", age: 30,}
let mary = {name: "Mary", age: 22,}

let users = [john, pete, mary]

console.log(users[0])
// i have an array of objects users
// each objects have a name key values 
// use map method to get all the name key values and store them in another array

function getNames(object){

    object.map((x) => console.log(x.name))

}

getNames(users)


