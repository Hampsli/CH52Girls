#Trivia de números con API
import requests

def trivia_fetch(num1):
  url= f"http://numbersapi.com/{num1}"
  response = requests.get(url) 
  return response.text

num1 = input("Ingresa un número al azar: ")

trivia = trivia_fetch(num1)
print(trivia)

#Trivia de números con diccionario
def trivia_fetch(number):
    dir_num = {
        "1": "El 1 es un símbolo de comienzo",
        "2": "El número 2 es símbolo de la sensibilidad",
        "3": "El número 3 es el símbolo de la creatividad",
        "4": "El número 4 representa la tierra",
        "5": "Es el número de la libertad y el movimiento",
        "6": "El 6 es un número de la paz",
        "7": "Es el número del misticismo",
        "8": "El 8 es el número del dinero",
        "9": "El 9 es el número de la creación y la renovación",
        "15": "El número 15 es un símbolo de la abundancia y el progreso",
        "666": "El número 666 es el número del diablo jeje"
    }
    
    if number in dir_num:
        return dir_num[number]
    else:
        return "No tengo información sobre ese número"
    
number = input("ingresa un número del 1 al 9: ")

trivia = trivia_fetch(number)
print(trivia)
