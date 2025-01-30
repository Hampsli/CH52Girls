def main(): 
    print("Hello learners!")

    num = input("Write your numbers separated by commas: ")
    numbers = [float(n) for n in num.split(",")] #se utiliza num.split para separar los números de la string, en este caso, n flotantes en la lista num, separados por comas
                                                  #elegí flotantes para que así se consideren números enteros o decimales al usar la calculadora
    print(f"{addmultiplenumbers(numbers)}")
    print(f"{multiplymultiplenumbers(numbers)}")
    print(f"{isiteven(numbers[0])}")
    print(f"{isitaninteger(numbers[0])}") #se tienen que escribir los prints dentro de main() para que no los intente leer antes de definir la lista
                                          #Ponemos 0 para que empiece desde el elemento cero de la lista, es decir, únicamente el primero
# sum
def addmultiplenumbers(numbers): #aprendí que python ya tine la función sum y no es necesario crear la función
    return sum(numbers) #va a regresar la suma de todos los números de la lista numbers

# multiplication
def multiplymultiplenumbers(numbers):
    product = 1.0 #como queremos que considere números decimales, si el número en lista se multiplica por 1 da el mismo número, que puede ser decimal
    for num in numbers:  #por cada num en números (es decir, en cada iteración) va a multiplicar el producto por el número en turno
        product *= num  
    return product  #y regresamos la multiplicación de todos los números y esa ultiplicacion es el producto

# Even or not
def isiteven(num):            
    return num % 2 == 0 # Si es divisible entre 2, regresa True, chatgpt me explicó que no es necesario agregar condiciones

# Intergers boolean
def isitaninteger(num):
    return num.is_integer() #Esto revisa si el número flotante es un entero.


if __name__ == "__main__":
    main()
