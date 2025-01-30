number1=int(input("ingresa un numero:"))
number2=int(input("ingresa otro numero:"))

eleccion=0
while eleccion !=6:
    print("""
    indique la operacion a realizar:

        1)suma
        2)resta
        3)multiplicacion  
        4)division
        5)cambiar numero
        6)salir
        """)
    
    eleccion = int(input())

    if eleccion == 1:
        print(" ")
        print("resultado: ",number1, "+", number2, "=", number1+number2)
    if eleccion == 2:
        print(" ")
        print("resultado: ",number1, "-", number2, "=", number1-number2)
    if eleccion == 3:
        print(" ")
        print("resultado: ",number1, "*", number2, "=", number1*number2)
    if eleccion == 4:
        print(" ")
        print("resultado: ",number1, "/", number2, "=", number1/number2)
    
    if eleccion == 5:
number1 =int(input("ingresa un numero: "))
number2 =int(input("ingresa otro numero "))
if eleccion == 5:
    print ("gracias por usar la calculadora. Atte yesi:)")