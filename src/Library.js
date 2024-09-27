const {
  BookAlreadyExistsError,
  BookNotFoundError,
  BookAlreadyBorrowedError,
  BookNotBorrowedError,
} = require("./LibraryError");

class Library {
  // ...existing methods remain unchanged...

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
}

module.exports = Library;
