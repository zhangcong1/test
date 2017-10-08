<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../static/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
<form action="editCategoryData.php">
    分类列表：<select name="pid" id="" class="form-control">
        <option value="<?php echo 0?>">一级目录</option>
        <?php
        include '../public/db.php';
        include 'categoryFunc.php';
        $cid=$_GET['cid'];
        $obj=new tree();
        $obj->sort("0",$db,"category",-1,">",$cid);
        echo $obj->str;

        $sql="select * from category where cid=".$cid;
        $result=$db->query($sql);
        $result->setFetchMode(PDO::FETCH_ASSOC);
        $row=$result->fetch();
        ?>
    </select><br>
    <input type="hidden" name="cid" value="<?php echo $row['cid']?>">
    添加分类：<input type="text" name="cname" class="form-control" value="<?php echo $row['cname']?>"><br>
    <input type="submit" class="btn btn-success" value="修改">
</form>
</body>
</html>