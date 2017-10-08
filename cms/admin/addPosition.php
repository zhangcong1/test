<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/10/1
 * Time: 23:20
 */
include '../public/db.php';
$posname=$_GET['posname'];
$sql="insert into positions (`posname`) values ('$posname')";
if($db->exec($sql)){
    echo "<script>alert('添加成功');location.href='position.php'</script>";
}