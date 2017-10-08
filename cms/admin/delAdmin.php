<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/10/3
 * Time: 15:10
 */
include '../public/db.php';
$aid=$_GET['aid'];
$sql="delete from admin where `aid`=".$aid;
if ($db->exec($sql)){
    echo "<script>alert('删除成功');location.href='showAdmin.php'</script>";
}