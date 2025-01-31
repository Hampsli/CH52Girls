import json
import requests 

def main():
 num = int(input("Ingresa un número "))
 trivia = trivia_fetch(num)
 print(trivia["text"])
 

def trivia_fetch(num):
  response = requests.get(f"http://numbersapi.com/{num}?json")
  trivia = json.loads(response.content)
  return trivia
  

if __name__=="__main__":
  main()
