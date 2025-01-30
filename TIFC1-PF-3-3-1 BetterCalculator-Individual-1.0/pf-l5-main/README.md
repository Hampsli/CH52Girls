# Instructions
Now is your opportunity to build a better calculator. Your calculator can work however you wish it to but it should be usable as a calculator.

Firstly, we're going to separate out of our *interactive* logic into the `main()` function, like so:

```
def main():
  print("Hello learners!")

if __name__=="__main__":
  main()
```

This is Python *boilerplate* code, which will only run when the program is invoked by a person. All your code should now be inside a function - either this `main()` function (where you can put things like input statements) or another function.

Automatic grading will be scored out of 8, and will test the functionality of the following functions:

* `addmultiplenumbers([num, num, ..])` - this function must exist in your program, it should take a list of numbers as input, and it should output the sum of those numbers.
* `multiplymultiplenumbers([num, num, ..])` - this function must exist in your program, it should take a list of numbers as input, and it should output the result of multiplying each number in turn with the following number.
* `isiteven(num)` - this function must exist in your program, it should take a single number as input, and it should output a boolean value - `True` if the number is an even, whole number, `False` otherwise.
* `isitaninteger(num)` - this function must exist in your program, it should take a single number as input, and it should output a boolean value - `True` if the number is an integer, `False` otherwise.

**Remember** This project will be automatically graded, and computers are very literal!

**Note:** Use the tests! There's nothing wrong with running the tests until they pass. It's not cheating!

**Note:** If you get stuck getting one function to work, try working on a different one. You might find you can solve later functions more quickly than earlier ones.