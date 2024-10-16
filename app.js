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
    console.log(`${"=".repeat(20)}`);
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(`Book ${i + 1}:\nTitle: ${myLibrary[i].title}\nYear Published: ${myLibrary[i].year}`);
        console.log(`${"=".repeat(20)}`);
    }
}

const book1 = new Book("firstbook", "1997");
const book2 = new Book("secondbook", "1998");
addBookToLibrary(book1);
addBookToLibrary(book2);

displayLibrary();