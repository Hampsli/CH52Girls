def trivia_fetch(num):
    """
    Devuelve un diccionario con trivia sobre el número proporcionado.
    """
    trivia = {
        1: {"dato": "El número 1 es el primer número natural."},
        2: {"dato": "El número 2 es el único número primo par."},
        3: {"dato": "El número 3 es el primer número impar."},
        10: {"dato": "El número 10 es la base del sistema decimal."},
        100: {"dato": "El número 100 es el cuadrado de 10."},
        7: {"dato": "El número 7 es considerado un número de la suerte en varias culturas."},
        13: {"dato": "El número 13 es considerado de mala suerte en muchas culturas."},
    }

    return trivia.get(num, {"dato": f"No hay trivia disponible para el número {num}."})

def main():
    print("¡Hello learners!")
    # Pide al usuario que ingrese un número
    try:
        numero = int(input("Por favor, elige un número: 1,2,3,7,10,13,100"))
        # Obtén la trivia relacionada con ese número
        trivia = trivia_fetch(numero)
        # Muestra la trivia al usuario
        print(f"Trivia sobre el número {numero}: {trivia['dato']}")
    except ValueError:
        print("Por favor, ingresa un número válido.")

# Esta línea asegura que el código solo se ejecute cuando se invoca directamente el archivo
if __name__ == "__main__":
    main()
