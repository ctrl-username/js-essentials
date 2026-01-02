let john = { name: "John", surname: "Doe", id: 1}
let peter = { name: "Peter", surname: "Smith", id: 2}
let ruffa = { name: "Ruffa", surname: "Asimov", id: 3}

let users = [john, peter, ruffa]



// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let usersMapped = users.map( (x) => {

   let userMap = {fullName:`${x.name + " " + x.surname}`, id: `${x.id}`};
    return userMap 
})


console.log(usersMapped[0].fullName)
console.log(usersMapped[1].fullName)
console.log(usersMapped[2].fullName)

