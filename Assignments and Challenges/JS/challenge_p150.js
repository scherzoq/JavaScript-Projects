function toFixed_function() {
    var x = 3.14159265358979323846;
    document.getElementById("pi_five_decimals").innerHTML = x.toFixed(5);
}

function valueOf_function() {
    var str = "valueOf returns the primitive value of a string object";
    document.getElementById("valueOf_example").innerHTML = str.valueOf();
}