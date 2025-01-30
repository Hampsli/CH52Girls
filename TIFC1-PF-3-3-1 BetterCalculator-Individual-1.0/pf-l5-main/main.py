
print("Hello learners!")
def SumaLista(): 
    Lista=[]
    Rango= int(input("porfavor, dame un rangoo: "))
    for i in range(Rango):
        Lista.append(int(input("porfavor, dame un numero: ")))
  
    Suma=0
    for j in Lista:
        Suma += j

    print("la lista es:",Lista)
    print("la suma es:",Suma)

Num=int(input("Si quieres hacer 1)Sumar una lista,  coloca el numero"))
if  Num==1:
    SumaLista()
elif Num == 2:
    print("Haz b")
elif Num == 3:
    print("Haz c")
else:
    print("Haz d")



    