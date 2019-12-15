//step 130
var x = 5;

function add_one() {
    var y = 5;
    console.log(y + 1);
}

function add_two() {
    console.log(y+ 2);
}

//step 133
function get_time(){
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    } else {
        document.getElementById("greeting").innerHTML = "How are you this evening?";
    }
}

//step 134
function positive_check() {
    if (document.getElementById("number").value > 0) {
        document.getElementById("positive").innerHTML = "You are positively excellent!"
    }
}

//step 136
function number_compare () {
    if (document.getElementById("first_number").value > document.getElementById("second_number").value) {
        compare_statement = "The first number is larger than the second number."
    } else {
        compare_statement = "The first number is smaller than or equal to the second number."
    }
    document.getElementById("compare_text").innerHTML = compare_statement;
}