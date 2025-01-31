def main():
    print("Hola aprendices")

    # Pedir dos números al usuario
    num1 = float(input("Ingrese el primer número: "))
    num2 = float(input("Ingrese el segundo número: "))

    # Suma
    suma = num1 + num2
    print("La suma de los dos números es:", suma)

    # Resta
    resta = num1- num2
    print("La resta de los dos números es:", resta)

    # Multiplicación
    multiplicacion = num1* num2
    print("La multiplicación de los dos números es:", multiplicacion)

    # División
    if num2 != 0:
        division = num1 / num2
        print("La división de los dos números es:", division)
    else:
        print("Error: No se puede dividir por cero")

    # Módulo
    modulo = num1 % num2
    print("El módulo de los dos números es:", modulo)

    # Opciones adicionales
    print("\n¿Desea realizar alguna operación adicional?")
    print("1. Elegir operación")
    print("2. Sumar tres números")
    print("3. Mezclar operaciones")
    opcion = input("Ingrese la opción deseada: ")

    if opcion == "1":
        print("\nElegir operación")
        print("1. Suma")
        print("2. Resta")
        print("3. Multiplicación")
        print("4. División")
        print("5. Módulo")
        operacion = input("Ingrese la operación deseada: ")
        if operacion == "1":
            print("La suma de los dos números es:", suma)
        elif operacion == "2":
            print("La resta de los dos números es:", resta)
        elif operacion == "3":
            print("La multiplicación de los dos números es:", multiplicacion)
        elif operacion == "4":
            if num2 != 0:
                print("La división de los dos números es:", division)
            else:
                print("Error: No se puede dividir por cero")
        elif operacion == "5":
            print("El módulo de los dos números es:", modulo)
        else:
            print("Opción inválida")

    elif opcion == "2":
        print("\nSumar tres números")
        num3 = float(input("Ingrese el tercer número: "))
        suma_tres = num1 + num2 + num3
        print("La suma de los tres números es:", suma_tres)

    elif opcion == "3":
        print("\nMezclar operaciones")
        print("Ingrese la expresión que desea evaluar (por ejemplo, 2 + 4 - 3):")
        expresion = input()
        try:
            resultado = eval(expresion)
            print("El resultado de la expresión es:", resultado)
        except Exception as e:
            print("Error:", str(e))

    else:
        print("Opción inválida")

if __name__ == "__main__":
    main()
