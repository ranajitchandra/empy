var userAmount = parseInt( prompt("for buying Burger more then 500 tk"))

if(userAmount >= 500){
    document.write("<h1>You got Coke with burger</h1>");
}


var height = parseFloat( prompt("Enter your Height by unit Foot and inch"))
var weight = parseFloat( prompt("Enter You Weight"))

var height = (height * 0.3048 ) * (height * 0.3048 );
var bmi =  weight / height;

if(bmi <= 18.5){
    document.write("<h1>you are underweight.</h1>")
}
else if(bmi >18.5 && bmi <24.9){
    document.write("<h1>you are normal</h1>")
}
else if(bmi >25 && bmi <29.9){
    document.write("<h1>you are overweight.</h1>")
}
else{
    document.write("<h1>you are obese.</h1>")
}


var num = parseInt(prompt("Enter your Exam Result number"));

if(num >= 90 && num <= 100){
    document.write("<h1>A grade</h1>");
}
else if(num >= 80 && num  < 90){
    document.write("<h1>B grade</h1>");
}
else if(num >=70 && num < 80){
    document.write("<h1>C grade</h1>");
}
else if(num >= 60 && num < 70){
    document.write("<h1>D grade</h1>");
}
else{
    document.write("<h1>oh! You Are Fail</h1>")
}



var num1 = parseInt(prompt("First Number"));
var num2 = parseInt(prompt("Second Number"));

num > num2 ? document.write(`<h1>--${num1*num1}</h1>`) : document.write(`<h1>${num1+num2}</h1>`);