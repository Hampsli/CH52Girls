import json #importa la biblioteca json que ayuda a utilizar el formato json
import requests

def trivia_fetch(num):
  response = requests.get("http://numbersapi.com/"+str(num)+"?json")
  print(response)
  trivia = json.loads(response.content)
  return trivia
  
trivia_fetch(42)