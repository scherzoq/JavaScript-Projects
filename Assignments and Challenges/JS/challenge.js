var a = "This is a string assigned to an variable";
window.alert(a);

var b = "This is a concatenated string " + "assigned to a variable. ";
document.write(b);

document.write(AddThreeNumbers(2, 2, 4) + " is the sum of 2, 2, and 4. ");

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