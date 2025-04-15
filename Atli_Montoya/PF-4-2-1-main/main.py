import requests  
import json
def main():
    num = input("Tell Me a Magic Number: ")  # Solicitamos un número
    trivia = trivia_fetch(num)  # solicitamos a la función para obtener la trivia
    print(trivia)  

def trivia_fetch(num):
    url = f"http://numbersapi.com/{num}?json"  #chatGPT me dijo que podía guardar la url en la variable para no tener que modificar el código en caso de que la url se volviera inválida con el tiempo
    response = requests.get(url)  # solicitamos una respuesta
    return response.json()  # Regresamos los datos obtenidos
    

if __name__ == "__main__":
    main() 
