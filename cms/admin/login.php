<?php
session_start();
if (isset($_SESSION['login'])){
    $url="../index/index.php";
    $message="已登录";
    include 'wait.php';
    exit();
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../static/css/bootstrap.min.css">
    <link rel="stylesheet" href="../static/fonts/glyphicons-halflings-regular.svg">
    <script src="../static/js/jquery-3.2.1.js"></script>
    <script src="../static/js/jquery.validate.js"></script>
    <title>Document</title>
    <style>
        form{
            width: 300px;
            height: 300px;
            border: 1px solid #cccccc;
            border-radius: 8px;
            position: fixed;
            left: 0;right: 0;
            top: 0;bottom: 0;
            margin: auto;
            padding:20px;
        }
        #exampleInputEmail1-error{
            position: absolute;
            right: 12px;
            top: 32px;
            color: red;
        }
        .form-group{
            position: relative;
        }
    </style>
</head>
<body>
<form action="checkLogin.php" method="post">
    <div class="form-group">
        <label for="exampleInputEmail1">用户名</label>
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="User" name="aname">
        <label id="exampleInputEmail1-error" class="error" for="exampleInputEmail1"></label>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="apass">
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox">记住密码
        </label>
    </div>
    <br>
    <button type="submit" class="btn btn-default">登录</button>
</form>
<script>
    $(function () {
        $('form').validate({
            rules:{
                aname:{
                    required:true,
                    minlength:2
                }
            },
            messages:{
                aname:{
                    required:"用户名必填",
                    minlength:"最少为2位"
                }
            }
        })
    })
</script>
</body>
</html>