function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function musical_piece(Title, Composer, Year, Instruments) {
    this.Title = Title;
    this.Composer = Composer;
    this.Year = Year;
    this.Instruments = Instruments;
}
var Kreutzer = new musical_piece("Kreutzer Sonata", "Ludwig van Beethoven", 1803, "violin and piano");
function piece_Function() {
    document.getElementById("New_and_This").innerHTML = 
    "The " + Kreutzer.Title + " for " + Kreutzer.Instruments + " by " + Kreutzer.Composer + 
    " was premiered in " + Kreutzer.Year
}

function add_Function() {
    document.getElementById("Nested_Function").innerHTML = add()
    function add() {
        var starting_number = 2;
        function plus_two() {starting_number += 2};
        plus_two();
        return starting_number;
    }
}
