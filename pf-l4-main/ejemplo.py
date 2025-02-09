operacion = input("elige una opcion\n 1.Suma \n 2.Resta \n 3.Division \n 4.Multiplicacion \n")

if operacion == "1":
    print("Ingrese un número")
    a = float(input())
    print("Ingrese el número que se va a sumar")
    b = float(input())
    suma = (a + b)
    print("El resultado de la suma es:", suma)


print(" el numero que tecleaste es : ", operacion)
    