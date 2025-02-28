import requests
import json

#def main():
print("Welcome to the Number Trivia Quiz!")
  
num = int(input("Enter a number: "))
trivia = input(num)

def trivia_fetch(num):   
   url= f"http://numbersapi.com/{num}/trivia"    
response = requests.get("http://numbersapi.com/number/type?json")
trivia = json.loads(response.content)
print(trivia)
      
print('El juego termino!')
print('¡Gracias por jugar! Nunca pares de aprender :)')

