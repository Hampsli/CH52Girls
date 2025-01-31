import requests 
def trivia(num):
  res = requests.get(f"http://numbersapi.com/{num}/trivia")
  
  return res.text

def trivia_fetch(num):
  return {
    "number": num,
    "trivia": trivia(num)
  }

def main():
  number = input('ingresa un numero')
  response = trivia_fetch(number)
  print(f"This is the trivia for {number}: {response}")

if __name__=="__main__":
  main()
  