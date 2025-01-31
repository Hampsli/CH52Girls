import json
import requests

def main():
  print("Hello learners!")

def trivia_fetch(num):
  url = f"http://numbersapi.com/{num}?json"
  response = requests.get(url)
  data = response.json()
  print(data)  # Imprime los datos antes de retornarlos
  return data 



if __name__=="__main__":
  main()