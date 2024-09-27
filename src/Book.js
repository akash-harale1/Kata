class Book {
  constructor(isbn, title, author, publicationYear) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.isBorrowed = false;
  }

  borrowBook() {
    this.isBorrowed = true;
  }

  returnBook() {
    this.isBorrowed = false;
  }

  toString() {
    return `${this.title} by ${this.author} (${this.publicationYear})`;
  }
}

module.exports = Book;
