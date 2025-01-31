#Código que pide un nuemro y da dato divertidos sobre ese numeros

#Se importan los diccionarios necesarios
import json
import requests

def trivia_fetch(number):
    
    #El url se debe modificar de acuerdo al numero ingresado, se guarda en una variable
    #{} es un marcador de posición y permite insertar en la cadena el valor de number
    url="http://numbersapi.com/{}?json".format(number) 

    #Código sesión
    response=requests.get(url)
    trivia=json.loads(response.content)
    return trivia
    
#Se solicita el numero 
print("Ingrese el numero")
number=input()
#Se llama a la función
print(trivia_fetch(number))


  