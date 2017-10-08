<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!--<style>

        li{
            width: 100%;
            height: 30px;
            border: 1px solid #cccccc;
        }
        li>a{
            float: right;
        }
        li>a:first-child{
            padding-left: 30px;
        }
    </style>-->
</head>
<body>
<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/9/29
 * Time: 12:19
 */
include '../public/db.php';
include 'categoryFunc.php';
$obj=new tree();
$obj->show(0,$db,'category');
echo $obj->ul;
?>
</body>
</html>
