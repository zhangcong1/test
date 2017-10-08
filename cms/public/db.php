<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/10/3
 * Time: 13:41
 */
header("content-type:text/html;charset=utf-8");
$db=new PDO("mysql:host=localhost;port=3306;dbname=mycms","root","20141216");
$db->exec("set names utf8");