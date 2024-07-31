class Book:
#     def __init__(self, title: str, authors: List[str], isbn: str, year: int, price: float, quantity: int):
#         self.title = title
#         self.authors = authors
#         self.isbn = isbn
#         self.year = year
#         self.price = price
#         self.quantity = quantity
#         self.lent_quantity = 0

#     def to_dict(self):
#         return {
#             'title': self.title,
#             'authors': self.authors,
#             'isbn': self.isbn,
#             'year': self.year,
#             'price': self.price,
#             'quantity': self.quantity,
#             'lent_quantity': self.lent_quantity
#         }

#     @classmethod
#     def from_dict(cls, data):
#         return cls(
#             title=data['title'],
#             authors=data['authors'],
#             isbn=data['isbn'],
#             year=data['year'],
#             price=data['price'],
#             quantity=data['quantity']
#         )

#     def to_text(self):
#         return f"{self.title}|{','.join(self.authors)}|{self.isbn}|{self.year}|{self.price}|{self.quantity}|{self.lent_quantity}"

#     @classmethod
#     def from_text(cls, text):
#         parts = text.strip().split('|')
#         title, authors, isbn, year, price, quantity, lent_quantity = parts
#         book = cls(title, authors.split(','), isbn, int(year), float(price), int(quantity))
#         book.lent_quantity = int(lent_quantity)
#         return book