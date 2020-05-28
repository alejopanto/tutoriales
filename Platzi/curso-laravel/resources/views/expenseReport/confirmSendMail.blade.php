@extends('layouts.app')

@section('content')
    <div class="content">
        <div class="row">
            <div class="col">
                <h1>Send Report</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
            <a class="btn btn-secondary" href="/expense-reports/{{$report->id}}">Back</a>
            </div>
        </div>
        <div class="row">
            <div class="col">

                @if ($errors -> any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{$error}}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                
                <form action="/expense-reports/{{$report->id}}/sedMail" method="POST">
                    @csrf
                    <div class="form-group">
                        <label for="email">Email: </label>
                    <input type="text" class="form-control" id="email" name="email" placeholder="Type a email" value="{{old('email')}}">
                    </div>
                    <button class="btn btn-primary" type="submit">Send Mail</button>
                </form>
            </div>
        </div>
    </div>
@endsection