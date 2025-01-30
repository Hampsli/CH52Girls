

def addmultiplenumbers():
    
# Ingresar los números
    numeros = input("Ingresa los números separados por espacio: ")

    # Convertimos la entrada en una lista de números flotantes
    list_num = [int(n) for n in numeros.split()]

    # Suma de los números
    suma_total = sum(list_num)

    # Retornamos la suma total
    return suma_total  

# Mostrar el resultado
result = addmultiplenumbers()
print("La suma de los números es:", result)              
