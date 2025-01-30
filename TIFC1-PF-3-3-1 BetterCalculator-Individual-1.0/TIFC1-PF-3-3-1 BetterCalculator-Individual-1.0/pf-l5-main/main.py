def addmultiplenumbers(lista_num):
  return sum(lista_num)

def multiplymultiplenumbers(lista_num): #puedo usar list_num de nuevo dentro de los parentes porque cada funcion es independiente
  product= 1
  for num in lista_num:
    product *= num # es equivalente a produc = num * product
  return product

def isiteven(num):
  if num % 2 == 0:
    return True
  elif num % 2 != 0:
    return False

def isitaninteger(num):
  if round(num) == num:
    return True
  if round(num) != num:
    return False

def main():
  print("Hello learners!")
  lista =[2,5,3]
  suma = addmultiplenumbers(lista)
  print(suma) # tambien se puese imprimir asi: print (addmultiplenumbers(lista))

  print(multiplymultiplenumbers(lista))                                                                                                                                                                                           

  num= 3
  print(isiteven (num))

  print(isitaninteger (num))

  
if __name__=="__main__":
  main()