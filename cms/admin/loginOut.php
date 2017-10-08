<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/10/3
 * Time: 15:38
 */
session_start();
unset($_SESSION['login']);
$url="http://localhost/admin/MyCMS/admin/login.php";
$message="安全退出";
include 'wait.php';