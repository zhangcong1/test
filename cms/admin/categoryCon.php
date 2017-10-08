<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/9/28
 * Time: 22:21
 */
include '../public/db.php';
$cname=$_GET['cname'];
$pid=$_GET['pid'];
$image=$_GET['image'];
$sql="insert into category (cname,pid,state,image) values ('{$cname}',$pid,0,'{$image}')";
if ($db->exec($sql)){
    if ($pid!=0){
        $sql = "update category set state=1 WHERE cid=" . $pid;
        $db->exec($sql);
        echo "<script>alert('添加成功');location.href='addCategory.php'</script>";
    }else{
        echo "<script>alert('添加成功');location.href='addCategory.php'</script>";
    }
}
