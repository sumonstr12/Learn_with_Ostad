mystring = input()
mylist = mystring.split() # split() function is used to split the string into a list
mylist = [int(i) for i in mylist]

d = mylist[1] - mylist[0]
e = mylist[2] - mylist[1]
if d == e:
    print(d + mylist[2])
else:
    print(mylist[2] + d + (e - d))