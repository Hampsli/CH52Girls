# Aqui guardo las operaciones 
def suma(a ,b , c): 
   return a + b + c 

def resta(a,b,c):
  return a - b - c

def multi(a,b,c):
  return a * b * c

# Aqui ya hago las funciones de la calculadora 
def main():
  print("Calculadora")
  num1=int(input("Primer numero"))
  num2= int(input("Segundo numero"))
  num3= int(input("Tercer numero"))
  list_1 =[num1,num2,num3]
  print (f"Tus numeros elegidos fueron: {list_1}")
  print("---------------suma------------------")
  resSum = suma(num1,num2,num3)
  print("La suma de tus numeros es:", resSum)
  print("---------------resta-----------------")
  res = resta(num1,num2,num3)
  print("La resta es:", res)
  print("--------multiplicacion----------------")
  mult = multi(num1,num2,num3)
  print("La multiplicacion es:", mult)
  print("----------Par o impar ----------")
  num4= float(input("Dame un numero"))
  print("true/par, false/impar")
  print("El numero es par o impar? ")
  if num4 % 2 == 0:  
    print("True")
  else:
    print("False")

if _name=="main_":
  main()