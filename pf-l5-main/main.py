#def isiteven(num)
#return True if

#def isitaninteger(num)
#if num == int
#return


def addmultiplenumbers(n1, n2, n3,):
  return n1 + n2 + n3

def multiplymultiplenumbers(n1, n2, n3,):
 return n1* n2 * n3

def operaciones_calculadora ():
    print ("1. Sumar números")
    print ("2. Multiplicar números")
    print ("3. Generar un valor booleano si el número es par")
    print ("4. Generar valor booleano si el número es entero")
    opcion = input("Elige una opción (1-4): ")

  n1 = float(input("Introduce número: "))
  n2 = float(input("Introduce número: "))
  n3 = float(input("Introduce número: "))

 if opcion == "1":
   resultado = addmultiplenumbers(n1, n2, n3)
 elif opcion == "2":
   resultado = multiplymultiplenumbers (n1, n2, n3)
  return resultado

mi_resultado = operaciones_calculadora()
print("Resultado:", mi_resultado)

