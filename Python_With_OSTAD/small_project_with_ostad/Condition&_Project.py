# Project: Condition & Project

# conditon
marks = 80
if marks > 90:
    print("Grade A")
elif marks > 80:
    print("Grade B")
elif marks > 70:
    print("Grade C")
else:
    print("Grade D")

# match statement
# match statement works like switch case in other programming languages
vowel = "a"
match vowel:
    case "a":
        print("Vowel A")
    case "e":
        print("Vowel E")
    case "i":
        print("Vowel I")
    case "o":
        print("Vowel O")
    case "u":
        print("Vowel U")
    case _:     # default case
        print("Consonant")

marks = 80
match marks:
    case _ if marks > 90:
        print("Grade A")
    case _ if marks > 80:
        print("Grade B")
    case _ if marks > 70:
        print("Grade C")
    case _:
        print("Grade D")

# loop
