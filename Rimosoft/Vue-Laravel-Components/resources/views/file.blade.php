<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>File</title>
</head>
<body>
    <h1>Subir Archivos</h1>
    <form action="file" method="POST" enctype="multipart/form-data">
        @csrf
        <label for="name">Nombre</label>
        <input type="text" name="name"><br>

        <input type="file" name="file"><br>

        <input type="submit" value="Enviar">
    </form>
</body>
</html>