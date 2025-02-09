limit = 1001
counter = 1
while counter < limit:
    if counter % 15 == 0:
        print("Fizzbuzz")
    elif counter % 5 == 0:
        print("Buzz")
    elif counter % 3 == 0: 
        print("Fizz")
    else:
        print(counter)
    counter = counter + 1

