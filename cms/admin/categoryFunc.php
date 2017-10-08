<?php
/**
 * Created by PhpStorm.
 * User: 张聪
 * Date: 2017/9/28
 * Time: 22:22
 */
class tree{
    public $str="";
    public $ul="";
    public function sort($pid,$db,$table,$step,$flag,$currentCid){
        $currentPid='';
        if ($currentCid){
            $sql="select * from ".$table." where cid=".$currentCid;
            $result=$db->query($sql);
            $result->setFetchMode(PDO::FETCH_ASSOC);
            $row=$result->fetch();
            $currentPid=$row['pid'];
        }
        $sql="select * from ".$table." where pid=".$pid;
        $step+=1;
        $str1=str_repeat($flag,$step);
        $result=$db->query($sql);
        $result->setFetchMode(PDO::FETCH_ASSOC);
        while ($row=$result->fetch()){
            $cid=$row["cid"];
            $cname=$row["cname"];
            if ($cid==$currentPid){
                $this->str.="<option value='".$cid."' selected>".$str1.$cname."</option>";
            }else{
                $this->str.="<option value='".$cid."'>".$str1.$cname."</option>";
            }

            $this->sort($cid,$db,$table,$step,$flag,$currentCid);
        }
    }
    public function show($pid,$db,$table){
        $this->ul.="<ul>";
        $sql='select * from '.$table.' where pid='.$pid;
        $result=$db->query($sql);
        $result->setFetchMode(PDO::FETCH_ASSOC);
        while ($row=$result->fetch()){
            $cid=$row['cid'];
            $cname=$row['cname'];
            $this->ul.="<li>".$cname."&nbsp;<a href='delCategory.php?cid={$cid}'>删除</a>"."&nbsp;<a href='editCategory.php?cid={$cid}'>修改</a>"."</li>";

            $this->show($cid,$db,$table);
            $this->ul.="</ul>";
        }
    }
    public function del($cid,$db,$table){
        $sql="select * from ".$table." where pid=".$cid;
        $result=$db->query($sql);
        if ($result->rowCount()>0){
            echo "<script>alert('有子目录，不能删除');location.href='showCategory.php'</script>";
        }else{
            //根据cid找pid
            $sql="select pid from ".$table." where cid=".$cid;
            $result=$db->query($sql);
            $result->setFetchMode(PDO::FETCH_ASSOC);
            $row=$result->fetch();
            $pid=$row['pid'];

            $sql="delete from ".$table." where cid=".$cid;
            if ($db->exec($sql)){
                $sql1="select cname from ".$table." where pid=".$pid;
                $result=$db->query($sql1);
                if ($result->rowCount()==0){
                    $sql="update ".$table." set state=0 where cid=".$pid;
                    if ($db->exec($sql)){
                        echo "<script>alert('删除成功');location.href='showCategory.php'</script>";
                    }else{
                        echo "<script>alert('删除成功');location.href='showCategory.php'</script>";
                    }
                }
            }
        }
    }
}