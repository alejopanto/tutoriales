colors = {'Red', 'Blue', 'Green'}
print(type(colors)) #Se conoce como set cuando esta bajo {} pero no tiene Indice
print(colors)
print('Red' in colors) #Valida q exista el campo dentro del set
colors.add('Violet') #Agrega el nuevo campo al inicio, al no existir indice
print(colors)
colors.remove('Blue') #Elimina un campo del set 
print(colors)
colors.clear() #Limpia el Set completo
print(colors)
del colors #Elimina 
print(colors)