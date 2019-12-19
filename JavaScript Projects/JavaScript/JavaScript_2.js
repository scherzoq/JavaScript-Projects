//step 217
function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Email address must be entered");
      return false;
    }
  }