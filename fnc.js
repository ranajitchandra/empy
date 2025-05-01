



// const person = {
//    name: "Ronojit",
//    age: 25,
//    greet: function() {
//      console.log(`Hello, my name is ${this.name}`);
//    }
//  };
//  person.greet();
 


//  function sayHello({name,age,greet}) {
//    console.log(`Hello, ${name}!`);
//    console.log(`Hello, ${age}!`);
//    console.log(greet(name));
//  }
//  sayHello({
//    name: "Ronojitkkkk",
//    age: 25,
//    greet: function(name) {
//       console.log(`Hello, my name is ${name}`);
//    }
//  });
 








// // my won userState function

// function createState(initialValue) {
//   let value = initialValue;

//   // A function to get the current value of the state
//   const getValue = () => value;

//   // A function to update the value of the state
//   const setValue = (newValue) => {
//     value = newValue;
//     // Re-render or trigger any side effects here if needed (in a real React-like app)
//   };

//   return [getValue, setValue];
// }
// // Create a state with an initial value of 0
// const [getCount, setCount] = createState(0);

// console.log(getCount()); // Outputs: 0

// // Update the state
// setCount(1);

// console.log(getCount()); // Outputs: 1

// //--------------------------------------------------------------

// function createState(initialValue) {
//   let value = initialValue;

//   // Return an object with get and set methods
//   return {
//     getValue: () => value,
//     setValue: (newValue) => {
//       value = newValue;
//       // You can trigger re-renders or other side effects here if needed
//     }
//   };
// }

// // Create a state with an initial value of 0
// const counterState = createState(0);

// console.log(counterState.getValue()); // Outputs: 0

// // Update the state
// counterState.setValue(1);

// console.log(counterState.getValue()); // Outputs: 1





// problem task

// const obj ={
//   a:1,
//   b:{
//     c:2
//   },
//   c:{
//     d:{
//       e:{
//         f:3
//       }
//     }
//   }
// }
// for(let item in obj){
//   if(typeof obj[item] == "object"){
//     for(let item2 in obj[item]){
//       if(typeof obj[item][item2] == "object"){
//         for(let item3 in obj[item][item2]){
//           if(typeof obj[item][item2][item3] == "object"){
//             for(let item4 in obj[item][item2][item3]){
//               console.log( obj[item][item2][item3][item4])
//             }
//           }else{
//             console.log(obj[item][item2][item3])
//           }
//         }
//       }else{
//         console.log(obj[item][item2])
//       }
//     }
//   }else{
//     console.log(obj[item])
//   }
// }



function getData(){
  
  const xhr = new XMLHttpRequest();
  xhr.open("get", "https://jsonplaceholder.typicode.com/users")
  xhr.onload=()=>{
    const data = xhr.response
    console.log(data)
  }
  xhr.send()// this send method send data to server
  xhr.send()// this send method send data to server
}
getData()























