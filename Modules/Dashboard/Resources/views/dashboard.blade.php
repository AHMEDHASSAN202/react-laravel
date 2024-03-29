<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>React dashboard</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <!-- <link rel="stylesheet" href="{{ asset('css/dashboard-app.css') }}" /> -->
        @include('dashboard::load')
    </head>
    <body dir="{{ $visitor->language_direction }}">
        <div id="app"></div>
        <script src="{{ asset('js/dashboard-app.js') }}"></script>
    </body>
</html>
