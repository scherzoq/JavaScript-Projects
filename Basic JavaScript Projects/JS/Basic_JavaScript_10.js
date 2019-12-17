//step 174
function Call_Loop() {
    var digit = "";
    var x = 1;
    while (x < 10000) {
        digit += "<br>" + x;
        x *= 2;
    }
    document.getElementById("Loop").innerHTML = digit;
}

//step 177
var Instruments = ["Piano", "Violin", "Viola", "Cello", "Double Bass"];
var Content = ""
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//step 181
function array_Function() {
    var Trout_Quintet = [];
    Trout_Quintet[0] = "piano";
    Trout_Quintet[1] = "violin";
    Trout_Quintet[2] = "viola";
    Trout_Quintet[3] = "cello";
    Trout_Quintet[4] = "double bass";
    document.getElementById("Array").innerHTML = "Two of the five instruments used in Schubert's Trout Quintet are " + Trout_Quintet[0] + " and " + Trout_Quintet[4] + ".";

}

//step 189
function constant_function() {
    const Lib_Book = {title: "Blood Meridian", author: "Cormac McCarthy", status: "on shelf"};
    Lib_Book.status = "checked out";
    Lib_Book.format = "hardcover";
    document.getElementById("Constant").innerHTML = Lib_Book.title + " by " + Lib_Book.author + " in " + Lib_Book.format + " format is " + Lib_Book.status;
}

//step 191
function let_function() {
    var x = 42;
    document.write(x + "<br>");
    {
        let x = 43;
        document.write(x  + "<br>");
    }
    document.write(x);
}

//step 197
function lib_book_function() {
    let lib_book = {
        title: "The Stone Raft",
        author: "Jose Saramago",
        year: "1994",
        format: "paperback",
        status: "on shelf",
        description: function() {
            return this.title + " by " + this.author + ", published in " + this.year + ", in " + this.format + " format, is " + this.status;
        }
    };
    document.getElementById("lib_book_object").innerHTML = lib_book.description();
}