function validateForm () {
    var x = document.forms["myForm"]["phone"].value;
    if (x == "") {
        alert("Phone number must be filled out");
        return false;
    }
}