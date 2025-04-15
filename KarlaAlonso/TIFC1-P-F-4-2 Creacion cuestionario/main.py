#Construye un cuestionario
#Importando bibliotecas
import json
import requests

def trivia_fetch(num):
#Solicitamos una respuesta
    petition = requests.get(f"http://numbersapi.com/{num}?json")
#Se extraen los datos
    trivia = json.loads(petition.content)
    return trivia

def main():
#Ingresa un numero
    num = int(input("Introduzca un numero:" + " "))
    numAsociado = trivia_fetch(num)
    print(numAsociado)

if __name__=="__main__":
    main()



