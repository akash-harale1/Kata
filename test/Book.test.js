const Book = require("../src/Book");

test("creates a book with correct details", () => {
  const book = new Book("123", "Effective Java", "Joshua Bloch", 2008);
  expect(book.title).toBe("Effective Java");
  expect(book.author).toBe("Joshua Bloch");
  expect(book.publicationYear).toBe(2008);
  expect(book.isBorrowed).toBe(false);
});

test("borrows and returns a book", () => {
  const book = new Book("123", "Effective Java", "Joshua Bloch", 2008);
  book.borrowBook();
  expect(book.isBorrowed).toBe(true);
  book.returnBook();
  expect(book.isBorrowed).toBe(false);
});
