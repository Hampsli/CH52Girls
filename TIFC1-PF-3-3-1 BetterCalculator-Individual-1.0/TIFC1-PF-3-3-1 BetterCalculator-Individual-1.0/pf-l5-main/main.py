#Funcion de suma
def addmultiplenumbers(numbers):
    return sum(numbers)  # Dame el resultado de la suma de todos los números en la lista

#Funcion de multiplicacion
def multiplymultiplenumbers(numbers):
    resultado = 1 
    for num in numbers:
        resultado *= num  # Multiplica todos los números en la lista
    return resultado

# Funcion para verificar si es o no par
def isiteven(num):
    return isinstance(num, int) and num % 2 == 0  # Devuelve True si el número es entero y par

# Funcion para verificar si es o no entero
def isitaninteger(num):
    return isinstance(num, int)  # Devuelve True si el número es entero

# Llama a main() para mostrar el primer mensaje print y preguntarle lo siguiente
def main():
    print("¡Hola, aprendices!")
    print("Selecciona la operación que deseas realizar:")
    print("1. Suma")
    print("2. Multiplicación")
    print("3. Verificar si un número es par")
    print("4. Verificar si un número es entero")

    # Input para mostrar la opción seleccionada
    select = int(input("Selecciona una opción entre 1, 2, 3, 4: "))  # int para que solo sea número entero

    # Realiza una operación segun lo que se escoja
    if select == 1:
        numbers = list(map(float, input("Introduce los números para sumar, separados por coma: ").split(',')))  # Crea lista con los números
        print(f"La suma de {numbers} es: {addmultiplenumbers(numbers)}")
    elif select == 2:
        numbers = list(map(float, input("Introduce los números para multiplicar, separados por coma: ").split(',')))  # Crea lista con los números
        print(f"El producto de {numbers} es: {multiplymultiplenumbers(numbers)}")
    elif select == 3:
        num = int(input("Introduce un número para verificar si es par: "))
        print(f"¿El número {num} es par? {isiteven(num)}")
    elif select == 4:
        num = float(input("Introduce un número para verificar si es entero: "))
        print(f"¿El número {num} es entero? {isitaninteger(num)}")
    else:
        print("Opción no válida. Por favor, selecciona una opción entre 1 y 4.")

if __name__ == "__main__":
    main()
