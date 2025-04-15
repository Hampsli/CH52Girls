import random #Esta libreria genera números pseudoaleatorios y realizar operaciones aleatorias en programas

def trivia_fetch(num):
    trivia_data = { #Este va a ser mi diccionario de datos triviales
        1: ["El numero 1 es el primer signo escrito del mundo"],
        2: ["La raíz cuadrada de 2 fue el primer número irracional conocido"],
        3: ["El numero 3 se considera un número de la suerte en la cultura china "],
        4: ["El el numero 4 en numerología, suele representar estabilidad, orden y practicidad"],
        5: ["El número 5 es un número de Fibonacci"]
    }
    #aqui en voy a almacenar la trivia aleatoria sobre el numero pedido
    #el dato se va a obtener usando random.choice
    curiosity = random.choice(trivia_data.get(num, ["No tengo el dato sobre ese numero"]))
    
    return {"number": num, "curiosity": curiosity} #este va a devolver un valor desde la funcion hacia el codigo que lo invoca

def main():
  print("------------------trivia numerica--------------- ")
  num = int(input("Ingresa un número del 1 al 5: ")) # pide el numero de 1 al 5 y lo guarda en la variable num

  trivia = trivia_fetch(num) #se llama trivia_fetch y el numero devuelve el dato y se almacena en trivia
  print(f"La trivia de este numero es: {trivia["number"]}: {trivia["curiosity"]}")

if __name__=="__main__":
  main()