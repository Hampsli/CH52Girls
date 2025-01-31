import json
import requests


def main():
  print("Hello learners!")

if __name__=="__main__":
  main()

def trivia_fetch(num):
    response = requests.get(f"http://numbersapi.com/{num}?json") #En este punto pregunte a CHATGPT sobre como hacer qu eme lea mi url y me recomento f
    trivia = response.json()
    return trivia

print(trivia_fetch(input("Escoge un número random para saber datos curiosos\n")))