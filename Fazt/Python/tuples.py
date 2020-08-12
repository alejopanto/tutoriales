x = (1, 2, 3) #Las tuplas no pueden tener 1 solo caracter a menos que se agrege al final una ,
print(x)
print(type(x))
t = tuple((1,2,3,4)) #se crean tuplas con ()
print(t[1]) #Se pueden ver los indices
del t #Elimina 
print(t)

#Se pueden usar las tuplas para ingresar informacion NO MODIFICABLE dentro de un diccionario
locations = {
    (39.154,  30.554) : 'Tokio',
    (10.4878, 85.45477) : 'New York'
}