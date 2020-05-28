<?php

/*
|   ruta y funcionalidad con VUE
*/

Route::get('/', function () {
    return view('home');
});

Route::get('mis-ideas', 'IdeaController@getIdeas');
Route::post('guardar-idea', 'IdeaController@store');

/*
|   Ruta a funcionalidad con el formulario
*/

Route::get('form', function () {
    return view('file');
});

Route::post('file', function (Illuminate\Http\Request $request) {
    dd($request->all());
    return ('Procesando');
});