<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/10/6
 * Time: 14:29
 */
include 'mysql.php';
$user=$_GET['user'];
$sql="select * from user where username='{$user}'";
$result=$db->query($sql);
if ($result->num_rows){
    echo 'exist';
}else{
    echo 'ok';
}