let john = {name: "John", age: 29}
let senku = {name: "Senku", age: 25}
let thorfinn = {name: "Thorfinn", age: 30}


let arr = [john,senku,thorfinn]


function getAverageAge(array){
    let sum = 0;
for(let x =0; x < array.length; x ++){
      sum += array[x].age;
            }
let average = sum / r
    return average;

}

console.log(getAverageAge(arr))

//function getAverageAge(users) {
//  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//}

//let john = { name: "John", age: 25 };
//let pete = { name: "Pete", age: 30 };
//let mary = { name: "Mary", age: 29 };

//let arr = [ john, pete, mary ];

//alert( getAverageAge(arr) ); // 28
