
class Rectangle:
    name = "Sumon"
    def perimeter(self, length, width):
        return 2 * (length + width)
    # Method to calculate the area of a rectangle
    def area(self, length, width):
        return length * width

nm = Rectangle()
print(nm.name)
# Create an object
small = Rectangle()
print("Small area :",small.area(2,3))
print("Small perimeter :",small.perimeter(2,3))

# Create another object
big = Rectangle()
print("Big area :",big.area(10,20)) 
print("Big perimeter :",big.perimeter(10,20))


# 2nd example
class Circle:
    # Class variable
    pi = 3.1416

    # Method to calculate the area of a circle
    def area(self, radius):
        return Circle.pi * radius ** 2

    def code(self,radious):
        return self.area(radious)

# Create an object
m1 = Circle()
# Call the method on the object
print("Area of circle: ",round(m1.code(10),2))


# 3rd example

# class Student:
#     name = input("Enter name: ")


# s1 = Student()
# print(s1.name)

# Constructor
class Student1:
    def __init__(self):
        print("Constructor called")

s1 = Student1()


# 4th example
class College:
    college_name = "kaunia college" # class attribute
    year = 1971

    def __init__(self,name,roll):
        self.name = name     # instance attribute/object attribute
        self.roll = roll

s1 = College("sumon", 101)
print(s1.name)

# Class have two things:
# Data(attributes) and Methods

