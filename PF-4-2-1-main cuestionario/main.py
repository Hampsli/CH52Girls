questions = [  # este es una muestrita de preguntas que usara el cuestionario
    {"question": "¿Cuál es la capital de mexico?", "answer": "cdmx"},
    {"question": "¿como se llama la instructora de codigo (completo)?", "answer": "liliana"},
    {"question": "¿Donde escribes tu codigo?", "answer": "visual studio"}
]

# Función para hacer el cuestionario
def cuestionario():
    print("¡Bienvenida al cuestionario!")
    score = 0  # Para llevar el conteo de las respuestas correctas
    
    for q in questions: #for para item en la secuencuencia y se ejecuta por cada item/en este caso q)
        print(q["question"])  # esto es para mostrar las preguntas
        respuesta = input("Tu respuesta: ")  # recibe la respuesta
        
        if respuesta.strip().lower() == q["answer"].lower():  # Compara la respuesta. Strip suprime blancos o caracteres antes o despues de la oracion 
            print("¡Correcto!")
            score += 1  # esto suma los puntos de lo que escribi correcto (el score)
        else:
            print(f"Incorrecto. La respuesta correcta es: {q['answer']}") #la f es funcion.
    
    # Mostrar el resultado final
    print(f"Tu puntuación final es: {score} de {len(questions)}")

# Ejecutar el cuestionario
cuestionario()



#name == main"
#main()