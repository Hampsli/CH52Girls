# Suma de multiples numeros
def add_multiple_numbers(numeros):
    total = sum(numeros)
    return total

# Multiplicacin de varios numeros
def multiply_multiple_numbers(numeros):
    total = 1
    for i in numeros:
        total *= i
    return total

# Es numero par?
def is_even(num):
    return num % 2 == 0

# Es numero entero?
def es_entero(num):
    return isinstance(num, int)

# Funcion principal
def main():
    print("Hello learners!")

    # Hacer que el usuario escoja una opcion
    print("\nEscoge una operacion:")
    print("1. Suma")
    print("2. Multiplicacion")
    print("3. Es numero par?")
    print("4. Es numero entero?")

    operation = input("Ingresa el numero de la operacion: ")

    if operation == "1":
        entrada = input("Escribe los numeros separados por espacio: ")
        try:
            numeros = [int(x) for x in entrada.split()]
            resultado = add_multiple_numbers(numeros)
            print("La suma es:", resultado)
        except ValueError:
            print("Error: Escribe solo numeros validos separados por espacio.")

    elif operation == "2":
        entrada = input("Escribe los numeros separados por espacio: ")
        try:
            numeros = [int(x) for x in entrada.split()]
            resultado = multiply_multiple_numbers(numeros)
            print("La multiplicacion es:", resultado)
        except ValueError:
            print("Error: Escribe solo numeros validos separados por espacio.")

    elif operation == "3":
        num = input("Escribe un numero: ")
        try:
            num = int(num)
            resultado = is_even(num)
            print(f"Es par?: {resultado}")
        except ValueError:
            print("Error: Escribe un numero entero vulido.")

    elif operation == "4":
        num = input("Escribe un numero: ")
        try:
            num = float(num)
            resultado = es_entero(num)
            print(f"Es entero?: {resultado}")
        except ValueError:
            print("Error: Escribe un numero valido.")

    else:
        print("Opcion no disponible.")

# Ejecutar solo si es el script principal
if __name__ == "__main__":
    main()
