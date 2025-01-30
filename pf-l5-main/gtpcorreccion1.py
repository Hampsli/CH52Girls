def addmultiplenumbers(a, b, c):
    return float(a + b + c)

def multiplymultiplenumbers(a, b, c):
    return float(a * b * c)

def isiteven(a):
    return True if a == a % 2 == 0 else a == int

def isitaninterger(n1):
    return True if n1 == int

def operaciones_calculadora():
    print("1. Sumar números")
    print("2. Multiplicar números")
    print("3. Generar un valor booleano si el número es par")
    print("4. Generar valor booleano si el número es entero")

    opcion = input("Elige una opción (1-4): ")

    n1 = float(input("Introduce número 1: "))
    n2 = float(input("Introduce número 2: "))
    n3 = float(input("Introduce número 3: "))

    if opcion == "1":
        resultado = addmultiplenumbers(n1, n2, n3)
    elif opcion == "2":
        resultado = multiplymultiplenumbers(n1, n2, n3)
    elif opcion == "3":
        resultado == isiteven (n1)
    elif opcion == "4":
        resultado == isitaninterger (n1)
    return resultado

mi_resultado = operaciones_calculadora()
print("Resultado:", mi_resultado)