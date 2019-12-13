window.alert(Math.random() * 100);

document.write("Practice for increment and decrement operators:" + "<br>");
var x = 5;
document.write(x + "<br>");
x++;
document.write(x + "<br>");
x--;
document.write(x + "<br><br>");

document.write("Practice for Math object method:" + "<br>");
document.write(Math.floor(8.9) + "<br>");

function addition() {
    var sum = 2 + 2;
    document.getElementById("Add").innerHTML = "2 + 2 = " + sum;
}

function subtraction() {
    var diff = 4 - 2;
    document.getElementById("Subtract").innerHTML = "4 - 2 = " + diff;
}

function multiplication() {
    var product = 3 * 3;
    document.getElementById("Multiply").innerHTML = "3 * 3 = " + product;
}

function division() {
    var quotient = 9 / 3;
    document.getElementById("Divide").innerHTML = "9 / 3 = " + quotient;
}

function more_Math() {
    var result = (2 + 2) * 3 / 2
    document.getElementById("MoreMath").innerHTML = "(2 + 2) * 3 / 2 = " + result;
}

function modulus_Operator() {
    var remainder = 5 % 2;
    document.getElementById("Modulo").innerHTML = "The remainder of 5 divided by 2 = " + remainder;
}

function negation_Operator() {
    var neg = 10;
    document.getElementById("Negate").innerHTML = "The negative form of 10 = " + -neg;
}