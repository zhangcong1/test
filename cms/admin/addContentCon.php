<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/9/29
 * Time: 19:49
 */
include '../public/db.php';
$cid=$_GET['cid'];
$stitle=$_GET['stitle'];
$scon=$_GET['scon'];
$posid=$_GET['posid'];
$image=$_GET['image'];
if ($posid){
    $sql="insert into shows (`stitle`,`scon`,`cid`,`posid`,`image`) values ('{$stitle}','{$scon}',{$cid},{$posid},'{$image}')";
}else{
    $sql="insert into shows (`stitle`,`scon`,`cid`,`posid`,`image`) values ('{$stitle}','{$scon}',{$cid},0,'{$image}')";
}
if ($db->exec($sql)){
    echo "<script>alert('添加成功');location.href='addContent.php'</script>";
}