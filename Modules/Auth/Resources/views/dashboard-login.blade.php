<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>Dashboard Login</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--===============================================================================================-->
        <link rel="icon" type="image/png" href="{{ asset('images/icons/login-favicon.ico') }}"/>
        <!--===============================================================================================-->
        {{--<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">--}}
        <!--===============================================================================================-->
        {{--<script src="https://use.fontawesome.com/7a0f596a84.js"></script>--}}
        <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="{{ asset('fonts/iconic/css/material-design-iconic-font.min.css') }}">
        <!--===============================================================================================-->
        <link rel="stylesheet" href="{{ asset('css/dashboard-login.css') }}">
        <!--===============================================================================================-->
    </head>
    <body>
        <div class="container-login100" style="background-image: url('{{ asset('images/assets/login-bg.jpg') }}');">

            <div class="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">

                <form class="login100-form validate-form" autocomplete="off">
                        <span class="login100-form-title p-b-37">
                            Dashboard
                        </span>

                    <div class="wrap-input100 validate-input m-b-20" data-validate="Enter email">
                        <input readonly class="input100" type="email" name="email" value="" placeholder="Email" onfocus="if (this.hasAttribute('readonly')) { this.removeAttribute('readonly');this.blur();this.focus();  }">
                        <span class="focus-input100"></span>
                    </div>

                    <div class="wrap-input100 validate-input m-b-25" data-validate = "Enter password">
                        <input readonly class="input100" type="password" name="password" value="" placeholder="password" onfocus="if (this.hasAttribute('readonly')) { this.removeAttribute('readonly');this.blur();this.focus();  }">
                        <span class="focus-input100"></span>
                    </div>

                    <div class="wrap-input100 validate-input m-b-25 m-l-8" data-validate = "Enter password">
                        <input type="checkbox" name="rememberme" id="rem"/><label for="rem" class="m-l-5 txt2 fs-18">Remember Me</label>
                    </div>

                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn">
                            Login
                        </button>
                    </div>
                    <div class="container-login100-form-btn m-t-10">
                        <a href="#" class="txt2 fs-12">Forget Password ?</a>
                    </div>
                </form>

            </div>

        </div>


        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        {{--<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>--}}
        {{--<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>--}}
        <!--===============================================================================================-->
        <script src="{{ asset('js/dashboard-login.js') }}"></script>
    </body>
</html>
