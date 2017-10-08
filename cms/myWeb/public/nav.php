<div class="head">
    <main>
        <a href="" class="logo">
            <img src="img/logo1.png" alt="">
        </a>
        <ul class="nav">
            <li><a href="index.php" class="navi">网站首页</a></li>
            <?php
            include '../public/db.php';
            $sql="select * from category where pid=0";
            $result=$db->query($sql);
            $result->setFetchMode(PDO::FETCH_ASSOC);
            while ($row=$result->fetch()){
                if($row["cname"]=="景点介绍"){
                    $url="../myWeb/html/hot.php";
                }elseif ($row["cname"]=="景点服务"){
                    $url="../myWeb/html/store.html";
                }elseif ($row["cname"]=="留言建议"){
                    $url="../myWeb/html/suggest.html";
                }elseif ($row["cname"]=="景点知识"){
                    $url="../myWeb/html/know.html";
                }elseif ($row["cname"]=="关于我们"){
                    $url="../myWeb/html/about.html";
                }else{
                    $url="../myWeb/html/hot.php";
                }
                ?>

                <li><a href="<?php echo $url.'?cid='.$row['cid']?>" class="navi"><?php echo $row['cname']?></a></li>
                <?php
            }
            ?>
            <!--<li>
                <a href="" class="navi">景点介绍
                    <span class="sanjiao"></span>
                </a>
                <div class="sanjiao1"></div>
                <ul class="sort">
                    <li><a href="html/suxinhuayu.html">热门景点</a></li>
                    <li><a href="html/suxinhuayu.html">更多景点</a></li>
                </ul>
            </li>
            <li><a href="html/store.html" class="navi">旅游服务</a></li>
            <li><a href="html/suxinhuayi.html" class="navi">景点知识</a></li>
            <li><a href="html/suggest.html" class="navi">留言建议</a></li>
            <li><a href="html/about.html" class="navi">关于我们</a></li>-->
        </ul>

    </main>
</div>