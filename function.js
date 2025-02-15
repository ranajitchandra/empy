

// Take four parameters. Multiply the four numbers and then return the result


// function multiply(a, b, c, d){
//     let result = a * b * c * d;
//     console.log("Multiply");
//     return result;
// }

// let total = multiply(2,6,8,12);
// console.log(total);



// Take a number if the number is odd multiply it by 2 and return the result,
// If the number is even divide it by two and return the result.


// function checkOddEven(num){
//     if(num % 2 == 1){
//         let result = num * 2;
//         return result;
//     }else if(num % 2 == 0){
//         let result = num / 2;
//         return result;
//     }
// }
// let resultOddEven = checkOddEven(5);
// console.log(resultOddEven);



//Write a function called make_avg() which will take an array of integers
// and the size of that array and return the average of those values.


// function make_avg(val){
//     let sum = 0;
//     for(i = 0; i<val.length; i++){
//         sum+= val[i];
//     }
//     result = sum / val.length;
//     return result;
// }
// let arr = [29, 5, 8, 12, 7, 13, 30]
// let avg = make_avg(arr);
// console.log(avg)


// Write a function called count_zero() which will take a binary string
// (Binary string is a string which is consist of only 0 and 1)
// as parameter and count how many 0’s are there in that string.

// let binaryStr = "10010110001"
// function binaryCount(str){
//     let add = [];
//     for(i = 0; i < str.length; i++){
//         if(str[i] === "0"){
//             add.push(str[i])
//         }
//     }
//     return add.length;
// }
// let zeoCount = binaryCount(binaryStr);
// console.log(zeoCount);




// Write a function called odd_even() which takes an integer value
// and tells whether this value is even or odd.
// If even return Even. If odd return Odd



// let oddEven = 12;
// function odd_even(val){
//     if(val % 2 === 0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// }
// let showBool = odd_even(oddEven);
// console.log(showBool);


//Quiz

// for( var i = 0; i < 5; i++){
//     setTimeout(
//         function(){
//             console.log(i)
//         },100
//     );
// } 