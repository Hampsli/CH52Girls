def main():
  #print("Hello learners!")
  #numbers = input("Ingrese una lista de números: ")
  numbers = [5, 6, 7, 4]
  return numbers
 
#take a list of numbers as input, and it should output the sum of those numbers
def addmultiplenumbers(list):
  addition = sum(list)
  print(f"Sum of elements equals: {addition}")
  return addition

#take a list of numbers as input, and it should output the result of multiplying each number in turn with the following number
def multiplymultiplenumbers(list):
  product = 1
  for number in list:
    product = product * number
  print(f"Product of elements equals: {product}")
  return product

#take a single number as input, and output a boolean value - `True` if the number is an even, whole number, `False` otherwise
def isiteven(number):
  if number % 2 == 0 and isinstance(number, int): 
    print(f"Number {int(number)} is even: True")
    return True
  else:
    print(f"Number {number} is even: False")
    return False

#take a single number as input, and it should output a boolean value - `True` if the number is an integer, `False` otherwise
def isitaninteger(number):
  response = isinstance(number, int)
  print(f"Number {number} is integer: {response}")
  return response


list_of_numbers = main()
addmultiplenumbers(list_of_numbers)
multiplymultiplenumbers(list_of_numbers)

for number in list_of_numbers:
  isiteven(number)
  isitaninteger(number)
