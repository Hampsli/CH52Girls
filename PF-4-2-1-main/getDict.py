import json #importa la biblioteca json que ayuda a utilizar el formato json
import requests

#response = requests.get("http://numbersapi.com/"+str(num)+"?json") #se hace una solicitud a la url especificada por medio del método get (RestApi) - es tipo json
#trivia = json.loads(response.content) #cargamos el objeto json contenido en la respuesta y lo metemos en la variable trivia
#print(trivia) #se imprimen los datos obtenidos

def trivia_fetch(num):
    response = requests.get("http://numbersapi.com/"+str(num)+"?json")
    trivia = json.loads(response.content)
    return print(trivia)

trivia_fetch(42)