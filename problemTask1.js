
console.clear()



// Write a function to convert temperature from Celsius to Fahrenheit

// function celsiusToFahrenheit(celsius){
//     let f = (celsius * 9/5) + 32;
//     return f;
// }
// let fahren = celsiusToFahrenheit(21);
// console.log(fahren);



// You are given an array of numbers. Count how many times the a number is repeated in the array.
// find: 5 output: 2

let numbers = [5,6,11,12,98, 5]
function repeatedNum(arr){
    let getData = [];
    for(const i of arr){
        if(arr.includes(arr[i]) === true){
            getData.push(arr[i]);
        }
    }
    console.log(getData)
    return getData.length;
}
let rep = repeatedNum(numbers);
console.log(rep);







