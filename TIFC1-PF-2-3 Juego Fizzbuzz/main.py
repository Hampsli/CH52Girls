#Write a program that prints the first 1000 numbers of FizzBuzz. 
limit = 1001
counter = 1
while counter < limit:
        if counter % 3 == 0 and counter % 5 == 0: 
            print("Fizzbuzz")
        elif counter % 3 == 0:  
            print("Fizz")
        elif counter % 5 == 0:  
            print("Buzz")
        else:
            print(counter)
        counter = counter + 1

