
# type determine
a = 10
b = 10.5
c = "Hello"
print(type(a), type(b), type(c))

# type casting
a = 10
b = 10.5
c = "10"
print(float(a), int(b), int(c))

# arithmetic operations
a = 11
b = 4
print(a//b) # floor division(11/4 = 2.75 === 2) so print 2
print(a%b) # remainder
print(a**b) # power(a to the power b)
print(divmod(a, b)) # return the quotient(2) and remainder(3)

# comparison operators
a = 10
b = 20
print(a == b) # False
print(a != b) # True
print(a > b) # False
print(a < b) # True

# loops
#for i in range(int(input("Enter a number: "))): # input() always return a string so we should cast it to int
    #print(i)
for _ in range(5):
    print("Hello")
# for range the number must be an interger,,so we should to cast the number to int
# above two process is right and almost same.

for i in range(1, 10, 2): # range(start, end, step) step can be negative
    print(i)




