from functools import reduce

def addmultiplenumbers(numbers):
    """
    Suma una lista de números y devuelve el resultado.
    """
    return sum(numbers)

def multiplymultiplenumbers(numbers):
    """
    Multiplica una lista de números y devuelve el resultado.
    """
    return reduce(lambda x, y: x * y, numbers)

def isiteven(num):
    """
    Verifica si un número es par.
    Devuelve True si es par, False en caso contrario.
    """
    return num % 2 == 0

def isitaninteger(num):
    """
    Verifica si un número es un entero.
    Devuelve True si es entero, False en caso contrario.
    """
    return isinstance(num, int)

def main():
    """
    Función principal donde se ejecuta la calculadora.
    """
    print("Bienvenido a la calculadora avanzada!")
    
    while True:
        print("\nOpciones:")
        print("1. Sumar múltiples números")
        print("2. Multiplicar múltiples números")
        print("3. Verificar si un número es par")
        print("4. Verificar si un número es un entero")
        print("5. Salir")
        
        opcion = input("Elige una opción (1-5): ")
        
        if opcion == "1":
            nums = list(map(float, input("Introduce los números separados por espacio: ").split()))
            print("Resultado de la suma:", addmultiplenumbers(nums))
        
        elif opcion == "2":
            nums = list(map(float, input("Introduce los números separados por espacio: ").split()))
            print("Resultado de la multiplicación:", multiplymultiplenumbers(nums))
        
        elif opcion == "3":
            num = float(input("Introduce un número: "))
            print("Es par?", isiteven(int(num)))
        
        elif opcion == "4":
            num = input("Introduce un número: ")
            try:
                num = float(num)
                print("Es un entero?", isitaninteger(num))
            except ValueError:
                print("Entrada no válida, intenta de nuevo.")
        
        elif opcion == "5":
            print("Saliendo de la calculadora. ¡Hasta luego!")
            break
        
        else:
            print("Opción no válida, intenta de nuevo.")

if __name__ == "__main__":
    main()