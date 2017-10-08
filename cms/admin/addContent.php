<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../static/css/bootstrap.min.css">
    <script src="../static/js/jquery-3.2.1.js"></script>
    <script src="../static/js/upload.js"></script>
    <title>Document</title>
</head>
<body>
    <form action="addContentCon.php">
        所属分类:<select name="cid" id="" class="form-control">
            <option value="0">一级目录</option>
            <?php
                include '../public/db.php';
                include 'categoryFunc.php';
                $obj=new tree();
                $obj->sort("0",$db,"category",-1,">");
                echo $obj->str;
            ?>
        </select><br>
        内容标题:<input type="text" class="form-control" placeholder="Text input" name="stitle"><br>
        内容:<textarea class="form-control" rows="3" name="scon"></textarea><br>
        选择其他内容分类: &nbsp;<?php
            $sql="select * from positions";
            $result=$db->query($sql);
            $result->setFetchMode(PDO::FETCH_ASSOC);
            while ($row=$result->fetch()){
                ?>
                <?php echo $row['posname']?>&nbsp;&nbsp;<input type="radio" name="posid" value="<?php echo $row['posid']?>">
                <?php
            }
        ?>
        <br>
        <div class="parent">上传背景</div>
        <input type="hidden" name="image" value="">
        <input type="submit" class="btn btn-success" value="添加">
    </form>
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