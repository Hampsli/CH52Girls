def addmultiplenumbers(numbers):
    """Devuelve la suma de una lista de números."""
    return sum(numbers)

def multiplymultiplenumbers(numbers):
    """Devuelve el resultado de multiplicar en secuencia todos los números en la lista."""
    if not numbers:
        return 1  # Retorna 1 porque es el elemento neutro de la multiplicación
    resultado = 1
    for num in numbers:
        resultado *= num
    return resultado

def isiteven(num):
    """Devuelve True si el número es par, de lo contrario devuelve False."""
    return num % 2 == 0

def isitaninteger(num):
    """Devuelve True si el número es un entero, de lo contrario devuelve False."""
    return isinstance(num, int)

def main():
    """Función principal para operar como calculadora."""
    print("Hello learners!")  # Mensaje de bienvenida
    
    print("Bienvenido a la calculadora interactiva.")
    
    while True:
        print("\nOpciones de operación:")
        print("1. Sumar números")
        print("2. Multiplicar números")
        print("3. Verificar si un número es par")
        print("4. Verificar si un número es entero")
        print("5. Salir")
        
        # Solicitar al usuario seleccionar una operación
        choice = input("Seleccione una opción (1/2/3/4/5): ")

        if choice == '1':
            # Sumar números
            nums = input("Ingrese una lista de números separados por espacio: ").split()
            nums = [float(num) for num in nums]  # Convertir los valores a flotantes
            print(f"La suma es: {addmultiplenumbers(nums)}")
        
        elif choice == '2':
            # Multiplicar números
            nums = input("Ingrese una lista de números separados por espacio: ").split()
            nums = [float(num) for num in nums]  # Convertir los valores a flotantes
            print(f"La multiplicación es: {multiplymultiplenumbers(nums)}")
        
        elif choice == '3':
            # Verificar si es par
            num = int(input("Ingrese un número para verificar si es par: "))
            print(f"¿Es {num} par? {isiteven(num)}")
        
        elif choice == '4':
            # Verificar si es entero
            num = input("Ingrese un número para verificar si es entero: ")
            if isitaninteger(float(num)):  # Convertir a flotante antes de verificar si es entero
                print(f"El número {num} es entero.")
            else:
                print(f"El número {num} no es entero.")
        
        elif choice == '5':
            print("Gracias por usar la calculadora. ¡Hasta pronto!")
            break
        else:
            print("Opción no válida, por favor ingrese una opción correcta.")

if __name__ == "__main__":
    main()



