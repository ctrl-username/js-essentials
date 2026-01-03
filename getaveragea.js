let john = {name: "John", age: 29}
let senku = {name: "Senku", age: 25}
let thorfinn = {name: "Thorfinn", age: 30}


let arr = [john,senku,thorfinn]


function getAverageAge(array){
    let sum = 0;
for(let x =0; x < array.length; x ++){
      sum += array[x].age;
            }
let average = sum / array.length
    return average;

}

console.log(getAverageAge(arr))
