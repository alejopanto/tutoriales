def hello():
    print('Hello world')

hello()

def saludo(name): #Si no pongo parametros al llamar la funcion queda vacia
    print('Saludando a ', name)
saludo('Jose')

def saludos(name = 'Person'): #Le puedo poner valores por default
    print('Saludando a ', name)
saludos()

def sumar(n1, n2):
    return n1 + n2 #Puedo directamente retornar informacion
print(sumar(1,5))

add = lambda n1, n2: n1 + n2 #Con lambda se puede crear funciones sin nombre
print(add(10,20))