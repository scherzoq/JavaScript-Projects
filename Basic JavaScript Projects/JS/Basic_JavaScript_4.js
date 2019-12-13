var Book = {
    Author: "William Shakespeare",
    Title: "King Lear",
    Format: "Hardcover"
}
delete Book.Title;

function book_title() {
    document.getElementById("Dictionary").innerHTML = Book.Title;
}