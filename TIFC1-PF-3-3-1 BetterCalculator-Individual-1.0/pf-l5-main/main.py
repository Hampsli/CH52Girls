
print("Hello learners!")
def SumaLista(): 
    Lista=[]
  
    for i in range(3):
        Lista.append(input("porfavor, dame un numero: "))
    print("la lista es:",Lista[0])

Num=int(input("Si quieres hacer 1)Sumar una lista,  coloca el numero"))
if  Num==1:
    SumaLista()
elif Num == 2:
    print("Haz b")
elif Num == 3:
    print("Haz c")
else:
    print("Haz d")



    