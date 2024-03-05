<!DOCTYPE html>
<html lang="vi">
<head>
    @yield('title')
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" type="image/x-icon" href="#">
    <link rel="stylesheet" href="{{ asset('client/css/libs/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('client/css/libs/t-datepicker.min.css') }}">
    <link rel="stylesheet" href="{{ asset('client/css/libs/t-datepicker-purple.css') }}">
    <link rel="stylesheet" href="{{ asset('client/css/styles.css') }}">
    <link rel="stylesheet" href="{{ asset('client/css/customize.css') }}">
    @yield('css')
</head>

<body ontouchstart="">

    @include('frontend.partials.header')

    @yield('content')

    @include('frontend.partials.footer')
    
    <script src="{{ asset('client/js/jquery-3.3.1.min.js') }}"></script>
    <script src="{{ asset('client/js/popper.min.js') }}"></script>
    <script src="{{ asset('client/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('client/js/slick.min.js') }}"></script>
    <script src="{{ asset('client/js/t-datepicker.min.js') }}"></script>
    @yield('js')
</body>
</html>