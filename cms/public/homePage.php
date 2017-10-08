<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        nav{
            width:1200px;
            height: 50px;
            border:1px solid #cccccc;
            margin: 20px auto;
            /*line-height: 50px;*/
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    </style>
</head>
<body>
    <nav>
        <a href="home.php">网站首页</a>
        <?php
            include '../public/db.php';
            $sql="select * from category where pid=0";
            $result=$db->query($sql);
            $result->setFetchMode(PDO::FETCH_ASSOC);
            while ($row=$result->fetch()){
                if($row["state"]==0){
                    $url="lists.php";
                }else{
                    $url="fenlei.php";
                }
                ?>
                <a href="<?php echo '../index/'.$url.'?cid='.$row['cid']?>"><?php echo $row['cname']?></a>
        <?php
            }
        ?>
    </nav>
</body>
</html>