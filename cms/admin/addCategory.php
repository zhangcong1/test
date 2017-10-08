<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="../static/js/jquery-3.2.1.js"></script>
    <script src="../static/js/jquery.validate.js"></script>
    <link rel="stylesheet" href="../static/css/bootstrap.min.css">
    <script src="../static/js/upload.js"></script>
    <title>Document</title>
    <style>
        .error{
            color: red;
        }
    </style>
</head>
<body>
<form action="categoryCon.php">
    分类列表：<select name="pid" id="" class="form-control">
        <option value="<?php echo 0?>">一级目录</option>
        <?php
        include '../public/db.php';
        include 'categoryFunc.php';
        $obj=new tree();
        $obj->sort("0",$db,"category",-1,">");
        echo $obj->str;
        ?>
        <?php
        /*                include '../public/db.php';
                        $sql='select * from category';
                        $result=$db->query($sql);
                        $result->setFetchMode(PDO::FETCH_ASSOC);
                        while ($rows=$result->fetch()){
                    */?><!--

                    <option value="<?php /*echo $rows['cid']*/?>"><?php /*echo $rows['cname']*/?></option>

            --><?php
        /*                }
                    */?>
    </select><br>
    添加分类：<input type="text" name="cname" class="form-control"><br>
    <div class="parent">上传背景</div>
    <input type="hidden" name="image" value=""><br>
    <input type="submit" class="btn btn-success" value="添加">
</form>

<script>
    $(function () {
        $('form').validate({
            rules:{
                cname:{
                    required:true
                }
            },
            messages:{
                cname:{
                    required:"必填"
                }
            }
        })
    })
</script>
<script>
    let uploads = new upload();
    uploads.selectBtnStyle="width:80px;height:30px;border-radius:10px;background:#ff6700;";
    uploads.upBtnStyle="width:80px;height:30px;border-radius:10px;background:#ccc;";
    uploads.previewStyle="width:100px;height:100px;border:1px solid #000"
    uploads.createView({parent:document.querySelector('.parent')});
    let arr=[];
    uploads.up("../admin/upload.php",function (e) {
        arr.push(e);
        console.log(arr.join(';'));
        document.querySelector('input[type=hidden]').setAttribute('value',arr.join(';'));
    });
</script>
</body>
</html>