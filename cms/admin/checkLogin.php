<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/9/25
 * Time: 22:14
 */
session_start();
include '../public/db.php';
//$aname=addslashes(htmlspecialchars($_POST['aname']));
$aname=$_POST['aname'];
$aname=preg_replace("/'/","\'","$aname");
$aname=preg_replace("/</","&lt;","$aname");
$aname=preg_replace("/>/","&gt;","$aname");
$apass=md5($_POST['apass']);
$sql="select * from admin where `aname`='{$aname}' and `apass`='{$apass}'";
$result=$db->query($sql);
$result->setFetchMode(PDO::FETCH_ASSOC);
$row=$result->fetch();
$aphoto=$row['aphoto'];
$anicheng=$row['anicheng'];
if ($result->rowCount()>0){
    $_SESSION['login']='ok';
    $_SESSION['aname']=$aname;
    $_SESSION['aphoto']=$aphoto;
    $_SESSION['anicheng']=$anicheng;
    $url="http://localhost/admin/MyCMS/index/index.php";
    $message="登陆成功";
    include "wait.php";
}else{
    $url="http://localhost/admin/MyCMS/admin/login.php";
    $message="登陆失败";
    include "wait.php";
}