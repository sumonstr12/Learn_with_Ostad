

print("Hello World")

x = 5
y = 2
z = x ** y      # x^y    x to the power of y

# ** is the power operator in python
# % is the modulus operator in python

print(z)

#input() function is used to take input from the user

#marks = input("Enter your marks: ")
#marks = int(marks)  # type casting
marks = 85

# mind it for the if else statement in python
if marks >= 90:
    print("Grade A")
elif marks >= 80:
    print("Grade B")
elif marks >= 70:
    print("Grade C")
else:
    print("Grade F")
# must be careful with the indentation in python

# list in python
name = ["sumon", "sujon", "sujan", "sujit", "sujal"]    # like an array in c++
print(name)

print(name[0])  # index starts from 0

# function
def hello():
    print("Hello World")

# Library in python
import random
x = random.randint(1, 100) # random number between 1 to 100
print(x)

import datetime
x = datetime.datetime.now()
print(x)

x = datetime.datetime.today()
print(x)

import math
x = math.sqrt(64)   # square root of 64
print(x)

pi = math.pi
print(pi)

# for loop
for nam in name:
    print(nam)

print("Numbers - ")
for i in range(5):
    print(i+1,name[i])



