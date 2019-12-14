var a = "This is a string assigned to an variable";
window.alert(a);

var b = "This is a concatenated string " + "assigned to a variable." + "<br>";
document.write(b);

document.write(AddThreeNumbers(2, 2, 4) + " is the sum of 2, 2, and 4." + "<br>");

console.log(8 > 9);

function MouseOverFunction() {
    window.alert("You moved your mouse over the paragraph!")
}

function AddThreeNumbers(a, b, c) {
    return a + b + c;
}

function green() {
    var x = document.getElementById("green_text");
    x.style.color = "green";
}

function not_a_number() {
    document.getElementById("NaN_test_1").innerHTML = 0/0;
    document.getElementById("NaN_test_2").innerHTML = isNaN(4);
    document.getElementById("NaN_test_3").innerHTML = isNaN("sky");
}