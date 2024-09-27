class LibraryError extends Error {
  constructor(message) {
    super(message);
    this.name = "LibraryError";
  }
}

class BookAlreadyExistsError extends LibraryError {
  constructor() {
    super("Book with this ISBN already exists.");
  }
}

class BookNotFoundError extends LibraryError {
  constructor() {
    super("Book not found.");
  }
}

class BookAlreadyBorrowedError extends LibraryError {
  constructor() {
    super("Book is already borrowed.");
  }
}

class BookNotBorrowedError extends LibraryError {
  constructor() {
    super("Book was not borrowed.");
  }
}

module.exports = {
  LibraryError,
  BookAlreadyExistsError,
  BookNotFoundError,
  BookAlreadyBorrowedError,
  BookNotBorrowedError,
};
