num1= input("escribe un número: ")
num2= input("escribe un segundo número: ")

num1= int(num1)
num2= int(num2)
suma = num1 + num2
print ("El resultado de la suma es: ", suma)

#resta
resta= num1- num2
print ("El resultados de la resta es: ", resta)

#multiplicacion
multi= num1* num2
print ("El resultado de multiplicarlos es: ", multi)

#division
division= num1/num2
print ("el resultado de dividir es: ", division)

#Modulo
modulo= num1% num2
print ("El modulo es: ", modulo)

#Eleccion de operacion por el usuario

respuesta= input("quiero realizar una suma (responde si o no en minúsculas): ")
if respuesta == "si" :
    print ("El resultado de la suma es: ", suma)
elif respuesta == "no" :
    respuesta = input("quiero realizar una resta (responde si o no en minúsculas): ")
    if respuesta == "si":
        print ("El resultados de la resta es: ", resta)
    elif respuesta == "no" :
        respuesta = input("quiero realizar una multiplicación (responde si o no en minúsculas): ")
        if respuesta == "si" :
            print ("El resultado de multiplicarlos es: ", multi)
        elif respuesta == "no" :
            respuesta= input("quiero realizar una división (responde si o no en minúsculas): ")
            if respuesta == "si" :
                print ("el resultado de dividir es: ", division)
            elif respuesta == "no" :
                respuesta= input("quiero saber el modulo (responde si o no en minúsculas): ")
                if respuesta == "si" :
                    print ("El modulo es: ", modulo)
                else :
                    print("lo sentimos ya no hay mas opciones")

#Elige el numero de operacion que quieres hacer (dar opciones con numeros y explicacion)

respuesta2= input(" Escribe solo el numero de operacion que quieres realizar, 1= suma, 2= resta, 3= multiplicacion, 4= division y 5= modulo: ")
if respuesta2== "1":
    print ("El resultado de la suma es: ", suma)
elif respuesta2== "2":
    print ("El resultados de la resta es: ", resta)
elif respuesta2== "3":
    print ("El resultado de multiplicarlos es: ", multi)
elif respuesta2== "4":
    print ("el resultado de dividir es: ", division)
elif respuesta2== "5":
    print ("El modulo es: ", modulo)
else :
     print("por favor intenta teclear de nuevo un numero existente")