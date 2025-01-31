import json #para trabajar con los datos en formato json
import requests #para hacer solicitudes http (obteniendo datos de una API)

def trivia_fetch(numero):
  url = f"https://generation.com/{numero}?json" # Mantiene la URL. Estoy agregando esta linea porque no me corrió de la manera que vimos en clase
  response = requests.get(url) #solicito el json
  trivia = json.loads(response.content) #extraigo el json
  print(trivia["text"]) #imprimo el json

def main():
  numero = input("Ingresa un número entero")
  print(trivia_fetch(numero))

if __name__=="__main__":
  main()
