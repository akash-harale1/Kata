const {
  BookAlreadyExistsError,
  BookNotFoundError,
  BookAlreadyBorrowedError,
  BookNotBorrowedError,
} = require("./LibraryError");

class Library {
  constructor() {
    this.books = new Map(); // Ensure books is initialized here
  }

  addBook(book) {
    if (!this.books.has(book.isbn)) {
      this.books.set(book.isbn, book);
    } else {
      throw new BookAlreadyExistsError();
    }
  }

  borrowBook(isbn) {
    if (this.books.has(isbn)) {
      const book = this.books.get(isbn);
      if (!book.isBorrowed) {
        book.borrowBook();
      } else {
        throw new BookAlreadyBorrowedError();
      }
    } else {
      throw new BookNotFoundError();
    }
  }

  returnBook(isbn) {
    if (this.books.has(isbn)) {
      const book = this.books.get(isbn);
      if (book.isBorrowed) {
        book.returnBook();
      } else {
        throw new BookNotBorrowedError();
      }
    } else {
      throw new BookNotFoundError();
    }
  }

  viewAvailableBooks() {
    return Array.from(this.books.values()).filter((book) => !book.isBorrowed);
  }

  viewAllBooks() {
    return Array.from(this.books.values());
  }

  searchBooks(query) {
    const lowerCaseQuery = query.toLowerCase();
    return Array.from(this.books.values()).filter(
      (book) =>
        book.title.toLowerCase().includes(lowerCaseQuery) ||
        book.author.toLowerCase().includes(lowerCaseQuery)
    );
  }
  removeBook(isbn) {
    if (this.books.has(isbn)) {
      this.books.delete(isbn);
    } else {
      throw new BookNotFoundError();
    }
  }
}

module.exports = Library;
