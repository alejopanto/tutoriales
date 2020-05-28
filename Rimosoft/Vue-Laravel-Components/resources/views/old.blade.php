<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="register" method="post">
        @csrf

        <label for="name">Nombre</label>
        <input type="text" name="name" value="{{old('name')}}"> <br>
        
        <label for="lastname">Apellido</label>
        <input type="text" name="lastname" value="{{old('lastname')}}"> <br>
        <input type="submit" value="ENVIAR">
    </form>
</body>
</html>