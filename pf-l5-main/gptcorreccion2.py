def addmultiplenumbers(a, b, c):
    return float(a + b + c)

def multiplymultiplenumbers(a, b, c):
    return float(a * b * c)

def isiteven(a):
    return a % 2 == 0  # Devuelve True si es par, False si es impar

def isitaninterger(n1):
    return n1.is_integer()  # Verifica si el número tiene parte decimal

def operaciones_calculadora():
    print("1. Sumar números")
    print("2. Multiplicar números")
    print("3. Generar un valor booleano si el número es par")
    print("4. Generar un valor booleano si el número es entero")

    opcion = input("Elige una opción (1-4): ")

    if opcion in ["1", "2"]:
        n1 = float(input("Introduce número 1: "))
        n2 = float(input("Introduce número 2: "))
        n3 = float(input("Introduce número 3: "))

        if opcion == "1":
            resultado = addmultiplenumbers(n1, n2, n3)
        else:
            resultado = multiplymultiplenumbers(n1, n2, n3)

    elif opcion in ["3", "4"]:
        n1 = float(input("Introduce un número: "))

        if opcion == "3":
            resultado = isiteven(n1)
        else:
            resultado = isitaninterger(n1)

    else:
        print("Opción no válida")
        return None

    return resultado

mi_resultado = operaciones_calculadora()
if mi_resultado is not None:
    print("Resultado:", mi_resultado)
