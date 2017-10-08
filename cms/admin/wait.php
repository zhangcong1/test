<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../static/js/jquery-3.2.1.js"></script>
    <style>
        .box{
            width: 300px;
            height: 220px;
            border: 1px solid #cccccc;
            border-radius: 10px;
            position: fixed;
            left: 0;right: 0;
            top: 0;bottom: 0;
            margin: auto;
        }
        h3{
            width: 100%;
            height: 50px;
            background: #cccccc;
            text-align: center;
            line-height: 50px;
            margin: 0;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
        .word1,.word2,.word3{
            width: 100%;
            padding-top: 20px;
            font-size: 18px;
            text-align: center;
        }
        .word1{
            font-size: 20px;
        }
        .word3>span{
            font-size: 26px;
            font-weight: 500;
            color: red;
        }
    </style>
</head>
<body>
<div class="box">
    <h3>提示信息</h3>
    <div class="word1"></div>
    <div class="word3">
        <span>5</span>s后跳转页面
    </div>
    <div class="word2">
        不想等待,请直接点击<a href="<?php echo $url;?>">这里</a>
    </div>
</div>
<script>
    $('.word1').html("<?php echo $message;?>")
    let time = 5;
    setInterval(function () {
        time--;
        if (time<1){
            location.href = "<?php echo $url;?>"
        }
        $('.word3>span').html(time);
    },1000)
</script>
</body>
</html>