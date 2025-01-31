def trivia(num):
  nums_curiosidades = {
    1 : "Es el número más ñoño",
    2 : "Es el número más teto",
    3 : "Es el número chill de cojones",
    4 : "Es un número de cuando estás un poquis ebrio",
    5 : "Es el número panzón",
    6 : "Es uno de mis número favs"
  }
  return nums_curiosidades.get(int(num),"No hay trivia para ese numero :(")

def trivia_fetch(num):
  return {
    "number": num,
    "trivia": trivia(num)
  }

def main():
  number = input('ingresa un numero')
  response = trivia_fetch(number)
  print(f"This is the trivia for {number}: {response}")

if __name__=="__main__":
  main()
  