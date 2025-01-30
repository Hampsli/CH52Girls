def addmultiplenumbers(numbers):
  res = 0
  for num in numbers:
    res = res + num    
  return res  

def multiplymultiplenumbers(numbers):
  res = 1
  for num in numbers:
    res = res * num
  return res
  
def isiteven(num):
  return num % 2 == 0

def isitaninteger(num):
  return isinstance(num, int)


def main():
  print("Hello learners!")

if __name__=="__main__":
  main()