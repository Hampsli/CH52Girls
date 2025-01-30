def main():
  print("Hello learners!")

#Para la suma de multiples números
suma = 0 #Aqui se crea la variable suma que empieza con el valor 0, y en esta si irá acumulando la suma de los números que se ingresen
while True: #Aquí se crea un bucle y se detendrá hasta que el usuario decida terminarlo
    entrada = input("Ingrese un número (o 'fin' para terminar): ") #Se muestra mensaje para pedirle al usuario que ingrese un número 
    if entrada == "fin": #Si el usuario escribe "fin", la instrucción se termina (se rompe) y termina el bucle (while)
        break
    numero = int(entrada) #Cuando se escribe algo en la pantalla, la computadora lo guarda como texto, incluso si fueron números, la función int() es como traductor para indicar que es un numero y asi se pueda sumar
    suma += numero #Se suman los numeros que el usuario ingresó 

print(suma) #Cuando el usario escribe "fin" y el bucle termina, se muestra el valor final que es la suma de todos los números que se ingresaron

#Para la multiplicación de multiples números
producto = 1 #Empieza el valor en 1 porque si empezara en 0 daria como resultado 0
while True:
    entrada = input("Ingrese un número (o 'fin' para terminar): ").strip().lower() #Strip() elimina los espacios en blanco al incio y final de una cadena cuando escriben fin con espacios, y lower para convertir fin a minusculas  
    if entrada == "fin":
        break
    try: #ejecuta int(entrada), si la funcion falla, capta el error y muestra mensaje en lugar de detener el programa
        numero = int(entrada)
        producto *= numero  # Multiplica el número ingresado
    except ValueError:
        print("Entrada no válida. Por favor, ingrese un número entero.")
print(f"El producto final es: {producto}")

#Para definir si un numero es par
def es_entero_par(numero): #toma un numero como entrada
  if isinstance(numero, int) and numero % 2 == 0: #verifica si el numero es entero, isinstance comprueba si pertenece a una clase especifica, en este caso si es entero. El "%2" calcula el resto de la division /2 a traves del %, si el resto es =0 significa que el numero es divisible y por lo tanto es par
    return True
  else:
    return False
entrada = input("Ingrese un número: ") # Solicita al usuario que ingrese un número
try: # Intenta convertir la entrada del usuario a un entero
  numero = int(entrada)
except ValueError: #Por si ocurre una excepcion dentro del try
  print("Entrada inválida. Debe ingresar un número entero.") #muestra mensaje de error
  exit() #termina la ejecucion del programa en caso de que el numero que se ingreso no es entero
if es_entero_par(numero): # Verificar si el número es par y mostrar el resultado
  print("Verdadero")
else:
  print("Falso")

#Para verificar si es un número entero
numero = input("Ingresa un número: ") #para ingresar número
if (numero):
  print(f"{numero} es un número entero.") #indica si es entero
else:
  print(f"{numero} no es un número entero.") #indica que no es entero

if __name__ == "__main__":
    main()