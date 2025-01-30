def main():
  print("Hello learners!")

if __name__=="__main__":
  main()

# recibir una lista de números como entrada y debe devolver la suma de esos números
def addmultiplenumbers(): 
  # Ingresar los números
  numeros = input("Ingresa los números separados por comas: ")

  # Convertimos la entrada en una lista de números enteros
  list_num = [int(n) for n in numeros.split(",")]

  # Suma de los números
  suma_list = sum(list_num)

  # Retornamos la suma total
  return suma_list  

# Mostrar el resultado
result = addmultiplenumbers()
print("La suma de los números es:", result)  

#Devolver el resultado de multiplicar cada número con el siguiente número en la lista.
def multiplymultiplenumbers():
  for i in range(len(list_num) - 1):  
        producto = list_num[i] * list_num[i + 1]
        productos.append(producto)

    return productos  

# Mostrar el resultado
resultado = multiply_numbers()
print("Los productos de cada número con el siguiente son:", resultado)
