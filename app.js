const myLibrary = [];
const table = document.querySelector("table");
const tBody = document.querySelector("table tbody")


class Book {
    constructor(title, year) {
        this.title = title;
        this.year = year;
    }
}

function addBookToLibrary(book) {
    // Add the book into the library array first 
    myLibrary.push(book);
   
    // create new row 
    const row = document.createElement("tr");

    // create and append title cell
    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    // create and append year cell
    const yearCell = document.createElement("td");
    yearCell.textContent = book.year;
    row.appendChild(yearCell);

    // append the row to the table body
    tBody.appendChild(row);
    
}




const book1 = new Book("Moby Dick", "1997");
const book2 = new Book("Secret Book", "1998");
addBookToLibrary(book1);
addBookToLibrary(book2);


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
    outputBox.innerHTML = dialog.returnValue === "cancel" ? "" : `Book added: <br> Title: ${bookTitle.value} Year: ${bookYear.value}.`
})


// Prevent the "confirm" button from submitting a fake form
confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
    
    let newBook = new Book(bookTitle.value, bookYear.value);
    addBookToLibrary(newBook);
})