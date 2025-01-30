
def addmultiplenumbers(numbers):
    "Suma"
    return sum(numbers)

def multiplymultiplenumbers(numbers):
    "Multiplica"
    result = 1
    for num in numbers:
        result *= num
    return result

def isiteven(num):
    return isinstance(num, int) and num % 2 == 0

def isitaninteger(num):
    return isinstance(num, int)

def main():
  print("Hello learners!")

if __name__=="__main__":
  main()
  