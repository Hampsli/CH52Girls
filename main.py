def trivia_fetch(num):
  trivia= {
    "Es un numero bonito": num + 26,
    "Es de la suerte": num * 2,
    "Es el numero de platos que debes de tener": num * 7,
    "Son las sentadillas de hoy": num + 15,
    "Si lo divides entre 8 y lo multiplicas po 80 te da: ": (num/8)*80
  }
  return trivia  

print ("Hola usuario")
num = int (input ("Ingrese un numero para mostrarte sus trivialidades: "))
resultado= trivia_fetch(num)
print(f"Las trivialidades son: {resultado}")
