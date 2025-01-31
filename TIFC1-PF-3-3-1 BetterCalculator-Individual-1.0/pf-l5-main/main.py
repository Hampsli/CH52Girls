
print("Hello learners!")
print("1) Sumar elementos de una lista")
print("2) Multiplicar elementos de una lista")
print("3) Definir si un numero es par")
print("4) Definir si un numero es entero")
################################
def SumaLista(): 
    Lista=[]
    Rango= int(input("porfavor, dame un rango: "))
    for i in range(Rango):
        Lista.append(int(input("porfavor, dame un numero: ")))
  
    Suma=0
    for j in Lista:
        Suma += j

    print("la lista es:",Lista)
    print("la suma es:",Suma)
####################################
def MultiLista():
    Lista=[]
    Rango= int(input("porfavor, dame un rango: "))
    for i in range(Rango):
        Lista.append(int(input("porfavor, dame un numero: ")))
  
    Multiplicacion=1
    j=1
    for j in Lista:
        Multiplicacion=Multiplicacion*Lista[j]

    print("la lista es:",Lista)
    print("la multiplicacion es:",Multiplicacion)
##########################################
def NumPar():
   Numero=int(input("porfavor, dame un numero "))
   if Numero%2==0:
       print("El numero ",Numero," es par")

   else:
       print("el numero", Numero, " NO es par")
########################################  
def Entero():
   
    print("Dame un numero: ")
    Numero=float(input())
    NumeroInt=int(Numero)
    NumeroFInt=float(NumeroInt)
    if Numero-NumeroFInt==0:
        print("el numero ",Numero, " es entero")
    else:
        print("el numero ",Numero, " NO es entero")
            
##########################################
Num=int(input("Coloca el numero de la funcion deseada: "))
if  Num==1:
    SumaLista()
elif Num==2:
    MultiLista()
elif Num==3:
    NumPar()
elif Num==4:
    Entero()



    