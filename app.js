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

    // create and append delete cell
    const deleteCell = document.createElement("td");
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
        const parentRow = delBtn.closest("tr");
        parentRow.remove();
    })
    deleteCell.appendChild(delBtn);
    row.appendChild(deleteCell);

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
const confirmBtn = document.getElementById("submit");
const form = document.querySelector("form");

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
form.addEventListener("submit", (e) => {
    e.preventDefault();
    dialog.close();
    
    console.log(bookTitle.value, bookYear.value)
    
    let newBook = new Book(bookTitle.value, bookYear.value);
    addBookToLibrary(newBook);
})