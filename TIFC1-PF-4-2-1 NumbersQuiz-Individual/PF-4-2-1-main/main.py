#import json ChatGPT me dijo que esto era incesario
import requests

def trivia_fetch(num):
  url=f"http://numbersapi.com/{num}?json"
  response = requests.get(url)
  #trivia=json.loads(response.content)
  trivia=response.json()
  return trivia

def main():
  print("Hello learners!")
  number=input("Write a number: ")
  print(trivia_fetch(number))

if __name__=="__main__":
  main()