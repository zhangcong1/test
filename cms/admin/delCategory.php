<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/9/29
 * Time: 15:33
 */
include '../public/db.php';
include 'categoryFunc.php';
$cid=$_GET['cid'];
$obj=new tree();
$obj->del($cid,$db,"category");
