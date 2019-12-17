function elevator_function () {
    var text = "";
    for (i = 1; i < 20; i++) {
        if (i == 13) {continue;}
        if (i == 16) {break;}
        text += "You are on floor " + i + "<br>";
    }
    text += "Arrived.";
    document.getElementById("floor").innerHTML = text;
}