const myLibrary = [];

class Book {
    constructor(title, year) {
        this.title = title;
        this.year = year;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


function displayLibrary() {
    console.table(myLibrary);
}

const book1 = new Book("firstbook", "1997");
const book2 = new Book("secondbook", "1998");
addBookToLibrary(book1);
addBookToLibrary(book2);

displayLibrary();

const dialog = document.querySelector("dialog");
const showDialog = document.getElementById("showDialog");
const outputBox = document.querySelector("output");
const confirmBtn = document.getElementById("confirmBtn");

const bookTitle = document.getElementById("title");
const bookYear = document.getElementById("year");

// "show the dialog" button opens the dialog modally
showDialog.addEventListener("click", () => {
    dialog.querySelector("form").reset();   // resets the form whenever it is opened
    dialog.showModal();
})


// cancel button closes the dialog 
dialog.addEventListener("close", (e) => {
    outputBox.value = dialog.returnValue === "cancel" ? "No Return Value." : `ReturnValue: ${dialog.returnValue}.`
})


// Prevent the "confirm" button from submitting a fake form
confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close(bookTitle.value + " " + bookYear.value);
})