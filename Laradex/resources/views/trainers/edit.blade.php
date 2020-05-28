@extends('layouts.app')

@section('title', 'Trainer Edit')

@section('content')

    <img style="height: 200px; width: 200px; background-color: #EFEFEF; margin: 20px" class="card-img-top rounded-circle mx-auto d-block" src="/images/{{$trainer->avatar}}" alt="">
    
    <form class="form-group" method="POST" action="/trainers/{{$trainer->slug}}" enctype="multipart/form-data">
        @method('PUT')
        @csrf
        @include('trainers.form')
        <button type="submit" class="btn btn-primary">Actualizar</button>
    </form>
    
@endsection