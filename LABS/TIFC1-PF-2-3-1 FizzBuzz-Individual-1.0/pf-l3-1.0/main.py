
number = 1

while number <=1000:

 if number % 15 == 0:
  print("Fizzbuzz")
 elif number % 3 == 0:
  print("Fizz")
 elif number % 5 == 0:
  print("Buzz")
 else:
  print(number)
  
 number=number+1