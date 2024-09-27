const Book = require("./src/Book");
const Library = require("./src/Library");

const library = new Library();

// Adding books
const book1 = new Book("123", "Effective Java", "Joshua Bloch", 2008);
const book2 = new Book("456", "Clean Code", "Robert Martin", 2009);

library.addBook(book1);
library.addBook(book2);

// Borrowing a book
try {
  library.borrowBook("123");
  console.log(`${book1.title} has been borrowed.`);
} catch (error) {
  console.error(error.message);
}

// Viewing available books
console.log(
  "Available books:",
  library.viewAvailableBooks().map((book) => book.toString())
);

// Returning a book
try {
  library.returnBook("123");
  console.log(`${book1.title} has been returned.`);
} catch (error) {
  console.error(error.message);
}

// Final available books
console.log(
  "Final available books:",
  library.viewAvailableBooks().map((book) => book.toString())
);
