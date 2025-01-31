#Importaremos las librerias para manejar api´s
import json    
import requests

# Aqui en main se hace la entrada de datos, definiendolo como entero
def main():
   
   num = int(input("Hola, escriba un numero entero para obtener una mensaje curioso:  ")) 

   #Aqui se realiza el metodo trivia_fetch que definimos con el algumento num ingresado
   print(trivia_fetch(num)) 

#Aqui definimos la funcion sabiendo que debe tener ingresado su argumento num previamente digitado
def trivia_fetch(num):
    #Elegimos una variable que mediante requests.get , sera un metodo que se usa para traer datos de un servidor web
    #se debe de indicar el URL del sitio y la "f" al inicio nos permite insertar variables dentro de la cadena.
    # eso es util porque dentro de la cadena de la url necesitamos tener la direccion 42 o 1000 de esa direccion
    # el "?json" se usa para convertirlo a formato json porque es similar a un diccionario en python y lo maneja mas facil
    respuesta = requests.get(f"http://numbersapi.com/{num}?json")

    #En esta variable hace la conversion de un HTTP del JSON a un diccionnario
    # response.content es lo que contiene, "json.loads" es un metodo que lo vuelve un diccionario de python
    trivia_fetch = json.loads(respuesta.content) 
    return trivia_fetch

# esta sentencia if se requiere para hacer accionar el main
if __name__=="__main__":
    main()