<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/9/29
 * Time: 18:41
 */
include '../public/db.php';
$cid=$_GET['cid'];
$pid=$_GET['pid'];
$cname=$_GET['cname'];
$sql="update category set pid={$pid},cname='{$cname}' where cid=".$cid;
if ($db->exec($sql)){
    echo "<script>alert('修改成功');location.href='showCategory.php'</script>";
}