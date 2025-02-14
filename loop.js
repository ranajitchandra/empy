console.clear();


// for(let i = 0; i <=10; i = i+1){
//     console.log("---",i);
//     if(i==5){
//         break;
//     }
//     console.log(i);
// }


// Write a loop 1 to 200. Use break to exit the loop once you find 100.

// let i = 0;

// while(i <=10){
//     console.log("-- ",i);
//     if(i==5){
//         break
//     }
//     console.log(i);
//     i++
// }

// let i = 0;
// while (i <= 3) {
//     console.log("--", i);
//     if (i++ === 2) continue; 
//     console.log(i);
// }

// let sum = 0;
// for(i=0; i<=100; i = i +1){
//     sum += i;
// }
// console.log(sum);


// let x = 0;
// let sum1 = 0;
// while(x<=6){
//     sum1 = sum1 + x;
//     if(sum1 >=16 ){
//         break;
//     }
//     console.log(sum1);
//     x++
// }
// console.log(sum1);


// for(i=1; i<=100; i = i + 1){
//     console.log(i)
//     if (i ** 2 == i ** 2){
//         break;
//     }
    
// }


// even number

// for(i=0; i<=100; i=i+1){
//     if(i % 2 ==0){
//         console.log(i);
//         if(i == 40) break;
//     }
// }



// for(i=55; i<=85; i = i+1){
//     console.log("-- ",i)
//     if(i % 2 == 1){
//         console.log(i)
//     }
// }


// for(i=55; i<=85; i++){
//     if(i % 2 ==1 && i % 5 == !0){
//         console.log(i)
//     }
    
// }



// let totalHours = 0;
// for(i=1; i<=60; i=i+1){
//     totalHours = i * 6;
// }
// console.log(totalHours);



// for(i=61; i<=100; i = i +1){
//     if(i % 2 == !0){
//         console.log(i);
//     }
// }

// for(i=78; i<=98; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }


//Display sum of all the odd numbers from 91 to 129.

// let sumOddNumber = 0;
// for(i=91; i<=129; i = i +1){
//     if(i % 2 == 1){
//         sumOddNumber += i;
//     }
// }
// console.log(sumOddNumber);



// Display sum of all the even numbers from 51 to 85.

// let sumEvenNumber = 0;
// for(i=51; i<=81; i++){
//     if(i % 2 == 0){
//         sumEvenNumber = sumEvenNumber + i;
//     }
// }
// console.log(sumEvenNumber);


// Generate a multiplication table for number 9

// let uNum = 9
// for(i = 0; i<=10; i++){
//     console.log(uNum * i);
// }



// Implement a countdown timer that counts down from 81 to 65.
// note: the setInterval function not work break

// let count = 81;
// const timer = setInterval(function() {
//   count--;
//   console.log(count);
//   if (count === 65) {
//     clearInterval(timer);
//     console.log("Time's up!");
//   }
// }, 1000);



        
// Loop through the countdown from 21 to 15

// let countdown = 21;

// while (countdown >= 15) {
//     let i = countdown; // Capture the current value in a block-scoped variable
//     setTimeout(function () {
//         console.log("count down", i);
//     }, (21 - i) * 1000);
//     countdown--;
// }
























