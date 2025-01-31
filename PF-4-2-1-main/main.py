import requests

def trivia_fetch(num):
  response = requests.get(f"http://numbersapi.com/{num}?json").json()
  return response

print(trivia_fetch(68))

# Hice un ejemplo de un diccionario en python y como obtener el valor de una key
frutas = {"uvas": 2, "fresas": 3, "frambuesas": 10 }
print(f"Esta es la cantidad que tenemos de uvas en el diccionario frutas: {frutas["uvas"]}")

def main():
  print("Hello learners!")

if __name__=="__main__":
  main()


