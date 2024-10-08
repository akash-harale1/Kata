const Book = require("../src/Book");
const Library = require("../src/Library");
const {
    BookNotFoundError,
    BookAlreadyExistsError,
    BookAlreadyBorrowedError,
    BookNotBorrowedError
} = require('../src/LibraryError');

test("add a book to the library", () => {
  const library = new Library();
  const book = new Book("123", "Effective Java", "Joshua Bloch", 2008);
  library.addBook(book);
  expect(library.viewAvailableBooks()).toHaveLength(1);
});

test("add duplicate book", () => {
  const library = new Library();
  const book1 = new Book("123", "Effective Java", "Joshua Bloch", 2008);
  const book2 = new Book("123", "Clean Code", "Robert Martin", 2009);
  library.addBook(book1);
  expect(() => library.addBook(book2)).toThrow(
    "Book with this ISBN already exists."
  );
});

test("borrow a book", () => {
  const library = new Library();
  const book = new Book("123", "Effective Java", "Joshua Bloch", 2008);
  library.addBook(book);
  library.borrowBook("123");
  expect(book.isBorrowed).toBe(true);
});

test("borrow an already borrowed book", () => {
  const library = new Library();
  const book = new Book("123", "Effective Java", "Joshua Bloch", 2008);
  library.addBook(book);
  library.borrowBook("123");
  expect(() => library.borrowBook("123")).toThrow("Book is already borrowed.");
});

test("return a borrowed book", () => {
  const library = new Library();
  const book = new Book("123", "Effective Java", "Joshua Bloch", 2008);
  library.addBook(book);
  library.borrowBook("123");
  library.returnBook("123");
  expect(book.isBorrowed).toBe(false);
});

test("view available books", () => {
  const library = new Library();
  const book1 = new Book("123", "Effective Java", "Joshua Bloch", 2008);
  const book2 = new Book("456", "Clean Code", "Robert Martin", 2009);
  library.addBook(book1);
  library.addBook(book2);
  library.borrowBook("123");
  expect(library.viewAvailableBooks()).toHaveLength(1);
});

test("view all books", () => {
  const library = new Library();
  const book1 = new Book("123", "Effective Java", "Joshua Bloch", 2008);
  const book2 = new Book("456", "Clean Code", "Robert Martin", 2009);
  library.addBook(book1);
  library.addBook(book2);
  expect(library.viewAllBooks()).toHaveLength(2);
});

test("search for books by title", () => {
  const library = new Library();
  const book1 = new Book("123", "Effective Java", "Joshua Bloch", 2008);
  const book2 = new Book("456", "Clean Code", "Robert Martin", 2009);
  library.addBook(book1);
  library.addBook(book2);
  expect(library.searchBooks("Effective")).toHaveLength(1);
  expect(library.searchBooks("Clean")).toHaveLength(1);
});

test("search for books by author", () => {
  const library = new Library();
  const book1 = new Book("123", "Effective Java", "Joshua Bloch", 2008);
  const book2 = new Book("456", "Clean Code", "Robert Martin", 2009);
  library.addBook(book1);
  library.addBook(book2);
  expect(library.searchBooks("Joshua")).toHaveLength(1);
  expect(library.searchBooks("Robert")).toHaveLength(1);
});

test("search for non-existent books", () => {
  const library = new Library();
  const book1 = new Book("123", "Effective Java", "Joshua Bloch", 2008);
  library.addBook(book1);
  expect(library.searchBooks("JavaScript")).toHaveLength(0);
});

test("remove a book from the library", () => {
  const library = new Library();
  const book = new Book("123", "Effective Java", "Joshua Bloch", 2008);
  library.addBook(book);
  library.removeBook("123");
  expect(library.viewAllBooks()).toHaveLength(0);
});

test("remove a non-existent book", () => {
  const library = new Library();
  expect(() => library.removeBook("999")).toThrow(BookNotFoundError);
});
