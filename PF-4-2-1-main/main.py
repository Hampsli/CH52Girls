import json
import requests

def main():
  print("Hello learners!")

if __name__ == "__main__":
    main()

def trivia_fetch(num):
  response = requests.get("http://numbersapi.com/"+str(num)+"?json")
  print(response)
  trivia = json.loads(response.content)
  return trivia

trivia_fetch(98)
