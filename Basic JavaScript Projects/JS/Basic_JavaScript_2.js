function myFirstFunction() {
    var str_1 = "Blue skies";
    var result = str_1.fontcolor("blue");
    document.getElementById("blue_skies").innerHTML = result;
}

function mySecondFunction() {
    var str_2 = "smiling";
    str_2 += " at me";
    var result = str_2.fontcolor("blue");
    document.getElementById("concatenate").innerHTML = result;
}