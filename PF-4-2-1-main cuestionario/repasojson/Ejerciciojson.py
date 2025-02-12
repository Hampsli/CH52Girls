import json

def crear_json_paises_cortos(): #crear dos listas una para la longitud del nombre y otra para guardarlos cuando los identifique.
    lista_de_longitud = []
    paises_cortos = []

    with open('countries.json','r') as leer : #abre el json y se puede "leer o "escribir" (variable)
        paises = json.load(leer) #aqui le pide usar paises y cargarlos para leerlos
    
    for pais in paises:
        var = pais['Name']
        lista_de_longitud.append(len(var))
    #print(lista_de_longitud)                #aca ya le pido que los junte (agregue) y los muestre (print)

    chico = min(lista_de_longitud) # esto es un avariable donde digo que chico es minimo

    for pais in paises:
        if len(pais['Name']) == chico: #aqui se compara el tamaño con len con el minimo que puse en 15
            paises_cortos.append(pais)
    #print(paises_cortos)

    with open('countries_new.json', 'w') as nuevo: #abre otro archivo y almacena los datos ahi (dump)
        json.dump(paises_cortos,nuevo)
    
    with open('countries_new.json') as leer: #esto le el archivo recien creado con los valores que le pedi
        ver = json.load(leer)
    
    return print(f' Los paises de longitud mas corta son  {ver}') #aqui termina la funcion y me da los valores que quiero

crear_json_paises_cortos() 