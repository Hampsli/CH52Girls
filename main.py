def main():
  print("Hello learners!")

#Función para ingresar los numeros a la lista
def intronum(listnum):
  print("introduzca la cantidad de numeros a operar")
  cantNum=int(input())
  listnum =[] 
  #Código para pedir los numeros
  for numero in range(cantNum):
    print("ingrese el numero: ")
    numero=float(input())
    listnum.append(numero)
  return listnum

#Funcion para sumar los numeros
def addmultiplenumbers(listnum):
  suma=0
  for numero in listnum:
      suma=suma+numero
  return suma


#Funcion para multiplicar los numeros
def multiplymultiplenumbers(listnum):
    multi=1
    for numero in listnum:
        multi=multi*numero
        
    return multi

#Funcion para definir si el numero es par o impar
def isiteven(num):
  if int(num) % 2 == 0:
   return True 
  else:
   return False

  
#Funcion para definir si el numero entero
def isitaninteger(num): #Se utiliza funcion de python erifica si la variable num es del tipo entero int
  if isinstance(num, int):
        return True
  elif isinstance(num, float) and num.is_integer():
        return True
  else:
        return False
    
if __name__=="__main__":
  main()
  # Resultado de la suma de los números
  listnum = intronum()
  addmultiplenumbers(listnum)
  listnum.clear()

  #Resultado de la multiplicación de los numeroa
  intronum(listnum)
  multiplymultiplenumbers(listnum)
  listnum.clear()
  #Resultado numero par o impar
  numero = (input("Ingresa un número: ")) 
  isiteven(numero)
  #REsultado numero es entero
  numero1 = input("Ingresa un número: ")
  isitaninteger(numero1)