import requests

def trivia_fetch(num):
  response = requests.get(f"http://numbersapi.com/{num}?json")
  number = response.json()
  return number


def main():
  numero = int(input("Ingresa un número para obtener la trivialidad: "))
  resultado = trivia_fetch(numero)
  return resultado


if __name__=="__main__":
  main()