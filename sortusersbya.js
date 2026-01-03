let john = { name: "John", age: 20}
let ash = { name: "Ash", age: 22}
let yagami = { name: "Yagami", age: 19}
let arr = [ john, ash, yagami]

// create function that gets users age property from array of objects
// sorts the users
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//sortuserage function
function sortByAge(user){
   user.sort( (a,b) =>  a.age - b.age  )
   
}

sortByAge(arr)

console.log(arr[0].name) //yagami
console.log(arr) //yagami
