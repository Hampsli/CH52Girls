def addmultiplenumbers(numbers):
  return sum(numbers)

def multiplymultiplenumbers(numbers):
  resultado = 1
  for num in numbers:
    resultado *= num
  return resultado

def isiteven(num):
  return isinstance(num, int) and num % 2 == 0

def isitaninteger(num):
  return isinstance(num, int)

def main():
  print("Hello learners!")

if __name__=="__main__":
  main()