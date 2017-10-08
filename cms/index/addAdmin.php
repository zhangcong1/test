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
    <form action="../admin/addAdmin.php" method="post" enctype="multipart/form-data">
        <div class="form-group">
            <label for="exampleInputEmail1">姓名</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="name" name="aname" autocomplete="off">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail2">密码</label>
            <input type="text" class="form-control" id="exampleInputEmail2" placeholder="password" name="apass" autocomplete="off">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail4">昵称</label>
            <input type="text" class="form-control" id="exampleInputEmail4" placeholder="nicheng" name="anicheng" autocomplete="off">
        </div>
        <div class="form-group">
            <label>头像</label>
            <input type="hidden" name="aphoto" value="">
        </div>
        <button type="submit" class="btn btn-default">添加</button>
    </form>
</div>
<script>
    let uploads=new upload();
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