demo_list = [1, 2.5, 'Hola', True]
colors = ['blue', 'red', 'orange', 'red']
 
numbers_list = list((1, 2, 3, 4)) #Permite crear una lista con list(), pero recibe 1 solo argumento en este caso una tupla ()
# print(numbers_list)

r = list(range(1, 10)) #range() me pertire sacar un rango, y lis() me permite mirarlo en una lista
# print(r)
# print(dir(r)) #Puedo ver las propiedades de una lista
# print(len(demo_list)) #puedo ver cuantos datos tiene una lista
# print(demo_list[2]) #Me retorna el campo en la posicion 

# print('hola' in demo_list) #Me permite consultar por un campo en la lista (True o False)

# print(colors)
# colors[1] = 'yellow' #de esta manera puedo reemplazar el campo dentro de una lista
# print(colors)

# ---------------------------------------

# colors.append('yellow') #Permite agregar un nuevo campo a una lista
# colors.append(('yellow', 'gray')) #No permite agregar mas de 1, ni con tupla ni con lista

# colors.extend(['yellow', 'gray']) #Extiende la lista con mas de un argumento nuevo al final

# colors.insert(1, 'yellow') #Permite ingresar un nuevo campo en una posicion seleccionada
# colors.insert(len(colors), 'violet') #De esta manera agrega un valor al final de la lista de otra manera a extend()

print(colors)
# colors.pop() #Me permite borrar el ultimo campo de una lista, si lo llamo varias veces, borra varios campos
# colors.pop(1) #De esta manera elimino bajo el indice

# colors.remove('red') #De esta manera elimino un campo espesifico de la lista
# colors.clear() #Me permite limpiar la lista y dejarla vacia

# colors.sort() #Me permite agrepar en orden alfabetico
# print(colors)
# colors.sort(reverse = True) #Me permite agrepar en orden alfabetico inverso

print(colors.index('blue')) #Me permite buscar un indice en una lista
print(colors.count('red')) #Me permite contar la cantidad de datos que este buscando