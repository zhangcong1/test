<?php
include "../public/homePage.php";
?>

<style>
    .container{
        width:800px;height:auto;
        overflow: hidden;
        margin:auto;
    }
    .lists{
        float:left;width:200px;height:200px;
        border:1px solid #ccc;
        margin:4px;
    }
</style>
<div class="container">
    <?php
    include "../public/db.php";
    $sql="select * from category where pid=".$_GET["cid"];
    $result=$db->query($sql);
    $result->setFetchMode(PDO::FETCH_ASSOC);
    while ($row=$result->fetch()) {
        if($row["state"]==0){
            $url="lists.php";
        }else{
            $url="fenlei.php";
        }
        ?>
        <div class="lists" style="background-image: url(../admin/<?php echo $row['image']?>);background-size: cover">
            <a href="<?php echo $url?>?cid=<?php echo $row['cid']?>">
                <?php
                echo $row["cname"]
                ?>
            </a>
        </div>
        <?php
    }
    ?>
</div>
</body>
</html>