<?php
include "../public/login.php";
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../static/css/bootstrap.min.css">
    <title>内容管理系统</title>
    <style>
        html,body{
            width: 100%;
            height: 100%;
        }
        header{
            height: 20%;
            border:1px solid #000;
            display: flex;
            align-items: center;
            position: relative;
        }
        .row{
            height: 80%;
            border: 1px solid #000;
            border-top: none;
            margin: 0 auto;
        }
        div[class*="col"]{
            padding: 15px;
        }
        .left{
            height: 100%;
            border-right: 1px solid #000;
        }
        .image{
            width: 100px;
            height: 100px;
            background: red;
            z-index: 1;
            border: 1px solid #000;
            border-radius: 50%;
            overflow: hidden;
        }
        .infor{
            width: 0;
            height: 100px;
            margin-left: -50px;
            border:1px solid #000;
            border-left: none;
            overflow: hidden;
        }
        .infor>h4{
            width: 180px;
            padding-top: 10px;
            padding-left: 70px;
            font-weight: 500;
        }
        .image:hover+.infor{
            transition: 1s;
            width: 200px;
        }
        header>h1{
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            text-align: center;
        }
        header>h3{
            position: absolute;
            top: 0;
            right: 30px;
            text-align: center;
        }
        iframe{
            width: 100%;
            height: 480px;
        }
        .home{
            position: absolute;
            right: 250px;
            top: 38px;
            font-size: 28px;
            z-index: 100;
        }
    </style>
</head>
<body>
    <header class="container">
        <div class="image">
            <img src="../admin/<?php echo $_SESSION['aphoto']?>" alt="" height="100%">
        </div>
        <div class="infor">
            <h4>姓名：<?php echo $_SESSION['aname']?></h4>
            <h4>昵称：<?php echo $_SESSION['anicheng']?></h4>
        </div>
        <a href="../myWeb/index.php" target="_blank" class="home">网站首页</a>
        <h1>内容管理系统界面</h1>
        <h3><a href="../admin/loginOut.php">安全退出</a></h3>
    </header>
    <div class="container row">
        <div class="col-sm-4 col-md-3 left">
            <ul class="title">
                <li>
                    管理员信息
                    <ul class="list">
                        <li>
                            <a href="../admin/showAdmin.php" target="right">查看管理员</a>
                        </li>
                        <li>
                            <a href="addAdmin.php" target="right">添加管理员</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="title">
                <li>
                    用户信息
                    <ul class="list">
                        <li>
                            <a href="../admin/showUser.php" target="right">查看用户</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="title">
                <li>
                    分类管理
                    <ul class="list">
                        <li>
                            <a href="../admin/showCategory.php" target="right">查看分类</a>
                        </li>
                        <li>
                            <a href="../admin/addCategory.php" target="right">添加分类</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="title">
                <li>
                    内容管理
                    <ul class="list">
                        <li>
                            <a href="">查看内容</a>
                        </li>
                        <li>
                            <a href="../admin/addContent.php" target="right">添加内容</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="title">
                <li>
                    其他分类管理
                    <ul class="list">
                        <li>
                            <a href="">查看分类</a>
                        </li>
                        <li>
                            <a href="../admin/position.php" target="right">添加分类</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="col-sm-8 col-md-9">
            <iframe src="" frameborder="0" name="right"></iframe>
        </div>
    </div>
</body>
</html>