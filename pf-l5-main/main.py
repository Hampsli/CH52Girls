

def addmultiplenumbers(numbers:list[float]):
  res = sum(numbers)
  return res 

def multiplymultiplenumbers(numbers:list[float]):
  res = 1
  for i in numbers:
    res= res * i
  return res

def isiteven(number:int):
  return number % 2 == 0

def isitaninteger(number:float):
  isInteger = number//1 
  return isInteger == number


