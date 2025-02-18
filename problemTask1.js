
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

// let numbers = [5,6,11,12,98, 5]
// function repeatedNum(arr){
//     let getData = [];
//     let getData2 = [];

//     for(const i of arr){
//         if(arr.includes(arr[i]) === true){
//             getData.push(arr[i]);
//         }
//         if(arr.includes(25) === true){
//             getData2.push(arr[i]);
//         }
//     }
//     return  `FirstCount is ${getData[0]} : ${getData.length} Times, SecondCount is ${getData2[0] === undefined ? null : getData2[0]} : ${getData2.length} Times`
// }
// let rep = repeatedNum(numbers);
// console.log(rep);




// Write a function to count the number of vowels in a string.


// let myArr = "ree, Ocean, Code, Light, Dream, Cloud, Build, Flow, Pixel, Swift."
// let myString = myArr.split(",").join("") // split() make an object and join() make a string
// function vowelCount(str){
//     console.log(str.length)
//     let a =[];
//     let e =[];
//     let i =[];
//     let o =[];
//     let u =[];
//     for(s of str){
//         console.log(str.includes(s))
//         if(s === "a"){
//             a.push(s)
//         }else if(s === "e"){
//             e.push(s)
//         }else if(s === "i"){
//             i.push(s)
//         }else if(s === "o"){
//             o.push(s)
//         }else if(s === "u"){
//             u.push(s)
//         }
//     }
//     return `a is ${a.length} Times, e is ${e.length} Times, i is ${i.length} Times, o is ${o.length} Times, u is ${u.length} Times,`
// }
// let vowelResult = vowelCount(myString.toLowerCase())
// console.log(vowelResult)








// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

// let arrStr = "I am learning Programming to become a programmer";
// function findLongestWord(str){
//     let arrStr = str.split(" "); // making array
//     let getLongestWord = arrStr[0];
//     for(let i = 0; i<arrStr.length; i++){
//         // console.log(typeof arrStr[i].length)
//         // console.log(getLongestWord.length)
//         if(getLongestWord.length < arrStr[i].length){
//             getLongestWord = arrStr[i];
//         }
//     }
//     return getLongestWord
// }
// let longestWord = findLongestWord(arrStr)
// console.log(longestWord)



// Generate a random number between 10 to 20.

// console.log( Math.floor( Math.random() * 10 ) + 10 )




function neutralize(str1, str2) {
    let result = "";
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) {
            // result += str1[i]; // Keep the same sign if they are the same?
            result = result + str1[i]; // Keep the same sign if they are the 
            console.log(result)
        } else {
            result += "0"; // Neutralize if they are different
        }
    }
    return result;
}

// Example usage:
console.log(neutralize("+-++-", "--++-")); // Output: "0-++-"
// console.log(neutralize("++++", "----"));   // Output: "0000"
// console.log(neutralize("+-+-", "+-+-"));   // Output: "0000"
// console.log(neutralize("++--", "++--"));   // Output: "++--"







