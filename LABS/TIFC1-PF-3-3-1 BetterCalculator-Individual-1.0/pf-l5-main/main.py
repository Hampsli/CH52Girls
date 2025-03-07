# Funcion para sumar varios numeros
def addmultiplenumbers(numeros): 
    total = 0 
    for numero in numeros: 
        total = total + numero    
    return total

#Funcion para multiplicar varios numeros
def multiplymultiplenumbers(numeros):
    total = 1 
    for numero in numeros:
        total = total * numero 
    return total

#Funcion para saber si es un numero par
def isiteven(numero):
    if numero % 2 == 0: 
        return True 
    return False 

#Funcion para saber si es un numero entero
def isitaninteger(numero):  
   if float(numero).is_integer():  # Convierte a float y chequea si es un número entero
        return True
   return False
  


def main():
    while True:
        print('Calculadora')
        print('1. Sumar varios numeros')
        print('2. Multiplicar varios numeros')
        print('3. Verificar si es par o impar')
        print('4. Verificar si es un numero entero')
        print('5. Salir')

        opcion = input('Selecciona una opcion: ')

        if opcion == '1':
            total_numeros = int(input('Cuantos numeros quieres sumar? '))
            numeros = []

            for i in range(total_numeros):
                numero = int(input('Ingresa un numero: '))
                numeros.append(numero)

            #Llamando a la funcion de suma
            resultado = addmultiplenumbers(numeros)
            print('El resultado de la suma es: ', resultado)

        elif opcion == '2':
            total_numeros = int(input('Cuantos numeros quieres multiplicar? '))
            numeros = []

            for i in range(total_numeros):
                numero = int(input('Ingresa un numero: '))
                numeros.append(numero)

            #Llamando a la funcion de multiplicacion
            resultado = multiplymultiplenumbers(numeros)
            print('El resultado de la multiplicacion es: ', resultado)

        elif opcion == '3':
            numero = int(input('Ingresa un numero para verificar si es par: '))
            
            #Llamando a la funcion de par o impar
            resultado = isiteven(numero)
            print('Es par? ', resultado)

        elif opcion == '4':
            numero = float(input('Ingresa un numero para verificar si es entero: '))
            
            #Llamando a la funcion de enteros
            resultado = isitaninteger(numero)
            print('Es entero? ',resultado)


        elif opcion == '5':
            break

        else:
            print('Ingresa un dato valido')


if __name__ == "__main__":
    main()
