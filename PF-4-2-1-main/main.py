import json
import requests

def trivia_fetch(num):
  response = requests.get(f'http://numbersapi.com/{num}', params={'json': ''})
  trivia = json.loads(response.content)
  return response.json()
 
def main():

  num = input('Ingresa un numero: ')


  trivia=trivia_fetch(num)
  print(trivia['text'])

if __name__=="__main__":
  main()