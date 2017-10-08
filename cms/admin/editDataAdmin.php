<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/9/28
 * Time: 19:02
 */
include '../public/db.php';
$aid=$_GET['aid'];
$aname=$_POST['aname'];
$anicheng=$_POST['anicheng'];
$apass=$_POST['apass'];
$aphoto=$_POST['aphoto'];
if ($apass){
    $apass=md5($_POST['apass']);
    $sql="update admin set `aname`='{$aname}',`apass`='{$apass}',`anicheng`='{$anicheng}',`aphoto`='{$aphoto}' where aid=".$aid;
}else{
    $sql="update admin set `aname`='{$aname}',`anicheng`='{$anicheng}',`aphoto`='{$aphoto}' where aid=".$aid;
}
if ($db->exec($sql)){
    echo "<script>alert('修改成功');location.href='showAdmin.php'</script>";
}
