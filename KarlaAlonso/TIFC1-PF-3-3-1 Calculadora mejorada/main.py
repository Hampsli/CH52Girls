#addmultiplenumbers
def addmultiplenumbers(lista_enteros):
    return sum(lista_enteros)

#multiplymultiplenumbers
def multiplymultiplenumbers(lista_enteros):
    result = 1
    for i in lista_enteros:
        result = result * i
    return result

#isiteven(num)
  
def isiteven(num_bool):
    if isinstance(num_bool, int) and num_bool % 2 == 0:
        return True
    else:
        return False
    
#isitaninteger(num)

def isitaninteger(num):
    return isinstance(num, int)

# Función(main) 
def main():
    
    lista_numeros = input("Ingresa los numeros separados por coma:")
    lista_numeros = lista_numeros.split(",")
    lista_enteros= [int(valores) for valores in lista_numeros]
    print("Lista de enteros:", lista_enteros)
    
    suma = addmultiplenumbers(lista_enteros)
    print(f"La suma es: {suma}")
    
    multiplicacion = multiplymultiplenumbers(lista_enteros)
    print(f"La multiplicación es: {multiplicacion}")
  
    num_ev = input("Ingresa un número: ")
    num_even = int(num_ev)
    num_bool = bool(num_even)
    print(isiteven(num_bool))
 
    num_int = input("Ingresa un número para comprobar si es un entero: ")
    num_enteger = int(num_int)
    num_integro = bool(num_enteger)
    print(num_integro)

if __name__ == "__main__":
    main()





