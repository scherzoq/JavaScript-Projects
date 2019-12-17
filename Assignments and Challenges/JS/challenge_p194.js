function greeting_function () {
    name_text = document.getElementById("name").value;
    document.getElementById("greeting").innerHTML = myFunction(name_text);
    function myFunction(name) {
        return "Hello " + name;
    }
}