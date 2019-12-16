// No political commentary intended; for coding practice purposes only
function capitalize_function() {
    var lc_proclamation = "fake news!";
    var uc_proclamation = lc_proclamation.toUpperCase();
    document.getElementById("all_caps").innerHTML = uc_proclamation;
}

function search_function() {
    var sentence = "What is the position, in the sentence, of 42?";
    var search_position = sentence.search("42");
    document.getElementById("search_answer").innerHTML = search_position;
}