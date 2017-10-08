<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/10/6
 * Time: 19:38
 */
session_start();
include 'mysql.php';
$username=$_POST['username'];
$password=md5($_POST['password']);
$sql="select * from user where username='{$username}' and password='{$password}'";
$result=$db->query($sql);
if ($result->num_rows){
    $_SESSION['login']='ok';
    $_SESSION['username']="$username";
    $_SESSION['password']="$password";
    $row=$result->fetch_assoc();
    $_SESSION['uid']=$row['uid'];
    $message='登录成功';
    $url='http://localhost/admin/MyCMS/myWeb/index.php';
    include 'wait.php';
}else{
    $message='登录失败';
    $url='http://localhost/admin/MyCMS/myWeb/index.php';
    include 'wait.php';
}