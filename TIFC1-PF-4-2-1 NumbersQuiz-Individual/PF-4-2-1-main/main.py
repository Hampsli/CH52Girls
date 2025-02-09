#Trae (llama) las librerias
import requests
import json  

#define la funcion para obtener el numero de la trivia
def trivia_fetch(num):
    response = requests.get(f"http://numbersapi.com/{num}?json")  # Realiza una consulta a la url de esa API, para obtener el numero que se ingresa
    trivia = response.json()  # Convierte la respuesta en formato JSON con el .json()
    return trivia #retorna la variable trivia

def main():
    print("¡Ingresa un numero y descrubra su trivia!")
    num = input("Escribe un número: ")  #Pide un numero con el input
    trivia = trivia_fetch(num)  #Llama a la funcion 
    print(f"La trivia para el número {num}: {trivia['text']}")  #muestra la variable trivia, con ello el resultado de la funcion 

if __name__ == "__main__":
    main()
