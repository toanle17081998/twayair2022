@extends('frontend.layouts.home')
 
@section('title')
    <title>Tway Air</title>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('client/css/home.css') }}">
@endsection
@section('content')
    <main class="wrapper">
        <section class="home">
            @include('frontend.home.components.search')
            @include('frontend.home.components.book')
            @include('frontend.home.components.services')
            @include('frontend.home.components.intern')
            @include('frontend.home.components.hightlight')
            @include('frontend.home.components.destination')
            @include('frontend.home.components.letter')
        </section>
    </main>
@endsection

@section('js')
    <script src="{{ asset('client/js/home.js') }}"></script>
@endsection


