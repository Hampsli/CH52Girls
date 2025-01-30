def addmultiplenumbers(numero):
    """
    Esta función toma una lista de números y devuelve la suma de ellos.
    """
    return sum(numero)

def multiplymultiplenumbers(numero):
    """
    Esta función toma una lista de números y devuelve el producto de ellos.
    """
    result = 1
    for numero in numero:
        result *= numero
    return result

def isiteven(numero):
    """
    Esta función toma un número y devuelve True si es par, False en caso contrario.
    """
    return isinstance(numero, int) and numero % 2 == 0

def isitaninteger(numero):
    """
    Esta función toma un número y devuelve True si es un entero, False en caso contrario.
    """
    return isinstance(numero, int)

def main():
    print("¡Hola, alumnos!")
    
    # Sumar números
    nums = list(map(int, input("Ingrese números separados por espacio para sumar: ").split()))
    print(f"Suma de los números: {addmultiplenumbers(nums)}")
    
    # Multiplicar números
    nums = list(map(int, input("Ingrese números separados por espacio para multiplicar: ").split()))
    print(f"Producto de los números: {multiplymultiplenumbers(nums)}")
    
    # Verificar si un número es par
    numero = int(input("Ingrese un número para verificar si es par: "))
    print(f"¿El número es par? {isiteven(numero)}")
    
    # Verificar si un número es un entero
    numero = input("Ingrese un número para verificar si es un entero: ")
    try:
        numero = int(numero)
        print(f"¿El número es un entero? {isitaninteger(numero)}")
    except ValueError:
        print(f"¿El número es un entero? {False}")

if __name__ == "__main__":
    main()
