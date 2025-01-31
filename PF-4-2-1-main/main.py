# Función trivia_fetch
def trivia_fetch(num):
    """
    Devuelve un diccionario con datos curiosos sobre el número dado.
    """
    # Datos de trivia
    trivia_data = {
        42: {"number": 42, "trivia": "42 es la respuesta a la gran pregunta sobre la vida, el universo y todo."},
        1000: {"number": 1000, "trivia": "1000 es un milenio, que representa 1000 años."},
        7: {"number": 7, "trivia": "7 es de la suerte. Eres un suertudote."},
        13: {"number": 13, "trivia": "13 es de mala suerte. Vete a hacer una limpia"},
    }

    # si no da el numero de las opciones
    return trivia_data.get(num, {"number": num, "trivia": "No hay datos curiosos en este número."})


# Función principal
def main():
    print("Bienvenido al Quiz de trivia sobre números!")
    while True:
        try:
            # Pide al usuario un número
            num = int(input("Ingresa un número escogiendo entre el 7, 13, 42 y 1000 para aprender algo curioso (o escribe '0' para salir): "))
            
            # Sale del bucle si el usuario ingresa 0
            if num == 0:
                print("Gracias por jugar")
                break

            # Obtiene la trivia para el número
            trivia = trivia_fetch(num)

            # Muestra la trivia
            print(f"Trivia sobre el número {trivia['number']}: {trivia['trivia']}\n")

        except ValueError:
            print("Entrada inválida. Por favor, ingresa un número válido.\n")


# Código boilerplate para ejecutar el programa
if __name__ == "__main__":
    main()