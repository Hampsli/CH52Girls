#Write a program that takes two input numbers, then adds them together and prints the result.
print("Ingresa un primer numero entero:")
number_1 = int(input())
print("Ingresa un segundos numero entero:")
number_2 = int(input())

sumaNumeros = number_1 + number_2
print("La suma de tus numeros es:" + " " + str(sumaNumeros))

#Take two numbers and subtract the second from the first number.
restaNumeros = number_1 - number_2
print("La resta de tus numeros es:" + " " + str(restaNumeros))

#Take two numbers and multiply the two.
multiplicacionNumeros = number_1 * number_2
print("La multiplicacion de tus numeros es:" + " " + str(multiplicacionNumeros))

#Take two numbers and divide the first number by the second number.
divisionNumeros = number_1 / number_2
print("La division de tus numeros es:" + " " + str(divisionNumeros))

#Take two numbers and perform a modulus operation.
restoDivision = number_1 % number_2
print("El modulo de tus numeros es:" + " " + str(restoDivision))


