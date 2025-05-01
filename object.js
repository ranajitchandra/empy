
console.clear();

// Access the golden rod color value in output.

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// console.log(colors.red)
// console.log(colors["golden rod"])
// console.log(colors["green"])



// For this object below add a property named passenger capacity with value 5 using loop and condition

let obj = {
    name : "Ranajit",
    "serial": 123,
}
obj["color"] = "red"
obj["passenger capacity"] = ["Hi", "hello"] 
obj["passenger capacity"][0] =123;
obj["passenger capacity"].push({color : "red", brand : "poco", price: 30000})
for(let p of obj["passenger capacity"]){
   if(typeof(p) == "object"){
        for(let item in p){
            console.log(p[item]) // dot notation problem
            // console.log(item) // dot notation problem
        }
   }
}
// console.log(obj)



// Display the physics marks as output.

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics)
// for(s in student.physics){
//     console.log(student.physics[s])
// }


// Count the number of properties.

// let studentData = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// console.log(Object.keys(studentData).length)



// Loop through an object and print the key-value pairs with their types


// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };
// myObject['new obj'] = new Object();
// myObject['create obj'] = Object.create(null);
// myObject['litarel'] = {}

// for(obj in myObject){
//     console.log(`Key : ${obj} | Type: ${typeof(myObject[obj])}`)
// }



// compare to string case and white space

// let a = " Ranajit ";
// let b = "  ranajit ";

// if(a.trim().toLowerCase() === b.trim().toLowerCase()){
//     console.log("ok");
// }else{
//     console.log("not");

// }




// Count how many times a string has the letter a or A


// let sentence = "I am learning  the jAvascript"
// let count = "";
// for(i=0; i<sentence.length; i++){
//     if(sentence[i] == "a" || sentence[i] == "A"){
//         count =count + sentence[i];
//     }
// }
// console.log(count.length)




// function containsAllVowels(str) {
//     str = str.toLowerCase();
//     let hasA = false, hasE = false, hasI = false, hasO = false, hasU = false;
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         // console.log(char)
//         if (char === 'a') hasA = true;
//         if (char === 'e') hasE = true;
//         if (char === 'i') hasI = true;
//         if (char === 'o') hasO = true;
//         if (char === 'u') hasU = true;
//         // If all vowels are found, return true early
//         if (hasA && hasE && hasI && hasO && hasU) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(containsAllVowels("education")); // true
// console.log(containsAllVowels("hello")); // false
// console.log(containsAllVowels("sequoia")); // true
// console.log(containsAllVowels("AEIOUxyz")); // true (case insensitive)



//If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// function replaceCharacters(str) {
//     return str.replace(/x/g, 'y').replace(/X/g, 'Y');
// }

// console.log(replaceCharacters("xx --- (yy)--- XXXXX  --- (YY)")); 
// // Output: "yY hello YyY world yY"



// // Capitalize Every first Letter of each word in a String
// function capitalizeFirstLetter(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }

// console.log(capitalizeFirstLetter("hello")); // Output: "Hello"


// ++++++++++Practice++++++++++++++++++++++++++++++++++++++++++

// let name = "Ranajit is my name";
// console.log(name.length)
// // let part = name.slice(0,15)
// // console.log(part);
// let splitToArray = name.split(" ")
// console.log(name.split(" "))
// console.log(splitToArray.join(""))



// let name = "Ranajit is my name"; 

// console.log(name.length); // Prints the length of the string

// let part = name.slice(0, 15); 
// console.log(part); // Prints "Ranajit is my"

// let splitArray = name.split(" "); 
// console.log(splitArray); // Splits the string into an array

// console.log(splitArray.join("|")); // Joins the array with "|"



// reverse string and array
// let name2 = "Ranajit is my name"; 
// let reverseStr = "";
// let reverseStr2 = "";
// let reverseStr3 = name2.split("").reverse().join("")
// let reverseStr4 = "";
// let reverseStr5 = [];
// for(n of name2){
//     reverseStr = n + reverseStr;
// }
// for(i = 0; i < name2.length; i++){
//     reverseStr2 =  name2[i] + reverseStr2;
// }
// for(i = name2.length -1; i >= 0; i--){
//     reverseStr4 =reverseStr4 + name2[i];
//     reverseStr5.push(name2[i]);
//     console.log(name2[i])
// }
// console.log(reverseStr)
// console.log(reverseStr2)
// console.log(reverseStr3)
// console.log(reverseStr4)
// console.log(reverseStr5.join(""))


// ++++++++++Practice++++++++++++++++++++++++++++++++++++++++++


// let arr = [100, 99, 119, 300]
// console.log()
// let sum = 0;
// for(i of arr){
//     // console.log(i)
//     sum+=i
// }

// // console.log(sum % 10000000)
// // console.log(sum / 3600)
// // console.log(sum / 60) 
// console.log(100 / 60) 
// console.log(100 % 60) 




















