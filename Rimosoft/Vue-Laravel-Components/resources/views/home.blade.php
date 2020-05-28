<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {{-- <meta name="csrf-token" content="{{ csrf_token() }}"> --}}

        <title>Vue Laravel Component</title>

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-2" >
                    <div id="app">
                        <idea-component></idea-component>
                    </div>
                </div>
            </div>
        </div>


        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
