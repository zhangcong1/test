<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/10/2
 * Time: 16:22
 */
include '../public/db.php';
//$aname=addslashes(htmlspecialchars($_POST['aname']));
$aname=$_POST['aname'];
$aname=preg_replace("/'/","\'","$aname");
$aname=preg_replace("/</","&lt;","$aname");
$aname=preg_replace("/>/","&gt;","$aname");
$apass=md5($_POST['apass']);
$anicheng=$_POST['anicheng'];
$aphoto=$_POST['aphoto'];
$sql="insert into admin (`aname`,`apass`,`anicheng`,`aphoto`) values ('{$aname}','{$apass}','{$anicheng}','{$aphoto}')";
if ($db->exec($sql)){
    echo "<script>alert('插入成功');location.href='../index/addAdmin.php'</script>";
};