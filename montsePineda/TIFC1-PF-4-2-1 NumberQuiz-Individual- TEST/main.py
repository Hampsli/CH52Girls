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
    
#Tengo que colocar el llamar a la función y los innputs dentro de este if
if __name__ == "__main__":
  number = int((input("Ingresa un número: ")))
  print(trivia_fetch(number))


  