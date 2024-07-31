from typing import List

class Book:
    # constructor
    def __init__(self, title: str, authors: List[str], isbn: str, year: int, price: float, quantity: int):
        self.title = title
        self.authors = authors
        self.isbn = isbn
        self.year = year
        self.price = price
        self.quantity = quantity
        self.lent_quantity = 0

    def to_dict(self):
        return {
            'title': self.title,
            'authors': self.authors,
            'isbn': self.isbn,
            'year': self.year,
            'price': self.price,
            'quantity': self.quantity,
            'lent_quantity': self.lent_quantity
        }

    @classmethod
    def from_dict(cls, data):
        return cls(
            title=data['title'],
            authors=data['authors'],
            isbn=data['isbn'],
            year=data['year'],
            price=data['price'],
            quantity=data['quantity']
        )

    def to_text(self):
        return f"{self.title}|{(self.authors)}|{self.isbn}|{self.year}|{self.price}|{self.quantity}|{self.lent_quantity}"

    @classmethod
    def from_text(cls, text):
        parts = text.strip().split('|')
        title, authors, isbn, year, price, quantity, lent_quantity = parts
        book = cls(title, authors.split(','), isbn, int(year), float(price), int(quantity))
        book.lent_quantity = int(lent_quantity)
        return book
    
class BookManagementSystem:
    filePath = "S:\Learn_WIth_OStad\Project_Ostad\LibraryManagemet\Books.txt"
    def __init__(self, filename = filePath):
        self.books = []
        self.filename = filename
        self.lent_books = {}
        self.load_books()

    def save_books(self):
        with open(self.filename, 'w') as file:
            for book in self.books:
                file.write(book.to_text() + '\n')

    def load_books(self):
        try:
            with open(self.filename, 'r') as file:
                lines = file.readlines()
                self.books = [Book.from_text(line) for line in lines]
        except FileNotFoundError:
            self.books = []

    def add_book(self, title, authors, isbn, year, price, quantity):
        book = Book(title, authors, isbn, year, price, quantity)
        self.books.append(book)
        self.save_books()

    def view_books(self):
        if not self.books:
            print("No books available.")
            return
        for book in self.books:
            print(f"Title: {book.title}, Authors: {', '.join(book.authors)}, ISBN: {book.isbn}, Year: {book.year}, "
                  f"Price: ${book.price:.2f}, Quantity: {book.quantity}, Lent: {book.lent_quantity}")

    def search_books(self, term):
        results = [book for book in self.books if term.lower() in book.title.lower() or term.lower() in book.isbn.lower()]
        if results:
            for book in results:
                print(f"Title: {book.title}, Authors: {', '.join(book.authors)}, ISBN: {book.isbn}, Year: {book.year}, "
                      f"Price: ${book.price:.2f}, Quantity: {book.quantity}, Lent: {book.lent_quantity}")
        else:
            print(f"No books found for search term: {term}")


    def remove_book(self, term):
        results = [book for book in self.books if term.lower() in book.title.lower() or term.lower() in book.isbn.lower()]
        if not results:
            print(f"No books found for search term: {term}")
            return
        if len(results) == 1:
            book_to_remove = results[0]
        else:
            print("Multiple books found. Please choose one to remove:")
            for i, book in enumerate(results):
                print(f"{i + 1}. Title: {book.title}, Authors: {', '.join(book.authors)}, ISBN: {book.isbn}, Year: {book.year}")
            choice = int(input("Enter the number of the book to remove: "))
            book_to_remove = results[choice - 1]
        self.books.remove(book_to_remove)
        self.save_books()
        print(f"Book '{book_to_remove.title}' removed successfully.")

    def lend_book(self, term, borrower):
        results = [book for book in self.books if term.lower() in book.title.lower() or term.lower() in book.isbn.lower()]
        if not results:
            print(f"No books found for search term: {term}")
            return
        if len(results) == 1:
            book_to_lend = results[0]
        else:
            print("Multiple books found. Please choose one to lend:")
            for i, book in enumerate(results):
                print(f"{i + 1}. Title: {book.title}, Authors: {', '.join(book.authors)}, ISBN: {book.isbn}, Year: {book.year}")
            choice = int(input("Enter the number of the book to lend: "))
            book_to_lend = results[choice - 1]
        if book_to_lend.quantity <= book_to_lend.lent_quantity:
            print("Not enough books available to lend.")
            return
        book_to_lend.lent_quantity += 1
        if borrower in self.lent_books:
            self.lent_books[borrower].append(book_to_lend.title)
        else:
            self.lent_books[borrower] = [book_to_lend.title]
        self.save_books()
        print(f"Book '{book_to_lend.title}' lent to {borrower} successfully.")

    def return_book(self, term, borrower):
        if borrower not in self.lent_books:
            print(f"No records found for borrower: {borrower}")
            return
        results = [book for book in self.books if term.lower() in book.title.lower() or term.lower() in book.isbn.lower()]
        if not results:
            print(f"No books found for search term: {term}")
            return
        if len(results) == 1:
            book_to_return = results[0]
        else:
            print("Multiple books found. Please choose one to return:")
            for i, book in enumerate(results):
                print(f"{i + 1}. Title: {book.title}, Authors: {', '.join(book.authors)}, ISBN: {book.isbn}, Year: {book.year}")
            choice = int(input("Enter the number of the book to return: "))
            book_to_return = results[choice - 1]
        if book_to_return.title not in self.lent_books[borrower]:
            print(f"Borrower {borrower} did not borrow book '{book_to_return.title}'.")
            return
        book_to_return.lent_quantity -= 1
        self.lent_books[borrower].remove(book_to_return.title)
        if not self.lent_books[borrower]:
            del self.lent_books[borrower]
        self.save_books()
        print(f"Book '{book_to_return.title}' returned by {borrower} successfully.")

    def view_lent_books(self):
        if not self.lent_books:
            print("No books are currently lent out.")
            return
        for borrower, books in self.lent_books.items():
            print(f"{borrower} has borrowed: {', '.join(books)}")

# Main CLI Interface
def main():
    system = BookManagementSystem()

    while True:
        print("\nBook Management System")
        print("1. Add Book")
        print("2. View Books")
        print("3. Search Books")
        print("4. Remove Book")
        print("5. Lend Book")
        print("6. Return Book")
        print("7. View Lent Books")
        print("8. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            title = input("Enter title: ")
            authors = input("Enter authors (comma separated): ").split(',')
            isbn = input("Enter ISBN: ")
            year = int(input("Enter publishing year: "))
            price = float(input("Enter price: "))
            quantity = int(input("Enter quantity: "))
            system.add_book(title, authors, isbn, year, price, quantity)
        elif choice == '2':
            system.view_books()
        elif choice == '3':
            term = input("Enter title or ISBN to search: ")
            system.search_books(term)
        elif choice == '4':
            term = input("Enter title or ISBN to remove: ")
            system.remove_book(term)
        elif choice == '5':
            term = input("Enter title or ISBN to lend: ")
            borrower = input("Enter borrower's name: ")
            system.lend_book(term, borrower)
        elif choice == '6':
            term = input("Enter title or ISBN to return: ")
            borrower = input("Enter borrower's name: ")
            system.return_book(term, borrower)
        elif choice == '7':
            system.view_lent_books()
        elif choice == '8':
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
