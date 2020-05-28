@extends('layouts.app')

@section('title', 'Trainer')

@section('content')
    
    @include('common.success')

    <img style="height: 200px; width: 200px; background-color: #EFEFEF; margin: 20px;" class="card-img-top rounded-circle mx-auto d-block" src="/images/{{$trainer->avatar}}" alt=""> 
    <div class="text-center">
        <h5 class="card-title">{{$trainer->name}}</h5>
        <p>{{$trainer->description}}</p>
        <a href="/trainers/{{$trainer -> slug}}/edit" class="btn btn-primary">Editar</a>

        <form method="POST" action="/trainers/{{$trainer->slug}}">
            @method('DELETE')
            @csrf
            <button type="submit" class="btn btn-danger">Eliminar</button>
        </form>
    </div>

    <modal-button></modal-button>
    <create-form-pokemon></create-form-pokemon>
    <list-of-pokemons></list-of-pokemons>
    
@endsection