<?php
session_start();
if (!isset($_SESSION['login'])){
    $url="http://localhost/admin/MyCMS/admin/login.php";
    $message="请登录";
    include '../admin/wait.php';
    exit();
}
?>