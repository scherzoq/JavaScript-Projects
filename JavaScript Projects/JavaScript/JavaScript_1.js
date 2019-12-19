//step 203
function Novel_Function() {
    var Novel_Output;
    var Novels = document.getElementById("Novel_Input").value;
    var Novel_String_1 = "Once upon a time, ";
    var Novel_String_2 = " The end."
    switch(Novels) {
        case "Literary":
            Novel_Output = "It was the best of times, it was the worst of times." + Novel_String_2;
        break;
        case "Romance":
            Novel_Output = Novel_String_1 + " a lady named Elizabeth met a gentleman named Darcy, and was throughly put off by him." + Novel_String_2;
        break;
        case "Mystery":
            Novel_Output = Novel_String_1 + " a man was smoking a pipe in his home on Baker Street." + Novel_String_2;
        break;
        case "Fantasy":
            Novel_Output = Novel_String_1 + " a widow gave birth to three baby dragons." + Novel_String_2;
        break;
        case "Historical":
            Novel_Output = Novel_String_1 + " Napoleon invaded Russia." + Novel_String_2;
        break;
        default:
            Novel_Output = Novel_String_1 + "there was a genre that did not appear in a list." + Novel_String_2;
    }
    document.getElementById("Output").innerHTML = Novel_Output;
}


//step 212
function flex_function() {
    var x = document.getElementsByClassName("flex");
    for (i = 0; i < x.length; i++) {
        if (i % 2 == 1) {continue;}
        x[i].innerHTML = "F l e x i b l e";
    }
}

//steps 215-216
var b = document.getElementById("myCanvas");
var ctx = b.getContext("2d");
ctx.beginPath();
ctx.arc(550, 50, 40, 0, 2 * Math.PI);
ctx.arc(550, 140, 40, 0, 2 * Math.PI);
ctx.arc(550, 230, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 500, 250);

var d = document.getElementById("myCanvas");
var ctx = d.getContext("2d");
ctx.font = "22px Arial";
ctx.strokeText("One Fish, Two Fish, Red Fish, Blue Fish", 20, 50);