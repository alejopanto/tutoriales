<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>post</title>
</head>
<body>
    <h1>Registro</h1>
    <form action="csrf" method="POST">
        @csrf
        <input type="text" name="name">
        <input type="submit" value="ENVIAR">
    </form>
</body>
</html>