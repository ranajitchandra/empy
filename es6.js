console.clear()
// variable let and const____________________

// const arr = ["hello", "hi"]
//     console.log(arr[1]=true)
//     console.log(...arr )

// object____________________________________

// const obj = { 
//     name: "John",
//     age: 25
// };
// let c = Object.keys(obj)
// c.push("roll")
// console.log(c)
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// console.log(Object.seal(obj)) // this function not allow to add new value but update existing value
// console.log(Object.freeze(obj)) // this function not allow to add new value and update existing value

// spread operator____________________________

// const arr2 = [1,2,3,4,5,6,7]
// console.log(8, ...arr2)


// const person = { 
//     name: "John",
//     age: 25
// };

// console.log(person)
// console.log({person, num:44})
// console.log({...person, num:44})




// function sum(a, b, c) {
//     return a + b + c;
//   }
//     let ar = [1,2,3]
//     // let ar = ["one","two","three"]
//     let num = sum(...ar)
//     console.log(typeof num)



// destructure________________________________

// const people2 = [1,2,3]
// const people = { 
//     name: "John",
//     age: 25
// };
//  let [num, num2, num3] = people2
//  let {name,age} = people
// console.log(num)


// variable swap destructure________________________________
// let a = 5;
// let b =10;
// console.log(a,b);
// [b,a]=[a,b];
// console.log(a,b)



// arrow function________________________________

// let arrowF = ()=>"Arrow Function" // no need to use 2nd bracket and it automatic return value, doesn't return

// let arrowF1 = ()=>{console.log("Arrow Function1")}

// let arrowF2 = a =>{console.log("Arrow Function2")}

// let arrowF3 = (a,b)=>{console.log("Arrow Function3")}

// console.log(arrowF())
// console.log(arrowF1())
// console.log(arrowF2())
// console.log(arrowF3())


// array value update with unique system_________________________________
// const numbers = [1,2,3,4,5,6,7,8,9]
// console.log(numbers, "main")
// let temp = [];
// for(i=0; i<numbers.length; i=i+1){
//     temp.push(numbers[i]+=3);
//     numbers[i]+=3;
//     numbers[i]+=5;
// }
// console.log(temp, "Temp")
// console.log(numbers, "main copy")




// map function_________________________________


const numbers2 =  ["Apple", "Banana", "Mango"];
const newArr = numbers2.map((value, index)=>{
    console.log(index)
    // console.log(j)
    return value
})
console.log(newArr)


