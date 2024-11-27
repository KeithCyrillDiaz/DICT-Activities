
// Create a class called Book with the following properties:
// Title (string)
// Author (string)
// Genre (string)
// Availability (boolean)
// Implement methods in the Book class:
// borrowBook(): This method should set the availability of the book to false if the
// book is available to borrow.
// returnBook(): This method should set the availability of the book to true if the
// book is returned.
// displayInfo(): This method should display the information of the book (title,
// author, genre, availability).


class Book {
    
    constructor(title, author, genre, availability = true) {
        this.title = title; 
        this.author = author;
        this.genre = genre;
        this.availability = availability;
      }

    borrowBook () {
        console.log(`\nBorrowing Book...`);
        if(!this.availability) {
            console.log(`Someone already borrowed ${this.title}`);
            return;
        }

        this.availability = false;
        console.log(`${this.title} has been borrowed`);
        return
    }

    returnBook() {
        console.log(`\nReturning Book...`)
        if(this.availability) {
            console.log(`${this.title} is available and not been borrowed`);
            return;
        }

        this.availability = true;
        console.log(`${this.title} is returned`);
    }

    displayInfo () {
        console.log(`\nDisplaying '${this.title}'...\n`);
        Object.keys(this).forEach((key) => {
            console.log(`${key}: ${this[key]}`);
        })

        console.log(JSON.stringify(this, null, 2));
    }
}

// Create a class called Library that will act as the main system. The Library class should
// have the following properties and methods:
// Property: books (array) - to store the list of books in the library.
// Method: addBook(title, author, genre): This method should create a new
// Book object and add it to the books array.
// Method: searchBook(title): This method should search for a book by title and
// display its information if found.
// Method: displayBooks(): This method should display the list of all available
// books in the library.

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, genre) {
        if(!title || !author || !genre) {
            console.log('Invalid parameters');
            return;
        }

        const newBook = new Book(title, author, genre);
        this.books.push(newBook);
        
        console.log(` Book titled ${title} has been stored in the library`);
        return;
    }

    searchBook(title) {
        if(!title) {
            console.log('Invalid parameters');
            return;
        }

        const searchedBook = this.books.find((book) => book.title.toLowerCase() === title.toLowerCase());

        if(!searchedBook ) {
            console.log(`No book titled "${title}" is found in the library.`);
            return;
        }

        searchedBook.displayInfo();
        return searchedBook;
    }

    displayBooks () {
        const availableBooks = this.books.filter((book) => book.availability === true);
        availableBooks.forEach((book) => book.displayInfo());
    }
}



// Create an instance of the Library class.
// Use the addBook() method to add several books to the library.
// Use the searchBook() method to search for a specific book and display its
// information.
// Use the displayBooks() method to display the list of available books in the
// library.

const library = new Library();

library.addBook("Circle", 'Madeline Miller', 'Fantasy');
library.addBook("The Buried Giant", 'Kazuo Ishiguro', 'Fantasy');

library.addBook("A Confederacy of Dunces", 'John Kennedy Toole', 'Comedy');
library.addBook("Bossypants", 'Tina Fey', 'Comedy');

library.addBook("The Da Vinci Code", 'Dan Brown', 'Mystery');
library.addBook("Gone Girl", 'Gillian Flynn', 'Mystery');

console.log(`\nSearch Book titled: Gone Girl`);
const foundBook = library.searchBook('Gone Girl');


console.log(`\nDisplaying all available books`);
library.displayBooks();

if(foundBook) {
    foundBook.borrowBook();
    foundBook.returnBook();
} else {
    console.log("The book you searched is not found in the library");
}

