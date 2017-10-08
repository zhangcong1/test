<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>添加管理员</title>
    <link rel="stylesheet" href="../static/css/bootstrap.min.css">
    <script src="../static/js/upload.js"></script>
</head>
<body>
<div class="container">
    <?php
    include '../public/db.php';
    $aid=$_GET['aid'];
    $sql="select * from admin where aid=".$aid;
    $result=$db->query($sql);
    $result->setFetchMode(PDO::FETCH_ASSOC);
    $row=$result->fetch();
    ?>
    <form action="editDataAdmin.php?aid=<?php echo $row['aid']?>" method="post" enctype="multipart/form-data">
        <div class="form-group">
            <label for="exampleInputEmail1">姓名</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="name" name="aname" autocomplete="off" value="<?php echo $row['aname']?>">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail2">密码</label>
            <input type="text" class="form-control" id="exampleInputEmail2" placeholder="password" name="apass" autocomplete="off" value="">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail4">昵称</label>
            <input type="text" class="form-control" id="exampleInputEmail4" placeholder="nicheng" name="anicheng" autocomplete="off" value="<?php echo $row['anicheng']?>">
        </div>
        <div class="form-group">
            <label>头像</label>
            <div class="photo">
                <img src="<?php echo explode(';',$row['aphoto'])[0]?>" alt="" height="150px">
            </div>
            <input type="hidden" name="aphoto" value="">
        </div>
        <button type="submit" class="btn btn-default">添加</button>
    </form>
</div>
<script>
    let uploads = new upload();
    uploads.createView({parent:document.querySelectorAll('.form-group')[3]});
    let arr=[];
    uploads.up("../admin/upload.php",function (e) {
        arr.push(e);
        console.log(arr.join(';'));
        document.querySelector('input[type=hidden]').setAttribute('value',arr.join(';'));
    });
</script>
</body>
</html>