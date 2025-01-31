import json
import requests

def main():
  random_number = str(5)
  return random_number

#if __name__=="__main__":
#  main()

#take one number as input, and it should output a dictionary of trivia about that number
def trivia_fetch(number):
  my_api = "http://numbersapi.com/[number]?json"
  new_api = my_api.replace("[number]", number)
  print(new_api)
  my_request = requests.get(new_api)
  #random_trivia = my_request.text
  
  random_trivia = json.loads(my_request.content)
  return random_trivia

number = main()
print(trivia_fetch(number))

'''
def trivia_fetch(number):
  my_api = f"http://numbersapi.com/{number}?json"
  my_request = requests.get(my_api)
  
  random_trivia = json.loads(my_request.content)
  return random_trivia'''