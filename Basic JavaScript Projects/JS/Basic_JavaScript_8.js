//step 142
function full_sentence () {
    var part_1 = "You clicked to concatenate, ";
    var part_2 = "and concatenation has ";
    var part_3 = "come to pass!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

//step 144
function slice_sentence () {
    var sentence = "You clicked to slice";
    var sliced_part = sentence.slice(15, 20);
    document.getElementById("slice").innerHTML = sliced_part;
}

//step 147
function string_Method() {
    var x = 42;
    document.getElementById("number_to_string").innerHTML = x.toString();
}

//step 149
function precision_Method() {
    var y = 3.14159265358979323846;
    document.getElementById("ten_digits_of_pi").innerHTML = y.toPrecision(10);
}