
# Create a class
class person:
    
    # constructor
    def __init__(self,nm,age,town):
        self.name = nm
        self.age = age
        self.town = town

    def work(self):
        print("As a student")

    def eat(self):
        print("I am eating")
# Create an object
# This will raise an error: 'Person' object has no attribute 'work'
# Because you are trying to call the method on the class itself
#person.work()

# create an object
Person = person("Sumon", 20, "Dhaka")
print("For first object: ")
print(Person.name)
print(Person.age)

# Called the method on the object
Person.work()
Person.eat()

# Create another object
Person2 = person("Rahim", 25, "Chittagong")
print("\nFor second object: ")
print(Person2.name, Person2.age, Person2.town)
Person2.work()
Person2.eat()