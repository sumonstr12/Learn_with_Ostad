
# excercise 01
print("Number pattern-")
#rows = int(input("Enter the number of rows: "))
rows = 4
for i in range(1, rows+1):
    for j in range(1, i+1):
        print(j, end=' ')
    print('')


# excercise 02
# Count the total number of digits in a number
#num = int(input("Enter number "))
num = 123456
count = 0
while(num!=0):
    num = int(num/10)
    count += 1
print("Total number :" , count)

# excercise 03
# Write a program to create a function that takes two arguments, name and age, and print their value.
def function(name,age):
    print("Name : " + name + " \nAge  :" , age)
function("sumon",21)


# excercise 04
# Write a program to create function calculation() such that it can accept two variables and calculate
# addition and subtraction. Also, it must return both addition and subtraction in a single return call.

def calculation(num1,num2):         # python can return multiple variable
    add = num1 + num2
    sub = num1 - num2
    return add,sub

print(calculation(10,5))

# excercise 05
# Write a program to create a recursive function to calculate the sum of numbers from 0 to 5.

# addition 0 to 5 number using recursive.

def add(number):
    if number:
        return number + add(number - 1)
    else:
        return 0
    
print(add(5))


# Task 01
# Create a recursive function for factoorial calculation

def factorial(number):
    if number:
        return number * factorial(number - 1)
    else:
        return 1
    
print(factorial(5))

# Task 02
# reverse a string using recursive function

def reverse(string):
    if len(string) == 0:
        return string
    else:
        return reverse(string[1:]) + string[0]
    
print(reverse("sumon"))





