function elevator_function () {
    var text = "";
    for (i = 1; i < 20; i++) {
        if (i == 13) {continue;} // skips 13, since no 13th floor (JavaScript course, step 201)
        if (i == 16) {break;}
        text += "You are on floor " + i + "<br>";
    }
    text += "Arrived.";
    document.getElementById("floor").innerHTML = text;
}