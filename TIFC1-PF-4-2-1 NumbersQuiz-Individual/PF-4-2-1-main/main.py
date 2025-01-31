import json
import requests

def trivia_fetch(num):
    response = requests.get(f"http://numbersapi.com/{num}?json")
    trivia = json.loads(response.content) # aqui se vuelve diccionario
    return trivia
    
def main():
   
   num = int(input("Escribe un número entero positivo y descubre una sorpresa ")) #Es igual que num = input ("escribe un numero entero positivo y descubre una sorpresa") y en una segunda linea num1 = int(num)
   print(trivia_fetch(num))
  # Asi se puede hacer si quiero que el valor de los demas prints sea el mismo y no aleatorio
    #res = trivia_fetch(5)
    #print(res)
    #print(res["number"])
    #print(res["text"])

if __name__=="__main__":
  main()
