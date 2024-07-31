from typing import List
class Nagad_App:
    filePath = ('S:\Learn_WIth_OStad\Python_Project\Nagad\Data.txt')
    def __init__(self,filePath):
        self.fileName = filePath

    def Add_money(self):
        f = open(self.fileName,'r')
        prev_tk = int(f.read())
        f.close()
        add = int(input("Enter add Money : "))
        Add = open(self.fileName,'w')
        Add.write(prev_tk + add)
        Add.close()

def main():
    system = Nagad_App()

    while True:
        print("0. Add money")
        print("1. Cash out")
        print("2. Send Money")
        print("3. Mobile Recharge")
        print("4. Payment")
        print("5. Bill pay")
        print("6. My nagad")
        print("7. PIN reset")
        print("8. exit.")

        Input = int(input("Enter your choices : "))

        if Input == 0:

            system.Add_money()
        elif Input == 8:
            break
        else:
            print("Invalid Number.")



if __name__ == "__main__":
    main()
# 1. Cash out
# 2. Send Money
# 3. Mobile Recharge
# 4. Payment
# 5. Bill pay
# 6. My nagad
# 7. PIN reset
