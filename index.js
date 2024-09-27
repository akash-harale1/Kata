const Book = require("./src/Book");
const Library = require("./src/Library");

const library = new Library();

// Adding books
const book1 = new Book("123", "Effective Java", "Joshua Bloch", 2008);
const book2 = new Book("456", "Clean Code", "Robert Martin", 2009);

library.addBook(book1);
library.addBook(book2);

console.log(
  "All books in the library:",
  library.viewAllBooks().map((book) => book.toString())
);
// Searching for books
const searchResults = library.searchBooks("effective");
console.log(
  'Search results for "effective":',
  searchResults.map((book) => book.toString())
);

// Removing a book
try {
  library.removeBook("456");
  console.log("Book with ISBN 456 has been removed.");
} catch (error) {
  console.error(error.message);
}

// Final available books after removal
console.log(
  "Available books after removal:",
  library.viewAvailableBooks().map((book) => book.toString())
);
