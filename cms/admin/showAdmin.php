<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../static/css/bootstrap.min.css">
    <script src="../static/js/jquery-3.2.1.js"></script>
</head>
<body>
<div class="container">
    <table class="table table-bordered table-striped">
        <tr>
            <th>姓名</th>
            <th>昵称</th>
            <th>头像</th>
            <th>操作</th>
        </tr>
        <?php
        include '../public/db.php';
        $sql='select * from admin';
        $result=$db->query($sql);
        $result->setFetchMode(PDO::FETCH_ASSOC);
        while ($rows=$result->fetch()) {
            ?>
            <tr>
                <td class="aname">
                    <?php echo $rows['aname'] ?>
                </td>
                <td class="anick">
                    <?php echo $rows['anicheng'] ?>
                </td>
                <td class="aphoto">
                    <img src="<?php echo explode(';',$rows['aphoto'])[0]?>" alt="" width="100px">
                </td>
                <td class="del">
                    <a href="editAdmin.php?aid=<?php echo $rows['aid']?>" aid="<?php echo $rows['aid']?>" target="right">编辑</a>&nbsp;&nbsp;&nbsp;
                    <a href="delAdmin.php?aid=<?php echo $rows['aid']?>" aid="<?php echo $rows['aid']?>">删除</a>
                </td>
            </tr>
            <?php
        }
        ?>
    </table>
</div>
<script>
    let oldv;
    $('tbody').on('dblclick','td:not(.del)',function () {
        $(this).attr('contenteditable','true').focus();
        oldv = $(this).html();
    })
    $('tbody').on('blur','td:not(.del)',function () {
        edit.call(this);
    })
    $('tbody').on('keydown','td:not(.del)',function (e) {
        if (e.keyCode == 13){
            edit.call(this);
            return false;
        }
    })
    function edit() {
        $(this).removeAttr('contenteditable','true');
        let newv = $(this).html();
        let attr = $(this).attr('class');
        let aid = $(this).nextAll('.del').find('a').attr('aid');
        if (oldv != newv){
            $.ajax({
                url:'updateAdmin.php',
                data:{aid,attr,newv},
                success:function (data) {
                    if (data == 'ok'){
                        alert('修改成功');
                    }
                }
            })
        }
    }
</script>
</body>
</html>
