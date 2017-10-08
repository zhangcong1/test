<?php
include "../public/homePage.php";
?>
<style>
    .lists{
        width:800px;
        margin:10px auto;
    }
</style>

<div class="lists">
    <ul>
        <?php
        include  "../public/db.php";
        if ($_GET['cid']){
            $sql="select * from shows where cid='{$_GET['cid']}'";
        }
        if ($_GET['posid']){
            $sql="select * from shows where posid='{$_GET['posid']}'";
        }
        $result=$db->query($sql);
        $result->setFetchMode(PDO::FETCH_ASSOC);
        while ($row=$result->fetch()){
            ?>
            <li>
                <a href="shows.php?sid=<?php echo $row['sid']?>">
                    <?php
                    echo $row["stitle"];
                    ?>
                </a>
            </li>
            <?php
        }
        ?>
    </ul>
</div>
</body>
</html>