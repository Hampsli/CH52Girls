  #Primero definimos las funciones para cada operación
def addmultiplenumbers(lista):
  suma=0
  for i in lista:
    suma=suma+i
  return suma
def multiplymultiplenumbers(lista):
  mult=1
  for i in lista:
    mult=mult*i
  return mult
def isiteven(num):
  flotante=float(num)
  if flotante%2==0:
    return True
  else:
    return False
def isitaninteger(num):
  flotante=float(num)
  if flotante%1==0:
    return True
  else:
    return False

def main():
  print("Hello learners!")

  #Para que el usuario escoja la operación que quiere hacer
  operacion=input("¿Qué operación quieres realizar? Escribe 'suma', 'multiplicación', 'numero par'' o 'numero entero': ")
  if operacion=="suma":
    lista_suma=[float(x) for x in input("Introduce los números separados por un espacio: ").split()]
    addmultiplenumbers(lista_suma)
  elif operacion=="multiplicación":
    lista_mult=[float(x) for x in input("Introduce los números separados por un espacio: ").split()]
    multiplymultiplenumbers(lista_mult)
  elif operacion=="numero par":
    numero_par=input("Ingresa el número: ")
    isiteven(numero_par)
  elif operacion=="numero entero":
    numero_entero=input("Ingresa el número: ")
    isitaninteger(numero_entero)
  else:
    print("Eso no está en las opciones, reinicia el programa")


if __name__=="__main__":
  main()

