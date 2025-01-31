# Instructions
Now is your opportunity to build a quiz! Your quiz can work however you wish to.

Firstly, we're going to separate out of our *interactive* logic into the `main()` function, like so:

```
def main():
  print("Hello learners!")

if __name__=="__main__":
  main()
```

This is Python *boilerplate* code, which will only run when the program is invoked by a person. All your code should now be inside a function - either this `main()` function (where you can put things like input statements) or another function.

Automatic grading will be based on the functionality of the following function (which must be incorporated into your program):

* `trivia_fetch(num)` - this function must exist in your program, it should take one number as input, and it should output a dictionary of trivia about that number.

**Remember** This project will be automatically graded, and computers are very literal!

**Note:** Use the tests! There's nothing wrong with running the tests until they pass. It's not cheating!