// var userAmount = parseInt( prompt("for buying Burger more then 500 tk"))

// if(userAmount >= 500){
//     document.write("<h1>You got Coke with burger</h1>");
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// var height = parseFloat( prompt("Enter your Height by unit Foot and inch"))
// var weight = parseFloat( prompt("Enter You Weight (KG)"))

// var height = (height * 0.3048 ) * (height * 0.3048 );
// var bmi =  weight / height;

// if(bmi <= 18.5){
//     document.write("<h1>you are underweight.</h1>")
// }
// else if(bmi >18.5 && bmi <24.9){
//     document.write("<h1>you are normal</h1>")
// }
// else if(bmi >25 && bmi <29.9){
//     document.write("<h1>you are overweight.</h1>")
// }
// else{
//     document.write("<h1>you are obese.</h1>")
// }



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// var num = parseInt(prompt("Enter your Exam Result number"));

// if(num >= 90 && num <= 100){
//     document.write("<h1>Your result is A grade</h1>");
// }
// else if(num >= 80 && num  < 90){
//     document.write("<h1>Your result is B grade</h1>");
// }
// else if(num >=70 && num < 80){
//     document.write("<h1>Your result is C grade</h1>");
// }
// else if(num >= 60 && num < 70){
//     document.write("<h1>Your result is D grade</h1>");
// }
// else{
//     document.write("<h1>oh! You Are Fail</h1>")
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// var num1 = parseInt(prompt("First compare Number"));
// var num2 = parseInt(prompt("Second compare Number"));

// num > num2 ? document.write(`<h1>Huge Bonus---${num1*num1}</h1>`) : document.write(`<h1> Double Bonus---${num1+num2}</h1>`);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




let fruits = ["apple", "banana", "lichi", "watermelon", "jackfruit"];

let thirdItem = fruits[3];

console.log("Third item:",thirdItem);

fruits[2] = "jambura";

console.log("fruits:",fruits);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let touristPlace = ["CoxBazar", "Sundarban", "Srimangal"];

touristPlace.push("Bandarban");
touristPlace.push("Rangamati", "Sylhet");
console.log("tourist Place:", touristPlace);
touristPlace.pop();
console.log("tourist Place:", touristPlace);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



let books = ["Mockingbird", "Pride", "javascript", "Gone"]
console.log("Books:", books);
let find = books.includes("javascript");
console.log("Find Book javascript in array:",find, "Position is:",books.indexOf("javascript"));

// const arr = ["apple", "banana", "cherry"];

// const search = "banana";

// if (arr.includes(search)) {
//     const position = arr.indexOf(search);
//     console.log(`${search} found at index ${position}`);
// } else {
//     console.log(`${search} not found`);
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let numbers = [1, 2, 3, 4, 5];
let mixed = [42, "hello", true, null];

let isStudent = false;
let score = null;
let person = { firstName: "Alice", lastName: "Smith" };

let combinedArray = [numbers, mixed, isStudent, score, person];

for(i = 0;  i < combinedArray.length; i = i+1){
    
    if(Array.isArray(combinedArray[i])){
        console.log(`The index of--> ${i}: The array is --> ${combinedArray[i]}`);
    }else{
        console.log(`The index of--> ${i}: It is not an array --> ${combinedArray[i]}`);
    }
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let colors = ["red", "green", "blue", "yellow"];
let ages = [25, 30, 35, 40];

let addArray = colors.concat(ages);

console.log(addArray)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++