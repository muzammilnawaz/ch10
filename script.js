let city = prompt("Enter your city name:");

if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights!");
} else {
    alert("Welcome!");
}

let gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
} else {
    alert("Good Morning!");
}

let signalColor = prompt("Enter the color of the traffic signal (Red/Yellow/Green):");

if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    alert("Move now");
} else {
    alert("Invalid color!");
}

let fuel = parseFloat(prompt("Enter remaining fuel in litres:"));

if (fuel <= 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("You have enough fuel.");
}

let a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
}

let b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

let c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
    } 

let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

function calculateResult() {
    let subject1 = parseFloat(document.getElementById('subject1').value);
    let subject2 = parseFloat(document.getElementById('subject2').value);
    let subject3 = parseFloat(document.getElementById('subject3').value);
    let totalMarks = parseFloat(document.getElementById('totalMarks').value);


    let marksObtained = subject1 + subject2 + subject3;
    let percentage = (marksObtained / totalMarks) * 100;

    let grade = '';
    let remarks = '';
    
    if (percentage >= 80) {
        grade = 'A-one';
        remarks = 'Excellent';
    } else if (percentage >= 70) {
        grade = 'A';
        remarks = 'Good';
    } else if (percentage >= 60) {
        grade = 'B';
        remarks = 'You need to improve';
    } else {
        grade = 'Fail';
        remarks = 'Sorry';
    }

    document.getElementById('result').innerHTML = 
    `Total marks: ${totalMarks}<br>
    Marks obtained: ${marksObtained}<br>
    Percentage: ${percentage.toFixed(2)}%<br>
    Grade: ${grade}<br>
    Remarks: ${remarks}`;
}

let secretNumber = 7;  


let guess = parseFloat(prompt("Guess the secret number (between 1 and 10):"));

if (guess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (guess + 1 === secretNumber) {
    alert("Close enough to the correct answer.");
} else {
    alert("Try again!");
}

let number = parseFloat(prompt("Enter a number:"));

if (number % 3 === 0) {
    alert("The number is divisible by 3.");
} else {
    alert("The number is not divisible by 3.");
}

let num = parseInt(prompt("Enter a number:"));

if (num % 2 === 0) {
    alert("The number is even.");
} else {
    alert("The number is odd.");
}

let temperature = parseFloat(prompt("Enter the temperature:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's really cold outside!");
}

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Cannot divide by zero!";
    }
} else if (operation === "%") {
    result = num1 % num2;
} else {
    result = "Invalid operation!";
}

alert("The result is: " + result);