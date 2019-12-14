//1. ATTEMPT TO DISPLAY VALUE OF RESERVED WORD
//var break = 5;
//document.write(x);

//2. OJBECT CONSTRUCTOR FUNCTION WITH EXAMPLE
function library_book(Title, Author, Year, On_Shelf) {
    this.Title = Title;
    this.Author = Author;
    this.Year = Year;
    this.On_Shelf = On_Shelf;
}

var Golden_Compass = new library_book("The Golden Compass", "Philip Pullman", 1995, true);

function example_library_book() {
    On_Shelf_text = (Golden_Compass.On_Shelf == true) ? "Book is on shelf.":"Book has been checked out.";
    document.getElementById("golden_compass_info").innerHTML = 
    Golden_Compass.Title + " by " + Golden_Compass.Author + ", published " +
    Golden_Compass.Year + ". " + On_Shelf_text;
}