<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/10/6
 * Time: 14:45
 */
session_start();
include 'mysql.php';
$username=$_POST['user'];
$password=md5($_POST['password']);
$sql="insert into user (username,password) values ('$username','$password')";
$db->query($sql);
if ($db->affected_rows>0){
    $message='注册成功';
    $url='http://localhost/admin/MyCMS/myWeb/index.php';
    include 'wait.php';
}