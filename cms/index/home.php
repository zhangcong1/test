<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/9/29
 * Time: 22:47
 */
include '../public/homePage.php';
?>
    <script src="../static/js/jquery-3.2.1.js"></script>
    <style>
        *{
            padding: 0;
            margin: 0;
        }
        .banner{
            width: 1200px;
            height: 500px;
            margin: 20px auto;
            cursor: pointer;
            list-style: none;
            position: relative;
        }
        .banner>li{
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 500px;
            position: absolute;
            left: 0;
            right: 0;
        }
        .banner>li:nth-of-type(1){
            background-color: red;
            z-index: 3;
        }
        .banner>li:nth-of-type(2){
            background-color: green;
            z-index: 2;
        }
        .banner>li:nth-of-type(3){
            background-color: blue;
            z-index: 1;
        }
        .banner>li>a{
            font-size: 60px;
            color: #0f0f0f;
        }
    </style>
    <ul class="banner">
        <li>
            <a href="lists.php?posid=">轮播图1</a>
        </li>
        <li>
            <a href="lists.php">轮播图2</a>
        </li>
        <li>
            <a href="lists.php">轮播图3</a>
        </li>
    </ul>
<script>
    let num=0;
    setInterval(function () {
        num++;
        if (num == $('.banner>li').length){
            num=0;
        }
        $('.banner>li').eq(num).prevAll().fadeOut(200).addBack().eq(num).fadeIn(200)
    },2000)
</script>
</body>
</html>