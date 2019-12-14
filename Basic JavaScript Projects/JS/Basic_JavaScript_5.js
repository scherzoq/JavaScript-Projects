document.write("typeof practice: " + typeof 4 + "<br>");

document.write("Boolean logic practice: " + (4 > 3) + " ");
document.write((3 > 4) + "<br>");

document.write("type coercion practice: ");
document.write((5 + "5") + "<br>");

document.write("double equal sign practice: ");
document.write((3 == "3") + " ");
document.write((3 == 4) + "<br>");

document.write("triple equal sign practice: ");
document.write((3 === 3) + " " );
document.write((3 === "sky") + " ");
document.write((3 === "3") + " ");
document.write((3 === 4) + "<br>");

document.write("logical operator practice: ");
document.write((3 > 2 && 4 > 3) + " ");
document.write((3 > 2 && 3 > 4) + " ");
document.write((3 > 2 || 3 > 4) + " ");
document.write((2 > 3 || 3 > 4) + "<br>");

console.log(2 + 2);

function infinity_generator() {
    document.getElementById("infinity").innerHTML = 2E310;
    document.getElementById("neg_infinity").innerHTML = -2E310;
}

function not_Function() {
    document.getElementById("Not_1").innerHTML = !(2 > 3);
    document.getElementById("Not_2").innerHTML = !(3 > 2);
}