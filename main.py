def trivia_fetch(num1):
    trivia_data = {
        2: {"question": "¿Cuál es el segundo número natural?", "answer": "2"},
        6: {"question": "¿Cuál es el sexto número natural?", "answer": "6"},
        1111: {"question": "¿Cuál es el número de la respuesta a la vida, el universo y todo?", "answer": "1111"}
    }
    return trivia_data.get(num1, {"question": "No se encontró trivia para este número.", "answer": "Desconocida"})

def main():
    print("¡Hola jugador!")
    
    try:
        num = int(input("Ingrese un número para obtener su trivia: "))
        trivia = trivia_fetch(num)
        print(f"Pregunta: {trivia['question']}")
        print(f"Respuesta: {trivia['answer']}")
    except ValueError:
        print("Error: Por favor, ingrese un número válido.")

if __name__ == "__main__":
    main()