def main():
  print("Hello learners!")

def addmultiplenumbers():
    numeros = obtener_numeros("Ingresa los números que quieres sumar,separalos con comas): ")
    return sum(numeros)

def multiplymultiplenumbers():
    numeros = obtener_numeros("Ingresa los números que quieres multiplicar,separalos con comas): ")
    resultado = 1 #Iniciamos en 1
    for num in numeros:#Recorre todos los elementos del array se multiplicaran
        resultado *= num #Trata a cada uno de los elementos del array como una variable
    return resultado

def isiteven(num):
    return num % 2 == 0

def isitaninteger(num):
    return num == int(num)

def obtener_numeros(mensaje):#Para validar los datos que ingresa el usuario
    while True:# Mientras el usuario siga metiendo numeros
        entrada = input(mensaje).strip()#Strip eliminas los espacio al inicio y final del input
        valores = entrada.split(",")#split separa a un string con un limitador en este caso "," y cada valor separado es un valor de un array, lo vamos a asiganr a una posicion del array
        
        if all(es_numero(valor) for valor in valores):  # Si todos son números válidos [1,2,3]
            return [float(valor) for valor in valores] # [1.00, 2.00, 3.32]

        print("Error: Ingrese solo números válidos separados con comas")

def es_numero(valor):
    # Verifica si un valor ingresado es un número (entero o flotante)
    if valor.isdigit():  # Si es un número entero, un digito
        return True
    if valor.count(".") == 1:  # Si contiene un solo punto
        parte_entera, parte_decimal = valor.split(".")
        if parte_entera.isdigit() and parte_decimal.isdigit():  # Si ambas partes son números
            return True
    return False

def validar_opcion(opciones):
    """ Valida que la opción seleccionada sea válida. """
    opcion = input("Seleccione una opción: ")
    while opcion not in opciones:
        print("Opción no válida. Intente de nuevo.")
        opcion = input("Seleccione una opción: ")
    return opcion

def calculadora():
    opciones = { # este es un objeto porq son llaves
        "1": "Sumar múltiples números",
        "2": "Multiplicar múltiples números",
        "3": "Verificar si un número es par",
        "4": "Verificar si un número es entero",
        "5": "Salir"
    }
    
    while True:
        print("Super Calculadora")
        for key, value in opciones.items():
            print(f"{key}. {value}")
        
        opcion = validar_opcion(opciones.keys())

        if opcion == "5":
            print("Estas saliendo de la Super Calculadora. ¡Bye , Bye!")
            break

        if opcion == "1":
            print(f"Resultado: {addmultiplenumbers()}")

        elif opcion == "2":
            print(f"Resultado: {multiplymultiplenumbers()}")

        elif opcion == "3":
            num = obtener_numeros("Ingrese un número para verificar si es par: ")[0]
            print("True" if isiteven(num) else "False")

        elif opcion == "4":
            num = obtener_numeros("Ingrese un número para verificar si es entero: ")[0]
            print("True" if isitaninteger(num) else "False")

if __name__ == "__main__":
    calculadora()
