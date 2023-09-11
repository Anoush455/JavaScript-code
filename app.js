// chp user input & conditional statement

var city = prompt("Enter your city")
    if ("karachi"){
        alert("Welcome to city of light")
    }

    var gender = prompt("Enter your Gender")
    if ("Male"){
        alert("Good Morning Sir")
    }

    var gender = prompt("Enter your Gender")
    if ("Female"){
        alert ("Good Morning Ma'am")
    }

var colorofroadtrafficsignal= prompt("Traffic Signal Color")
if(colorofroadtrafficsignal == "red"){
    alert("Must Stop")
}
else if (colorofroadtrafficsignal == "yellow"){
    alert("Ready To Move")
}
else if (colorofroadtrafficsignal == "green"){
    alert("Move On")
}


var remainingfuelincar= prompt("in liters")
if(remainingfuelincar == "0.25"){
    alert("Please refill the fuel in your car")
}   


var a = 4;
if (++a=== 5){
alert("given condition for variable a is true");
}

var b =82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

var percantage = +prompt ("enter your percantage");
if (percantage >= 80 && percantage <= 100){
    alert("Grade A-one \n Excellent")}
else if (percantage >= 70 && percantage <= 80){
    alert("Grade A \n Good")
}
else if (percantage >= 60 && percantage <= 70){
    alert("Grade B \n You Need to improve")
}
else if (percantage <= 60){
    alert("Grade Fail \n Sorry")
}

var num01 = +prompt ("ranging from 1 to 10")
if ("secret number"){
    alert("If the user guesses the sane number, show Bingo correct answer")
}
if ("secret number"){
    alert("Close enough to the correct answer")
}

// Chapter 6 (Math Expression II)
x++;
++x;
x--;
var x = 50;
var y = x++;
var y = 50;
var z = --y;
var NewNum = --num;
var NewValue = oldVariable++;
var num = 5;
num++;
alert("num")

// Chapter 7 (Math Expression III)
var calculatedNum =2 + (2 * 6); 14.
var calculatedNum = 24.
calculatedNum = 24
calculatedNum = 18.
var cost = (2 + (2 * 4) + 10);
var units = (2 + 2) * 4 + 10;
var pressure = (4 / 2) *4;


// Chapter 8 (Concatenating Text Strings)
"22"
alert(message);
"333"
var part1 = "pakistan"
var part2 = "Zindabad"
alert(part1 + "" + part2)
var mystring = "Hello";
var mynumber = 42;
var result = myString + mynumber;
var string1 = "Hello"
var string2 = "World!"
var ConcatenatingString = string1 + string2;

// Chapter 9 (Prompts)
var firstName = prompt("Enter first name");
if (firstName !== null){
    alert("Hello," + firstName + "!");
}else{
    alert("you did not enter a name.");
}
var yourname = prompt("Enter your name");
var defaultvalue = "John";
var userinput = prompt("please enter your name:", defaultvalue);
if (userinput !== null){
    alert("Hello, " + userinput + "!");
}else{
    alert("you canceled the prompt.");
}
var message = "Please enter your email:";
var defaultResponse = "example@example.com";
var userinput = prompt(message, defaultResponse);
if (userinput !== null) {
    alert("you entered: " + userinput);
} else {
    alert("You canceled the prompt.");
}
var message = "please enter your favorite color:";
var defaultResponse = "Blue";
var userinput = prompt(message , defaultResponse);
if (userinput !== null){
    alert("your favorite color is: " + userinput);
} else {
    alert("You canceled the prompt");
}

// Chapter 10 (if statments)
var city = "karachi"
if (city === "karachi"){
    console.log("The city of lights")
}
if (x === y) {
    var z = prompt("Please enter the value of z:");
    console.log("The city of lights");
}
if ( x === y){
    var x = prompt("Please enter the value of z:");
}
var zipcode = "10010";
if(zipcode === "10010"){
    alert ("karachi");
} else{
    alert("Please write correct city");
}
var x = 1;
if (x === 1){
    x = 2;
}
console.log(x);
