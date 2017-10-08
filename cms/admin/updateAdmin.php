<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/10/3
 * Time: 15:13
 */
include '../public/db.php';
$aid=$_GET['aid'];
$attr=$_GET['attr'];
$newv=$_GET['newv'];
$sql="update admin set {$attr}='$newv' where aid=".$aid;
if ($db->exec($sql)){
    echo 'ok';
}