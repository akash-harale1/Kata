class Library {
  constructor() {
    this.books = new Map();
  }

  // Add a new book to the library
  addBook(book) {
    if (!this.books.has(book.isbn)) {
      this.books.set(book.isbn, book);
    } else {
      throw new Error("Book with this ISBN already exists.");
    }
  }

  // Borrow a book from the library
  borrowBook(isbn) {
    if (this.books.has(isbn)) {
      const book = this.books.get(isbn);
      if (!book.isBorrowed) {
        book.borrowBook();
      } else {
        throw new Error("Book is already borrowed.");
      }
    } else {
      throw new Error("Book not found.");
    }
  }

  // Return a borrowed book
  returnBook(isbn) {
    if (this.books.has(isbn)) {
      const book = this.books.get(isbn);
      if (book.isBorrowed) {
        book.returnBook();
      } else {
        throw new Error("Book was not borrowed.");
      }
    } else {
      throw new Error("Book not found.");
    }
  }

  // View all available books
  viewAvailableBooks() {
    return Array.from(this.books.values()).filter((book) => !book.isBorrowed);
  }
}

module.exports = Library;
