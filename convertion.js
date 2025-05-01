
// Convert 

// function inchFeet(inch){
//     let feet = parseInt( inch / 12);
//     let inc = inch % 12;
//     let result = `${feet} Feet ${inc} inch`;
//     return result;
// }

// let manHeight = inchFeet(81)
// console.log(manHeight);



// leap year

function isLeapYear(year){
    if(year % 4 === 0 && year % 100 !==0){
        return true;
    }else if(year % 100 !== 0 && year % 400){
        return true;
    }else if( year % 400 === 0){
        return true;
    }else{
        return false;
    }
}

let isLipi = isLeapYear(2000);
console.log(isLipi);










