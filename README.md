# Library Management System

## Description
The Library Management System is a simple application that allows users to manage books in a library. Users can add, borrow, return, and remove books. The system includes search functionality and generates test reports.

## Features
- Add books to the library
- Borrow and return books
- Remove books from the library
- Search for books by title or authors
- View available books and all books in the library

## Technologies Used
- Node.js
- JavaScript
- Jest (for testing)

## Prerequisites
- [Node.js](https://nodejs.org/) (version 14.x or later)

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <your-repository-url>
   cd LibraryManagementSystemJS

2. **Install Dependencies: Navigate to the project directory and install the required packages:**:
   npm install

3. **Run the Application: You can run the application using the following command:**
   node index.js

4. **Run Tests: To run the unit tests and generate test reports, use the following command:**
   npm test
   Test reports will be generated in the test-reports directory.

## Folder Structure

LibraryManagementSystemJS
│
├── src
│   ├── Book.js
│   ├── Library.js
│   ├── LibraryError.js
│   ├── User.js
│   └── index.js
│
├── test
│   ├── Book.test.js
│   └── Library.test.js
│
├── test-reports
│   └── junit.xml
│
├── .gitignore
├── package.json
└── README.md

