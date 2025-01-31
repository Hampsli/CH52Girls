def trivia_fetch(num):
    """Devuelve un diccionario con información sobre un número."""
    trivia = {
        1: "El número 1 es el primer número natural y representa la unidad.",
        2: "El número 2 es el único número primo par.",
        3: "El número 3 es considerado un número sagrado en muchas culturas.",
        4: "El número 4 es el número de lados de un cuadrado.",
        5: "El número 5 es el número de dedos en una mano humana.",
        10: "El número 10 es la base del sistema decimal.",
        13: "El número 13 es considerado de mala suerte en muchas culturas.",
        42: "El número 42 es la respuesta a la vida, el universo y todo, según 'La Guía del Autoestopista Galáctico'.",
        12: "El número 12 es muy común en la cultura occidental: 12 meses en un año, 12 signos del zodiaco.",
        0: "El número 0 es el único número que no es positivo ni negativo y es esencial en las matemáticas.",
        3.14: "El número 3.14 es una aproximación de pi, la constante que describe la relación entre la circunferencia de un círculo y su diámetro."
    }
    
    return {"number": num, "trivia": trivia.get(num, "No tengo información sobre ese número.")}

def main():
    """Función principal para interactuar con el usuario."""
    print("¡Hola, Bienvendios alumnos!")

    num = float(input("Ingresa un número al azar para conocer un dato curioso: "))
    resultado = trivia_fetch(num)
    print(f"Número: {resultado['number']}")
    print(f"Trivia: {resultado['trivia']}")

if __name__ == "__main__":
    main()
