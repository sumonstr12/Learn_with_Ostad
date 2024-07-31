
# Book Management System

## Overview

The Book Management System is a CLI-based application designed to help manage a collection of books. It allows a users to add, view, search, remove, lend, and return books. The system also tracks which books are lent out and to whom.

## Features

1. **Add Book**: Add new books to the collection.
2. **View Books**: View all books in the collection.
3. **Search Books**: Search for books by title or ISBN.
4. **Remove Book**: Remove books from the collection.
5. **Lend Book**: Lend books to borrowers.
6. **Return Book**: Return books that were lent out.
7. **View Lent Books**: View all books currently lent out and their borrowers.


## Usage

1. Open a terminal or command prompt.
2. Navigate to the directory where `book_management_system.py` is located.
3. Run the script using the command: `python book_management_system.py`.

## File Structure

The system uses a text file to store the book information. The default file path is set to `"S:\Learn_WIth_OStad\Books.txt"`. If this path does not exist on your system, you may need to change it to a valid path. **IMPORTANT**

## Code Explanation

### `Book` Class

- **Attributes**:
  - `title`: Title of the book.
  - `authors`: List of authors.
  - `isbn`: ISBN of the book.
  - `year`: Publishing year.
  - `price`: Price of the book.
  - `quantity`: Total quantity available.
  - `lent_quantity`: Quantity currently lent out.

- **Methods**:
  - `to_dict()`: Converts the book object to a dictionary.
  - `from_dict(data)`: Creates a book object from a dictionary.
  - `to_text()`: Converts the book object to a text format suitable for file storage.
  - `from_text(text)`: Creates a book object from a text string.

### `BookManagementSystem` Class

- **Attributes**:
  - `books`: List of book objects.
  - `filename`: Path to the file where books are stored.
  - `lent_books`: Dictionary to track lent books and borrowers.

- **Methods**:
  - `save_books()`: Saves all books to the file.
  - `load_books()`: Loads books from the file.
  - `add_book(title, authors, isbn, year, price, quantity)`: Adds a new book to the collection.
  - `view_books()`: Displays all books.
  - `search_books(term)`: Searches for books by title or ISBN.
  - `remove_book(term)`: Removes a book by title or ISBN.
  - `lend_book(term, borrower)`: Lends a book to a borrower.
  - `return_book(term, borrower)`: Returns a book from a borrower.
  - `view_lent_books()`: Displays all lent books and their borrowers.


## Notes

- Ensure the file path for storing books is valid on your system.
- Handle exceptions as necessary, especially for file operations and user inputs.

## Preference :

For this project,as a beginner,i took help from different source(Ostad Video tutorial,Youtube,Google)
and finally i made this CLI-Based application in Python.


---

This README provides a comprehensive overview of the Book Management System, including its features, installation, usage, and code structure. Feel free to customize it further based on your specific needs.


## About me :

```
Name : Sumon Roy
```
### educational qualification :
```
Computer Science and Engineering Discipline,
Khulna University.
Khulna.
```
### Social Link :

1. `Facebook` [Sumon Roy](https://www.facebook.com/sumonroysnr/)
2. `Linkedin` [Sumon Chandra Barman](https://www.linkedin.com/in/sumon-str/)