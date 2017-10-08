<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>景点介绍</title>
    <link rel="stylesheet" href="../css/hot.css">
</head>
<body>
    <!--头部导航栏-->
    <header>
        <main>
            <a href="" class="logo">
                <img src="../img/logo1.png" alt="">
            </a>
            <ul class="nav">
                <li><a href="../index.php" class="navi">网站首页</a></li>
                <li>
                    <a href="" class="navi">景点介绍
                        <span class="sanjiao"></span>
                    </a>
                    <div class="sanjiao1"></div>
                    <ul class="sort">
                        <li><a href="hot.php">热门景点</a></li>
                        <li><a href="hot.php">更多景点</a></li>
                    </ul>
                </li>
                <li><a href="store.html" class="navi">景点服务</a></li>
                <li><a href="know.html" class="navi">景点知识</a></li>
                <li><a href="suggest.html" class="navi">留言建议</a></li>
                <li><a href="about.html" class="navi">关于我们</a></li>
            </ul>
        </main>
    </header>
    <div class="head"></div>
    <!--头部导航栏-->
    <!--素馨花语-->
    <section class="title">
        <main>
            <h1>景点介绍</h1>
        </main>
    </section>
    <section class="content">
        <main>
            <ul class="introduce">
                <?php
                include "php/mysql.php";
                $sql="select * from shows";
                $result=$db->query($sql);
                while ($row=$result->fetch_assoc()){
                    ?>
                    <li>
                        <div class="img">
                            <img src="../../admin/<?php echo $row['image']?>" alt="" height="120px">
                        </div>
                        <h4><a href="xiangqing.php?sid=<?php echo $row['sid']?>"><?php echo $row["stitle"];?></a></h4>
                        <p><?php echo $row["scon"];?></p>
                        <p>
                            <span>2017/8/15</span>
                            <span>王亚楠</span>
                            <span>39</span>
                        </p>
                    </li>
                <?php
                }
                ?>

                <!--<li>
                    <div class="img">
                        <img src="../img/hot6.jpg" alt="" width="160px">
                    </div>
                    <h4><a href="">那些景点的点睛之笔</a></h4>
                    <p>人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! 人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! 人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! 人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! ...</p>
                    <p>
                        <span>2017/8/15</span>
                        <span>王亚楠</span>
                        <span>39</span>
                    </p>
                </li>
                <li>
                    <div class="img">
                        <img src="../img/hot6.jpg" alt="" width="160px">
                    </div>
                    <h4><a href="">那些景点的点睛之笔</a></h4>
                    <p>人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! 人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! 人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! 人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! ...</p>
                    <p>
                        <span>2017/8/15</span>
                        <span>王亚楠</span>
                        <span>39</span>
                    </p>
                </li>
                <li>
                    <div class="img">
                        <img src="../img/hot6.jpg" alt="" width="160px">
                    </div>
                    <h4><a href="">那些景点的点睛之笔</a></h4>
                    <p>人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! 人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! 人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! 人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! ...</p>
                    <p>
                        <span>2017/8/15</span>
                        <span>王亚楠</span>
                        <span>39</span>
                    </p>
                </li>
                <li>
                    <div class="img">
                        <img src="../img/hot6.jpg" alt="" width="160px">
                    </div>
                    <h4><a href="">那些景点的点睛之笔</a></h4>
                    <p>人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! 人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! 人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! 人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! ...</p>
                    <p>
                        <span>2017/8/15</span>
                        <span>王亚楠</span>
                        <span>39</span>
                    </p>
                </li>-->
                <div class="fanye">
                    <div class="last">上一页</div>
                    <div class="page1">1</div>
                    <div class="page2">2</div>
                    <div class="next">下一页</div>
                </div>
            </ul>
            <div class="tuijian">
                <input type="text" placeholder="Search">
                <button>
                    搜索
                </button>
                <div class="recommend">
                    <h3>为你推荐</h3>
                    <ul class="list">
                        <li><a href="">夏日里的一抹清凉</a></li>
                        <li><a href="">夏日里的一抹清凉</a></li>
                        <li><a href="">夏日里的一抹清凉</a></li>
                    </ul>
                </div>
                <ul class="column">
                    <li><a href="">所有文章</a></li>
                    <li><a href="">素馨动态</a></li>
                    <li><a href="">花言花语</a></li>
                </ul>
            </div>
        </main>
    </section>
    <!--素馨花语-->
    <!--底部-->
    <footer>
        <main>
            <div class="login">
                <span class="icon">&#xe631;</span>
                <span class="icon">&#xe629;</span>
                <span class="icon">&#xe670;</span>
            </div>
            <p class="address">
                <a href="">豫ICP备17021305号</a>
                <img src="../img/gonganbeian.png" alt="" width="20px">
                <a href="">豫公网安备 41012202000160号</a>
            </p>
            <p class="phone">联系电话 0371-62180519 158-9006-2947</p>
            <p class="phone">郑州素馨花卉有限公司 版权所有 © 2017-2021</p>
        </main>
    </footer>
    <!--底部-->
</body>
</html>