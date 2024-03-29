<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>马尔代夫旅游记</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="iconfont/iconfont.css">
    <!--<script src="js/animate.js"></script>-->
    <!--<script src="js/index.js"></script>-->
    <script src="js/jquery-3.2.1.js"></script>
    <script src="js/jquery1.js"></script>
    <style>

    </style>
</head>
<body>
    <!--头部-->
    <header>
        <!--banner部分-->
        <ul class="banner">
            <li>
                <!--<a href=""><img src="img/banner3.jpg" alt="" class="imgs"></a>-->
                <a href="html/hot.php"><img src="img/word.png" alt="" class="words"></a>
                <h1 class="title1">最美的自己在路上</h1>
            </li>
            <li>
                <!--<a href=""><img src="img/banner5.jpg" alt="" height="100%"></a>-->
                <h2 class="title2">灵魂和身体</h2>
                <h1 class="title3">必须有一个在路上</h1>
            </li>
        </ul>
        <ul class="lunbo">
            <li></li>
            <li></li>
        </ul>
        <a class="back">
            <span class="iconfont icon-fanhui"></span>
        </a>
        <a class="forward">
            <span class="iconfont icon-qianjin"></span>
        </a>
        <?php
        if ($_SESSION['login']){
            ?>
            <div id="logins">
                <h2>登录 | 注册</h2>
                <a href="html/login.html" target="_blank">登录</a>
                <a href="html/reg.html" target="_blank">免费注册</a>
            </div>
        <?php
        }
        ?>

        <!--banner部分-->
        <!--导航部分-->
        <?php include "public/nav.php"?>
        <!--导航部分-->
    </header>
    <!--头部-->
    <!--热门景点-->
    <section class="huayi">
        <main>
            <h3>热门推荐
                <a href="" class="more">More
                    <div class="sanjiao2"></div>
                </a>
            </h3>
            <p class="jianjie">人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行! </p>
            <div class="contain">
                <ul>
                    <?php
                    include "html/php/mysql.php";
                    $sql="select * from shows";
                    $result=$db->query($sql);
                    while ($row=$result->fetch_assoc()){
                        ?>
                        <li>
                            <div class="hov">
                                <div class="infors">
                                    <h5>HEADING</h5>
                                    <h5>HERE</h5>
                                    <div class="hr"></div>
                                    <span>Description goes here</span>
                                </div>
                                <div class="img">
                                    <img src="../admin/<?php echo $row['image']?>" alt="" height="320px">
                                    <div class="borders"></div>
                                </div>
                            </div>
                            <h4><?php echo $row['stitle']?></h4>
                            <p><?php echo $row['scon']?></p>
                            <a href="html/xiangqing.php?sid=<?php echo $row['sid']?>" class="xiangqing">
                                <span class="iconfont2">&#xe635;</span>
                                查看详情</a>
                        </li>
                    <?php
                    }
                    ?>
                    <!--<li>
                        <div class="hov">
                            <div class="infors">
                                <h5>HEADING</h5>
                                <h5>HERE</h5>
                                <div class="hr"></div>
                                <span>Description goes here</span>
                            </div>
                            <div class="img">
                                <img src="img/hot1.jpg" alt="" height="320px">
                                <div class="borders"></div>
                            </div>
                        </div>
                        <h4>马尔代夫群岛</h4>
                        <p>人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行!</p>
                        <a href="" class="xiangqing">
                            <span class="iconfont2">&#xe635;</span>
                            查看详情</a>
                    </li>
                    <li>
                        <div class="hov">
                            <div class="infors">
                                <h5>HEADING</h5>
                                <h5>HERE</h5>
                                <div class="hr"></div>
                                <span>Description goes here</span>
                            </div>
                            <div class="img">
                                <img src="img/hot5.jpeg" alt="" height="320px">
                                <div class="borders"></div>
                            </div>
                        </div>
                        <h4>马尔代夫群岛</h4>
                        <p>人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行!</p>
                        <a href="" class="xiangqing"><span class="iconfont2">&#xe635;</span>查看详情</a>
                    </li>
                    <li>
                        <div class="hov">
                            <div class="infors">
                                <h5>HEADING</h5>
                                <h5>HERE</h5>
                                <div class="hr"></div>
                                <span>Description goes here</span>
                            </div>
                            <div class="img">
                                <img src="img/hot2.jpg" alt="" height="320px">
                                <div class="borders"></div>
                            </div>
                        </div>
                        <h4>马尔代夫群岛</h4>
                        <p>人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行!</p>
                        <a href="" class="xiangqing">
                            <span class="iconfont2">&#xe635;</span>
                            查看详情</a>
                    </li>
                    <li>
                        <div class="hov">
                            <div class="infors">
                                <h5>HEADING</h5>
                                <h5>HERE</h5>
                                <div class="hr"></div>
                                <span>Description goes here</span>
                            </div>
                            <div class="img">
                                <img src="img/hot4.jpeg" alt="" height="320px">
                                <div class="borders"></div>
                            </div>
                        </div>
                        <h4>马尔代夫群岛</h4>
                        <p>人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行!</p>
                        <a href="" class="xiangqing">
                            <span class="iconfont2">&#xe635;</span>
                            查看详情</a>
                    </li>
                    <li>
                        <div class="hov">
                            <div class="infors">
                                <h5>HEADING</h5>
                                <h5>HERE</h5>
                                <div class="hr"></div>
                                <span>Description goes here</span>
                            </div>
                            <div class="img">
                                <img src="img/hot3.jpg" alt="" height="320px">
                                <div class="borders"></div>
                            </div>
                        </div>
                        <h4>马尔代夫群岛</h4>
                        <p>人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行!</p>
                        <a href="" class="xiangqing">
                            <span class="iconfont2">&#xe635;</span>
                            查看详情</a>
                    </li>
                    <li>
                        <div class="hov">
                            <div class="infors">
                                <h5>HEADING</h5>
                                <h5>HERE</h5>
                                <div class="hr"></div>
                                <span>Description goes here</span>
                            </div>
                            <div class="img">
                                <img src="img/hot6.jpg" alt="" height="320px">
                                <div class="borders"></div>
                            </div>
                        </div>
                        <h4>马尔代夫群岛</h4>
                        <p>人生就一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行!</p>
                        <a href="" class="xiangqing">
                            <span class="iconfont2">&#xe635;</span>
                            查看详情</a>
                    </li>-->
                </ul>
            </div>
            <div class="back1">
                <span class="iconfont1">&#xe68c;</span>
            </div>
            <div class="forward1">
                <span class="iconfont1">&#xe60e;</span>
            </div>
        </main>
    </section>
    <!--热门景点-->

    <!--景点介绍-->
    <section class="huayu">
        <main>
            <h3>景点介绍
                <a href="" class="more">More
                    <div class="sanjiao2"></div>
                </a>
            </h3>
            <ul class="list">
                <?php
                include "html/php/mysql.php";
                $sql="select * from shows";
                $result=$db->query($sql);
                while ($row=$result->fetch_assoc()){
                    ?>
                    <li>
                        <div class="imgs">
                            <img src="../admin/<?php echo $row['image']?>" alt="" width="160px">
                        </div>
                        <a href="html/xiangqing.php?sid=<?php echo $row['sid']?>"><?php echo $row["stitle"]?></a>
                        <p><?php echo $row["scon"]?></p>
                        <p>
                            <span>2017/8/27</span>
                            <span>王亚楠</span>
                            <span class="iconfont3">&#xe60f;40</span>
                        </p>
                    </li>
                <?php
                }
                ?>
                <!--<li>
                    <div class="imgs">
                        <img src="img/hot6.jpg" alt="" width="160px">
                    </div>
                    <a href="">那些陪才华的点睛之笔</a>
                    <p>在花艺作品的制作中一般都有三个板块融合穿插而成，她们分工明确而又密切合作，她们承认重点花材不可替代的.....</p>
                    <p>
                        <span>2017/8/27</span>
                        <span>王亚楠</span>
                        <span class="iconfont3">&#xe60f;40</span>
                    </p>
                </li>
                <li>
                    <div class="imgs">
                        <img src="img/hot6.jpg" alt="" width="160px">
                    </div>
                    <a href="">那些陪才华的点睛之笔</a>
                    <p>在花艺作品的制作中一般都有三个板块融合穿插而成，她们分工明确而又密切合作，她们承认重点花材不可替代的.....</p>
                    <p>
                        <span>2017/8/27</span>
                        <span>王亚楠</span>
                        <span class="iconfont3">&#xe60f;40</span>
                    </p>
                </li>-->
            </ul>
            <!--<ul class="list">
                <li>
                    <div class="imgs">
                        <img src="img/hot6.jpg" alt="" width="160px">
                    </div>
                    <a href="">那些陪才华的点睛之笔</a>
                    <p>在花艺作品的制作中一般都有三个板块融合穿插而成，她们分工明确而又密切合作，她们承认重点花材不可替代的.....</p>
                    <p>
                        <span>2017/8/27</span>
                        <span>王亚楠</span>
                        <span class="iconfont3">&#xe60f;40</span>
                    </p>
                </li>
                <li>
                    <div class="imgs">
                        <img src="img/hot6.jpg" alt="" width="160px">
                    </div>
                    <a href="">那些陪才华的点睛之笔</a>
                    <p>在花艺作品的制作中一般都有三个板块融合穿插而成，她们分工明确而又密切合作，她们承认重点花材不可替代的.....</p>
                    <p>
                        <span>2017/8/27</span>
                        <span>王亚楠</span>
                        <span class="iconfont3">&#xe60f;40</span>
                    </p>
                </li>
            </ul>
            <ul class="list">
                <li>
                    <div class="imgs">
                        <img src="img/hot6.jpg" alt="" width="160px">
                    </div>
                    <a href="">那些陪才华的点睛之笔</a>
                    <p>在花艺作品的制作中一般都有三个板块融合穿插而成，她们分工明确而又密切合作，她们承认重点花材不可替代的.....</p>
                    <p>
                        <span>2017/8/27</span>
                        <span>王亚楠</span>
                        <span class="iconfont3">&#xe60f;40</span>
                    </p>
                </li>
                <li>
                    <div class="imgs">
                        <img src="img/hot6.jpg" alt="" width="160px">
                    </div>
                    <a href="">那些陪才华的点睛之笔</a>
                    <p>在花艺作品的制作中一般都有三个板块融合穿插而成，她们分工明确而又密切合作，她们承认重点花材不可替代的.....</p>
                    <p>
                        <span>2017/8/27</span>
                        <span>王亚楠</span>
                        <span class="iconfont3">&#xe60f;40</span>
                    </p>
                </li>
            </ul>
            <ul class="list">
                <li>
                    <div class="imgs">
                        <img src="img/hot6.jpg" alt="" width="160px">
                    </div>
                    <a href="">那些陪才华的点睛之笔</a>
                    <p>在花艺作品的制作中一般都有三个板块融合穿插而成，她们分工明确而又密切合作，她们承认重点花材不可替代的.....</p>
                    <p>
                        <span>2017/8/27</span>
                        <span>王亚楠</span>
                        <span class="iconfont3">&#xe60f;40</span>
                    </p>
                </li>
                <li>
                    <div class="imgs">
                        <img src="img/hot6.jpg" alt="" width="160px">
                    </div>
                    <a href="">那些陪才华的点睛之笔</a>
                    <p>在花艺作品的制作中一般都有三个板块融合穿插而成，她们分工明确而又密切合作，她们承认重点花材不可替代的.....</p>
                    <p>
                        <span>2017/8/27</span>
                        <span>王亚楠</span>
                        <span class="iconfont3">&#xe60f;40</span>
                    </p>
                </li>
            </ul>-->
        </main>
    </section>
    <!--景点介绍-->
    <!--酒店推荐-->
    <section class="commend">
        <div class="mask">
            <main>
                <div class="xingji">
                    <span class="iconfont icon-xing"></span>
                    <span class="iconfont icon-xing"></span>
                    <span class="iconfont icon-xing"></span>
                    <span class="iconfont icon-icon"></span>
                    <span class="iconfont icon-icon"></span>
                </div>
                <h2>Double Luxury Room</h2>
                <div class="price"><span>$560</span> / Night(Only This Week)</div>
                <a href="">BOOK THIS ROOM</a>
            </main>
        </div>
    </section>
    <!--酒店推荐-->
    <!--旅游体验-->
    <section class="huayi">
        <main>
            <h3>旅游体验
                <a href="" class="more">More
                    <div class="sanjiao2"></div>
                </a>
            </h3>
            <p class="jianjie">花艺师与您一同分享素馨花会给您的生活带去的滑向十二届</p>
            <ul class="tiyan">
                <li>
                    <img src="img/display1%20(1).jpg" alt="" width="100%">
                    <div class="mask1">
                        <h4>EXPERIENCE</h4>
                        <p>这是一次非常难忘的经历，我很开心</p>
                    </div>
                </li>
                <li>
                    <img src="img/display1%20(2).jpg" alt="" width="100%">
                    <div class="mask1">
                        <h4>EXPERIENCE</h4>
                        <p>这是一次非常难忘的经历，我很开心</p>
                    </div>
                </li>
                <li>
                    <img src="img/display1%20(3).jpg" alt="" width="100%">
                    <div class="mask1">
                        <h4>EXPERIENCE</h4>
                        <p>这是一次非常难忘的经历，我很开心</p>
                    </div>
                </li>
                <li>
                    <img src="img/display1%20(1).jpg" alt="" width="100%">
                    <div class="mask1">
                        <h4>EXPERIENCE</h4>
                        <p>这是一次非常难忘的经历，我很开心</p>
                    </div>
                </li>
                <li>
                    <img src="img/display1%20(2).jpg" alt="" width="100%">
                    <div class="mask1">
                        <h4>EXPERIENCE</h4>
                        <p>这是一次非常难忘的经历，我很开心</p>
                    </div>
                </li>
                <li>
                    <img src="img/display1%20(3).jpg" alt="" width="100%">
                    <div class="mask1">
                        <h4>EXPERIENCE</h4>
                        <p>这是一次非常难忘的经历，我很开心</p>
                    </div>
                </li>
                <li>
                    <img src="img/display1%20(1).jpg" alt="" width="100%">
                    <div class="mask1">
                        <h4>EXPERIENCE</h4>
                        <p>这是一次非常难忘的经历，我很开心</p>
                    </div>
                </li>
                <li>
                    <img src="img/display1%20(2).jpg" alt="" width="100%">
                    <div class="mask1">
                        <h4>EXPERIENCE</h4>
                        <p>这是一次非常难忘的经历，我很开心</p>
                    </div>
                </li>
                <li>
                    <img src="img/display1%20(3).jpg" alt="" width="100%">
                    <div class="mask1">
                        <h4>EXPERIENCE</h4>
                        <p>这是一次非常难忘的经历，我很开心</p>
                    </div>
                </li>
                <li>
                    <img src="img/display1%20(1).jpg" alt="" width="100%">
                    <div class="mask1">
                        <h4>EXPERIENCE</h4>
                        <p>这是一次非常难忘的经历，我很开心</p>
                    </div>
                </li>
                <li>
                    <img src="img/display1%20(2).jpg" alt="" width="100%">
                    <div class="mask1">
                        <h4>EXPERIENCE</h4>
                        <p>这是一次非常难忘的经历，我很开心</p>
                    </div>
                </li>
                <li>
                    <img src="img/display1%20(3).jpg" alt="" width="100%">
                    <div class="mask1">
                        <h4>EXPERIENCE</h4>
                        <p>这是一次非常难忘的经历，我很开心</p>
                    </div>
                </li>
            </ul>
        </main>
    </section>
    <!--旅游体验-->
    <!--底部-->
    <!--<footer>
        <div class="mask2">
            <main>
                <div class="link">
                    <span class="words">详细地址</span>
                    <span class="words">山西省太原市小店区学府街122号</span>
                    <span class="words">联系电话</span>
                    <span class="words">15935412153</span>
                    <span class="words">登录网址</span>
                    <span class="words">www.uek.com</span>
                </div>
            </main>
        </div>
    </footer>-->
    <!--底部-->
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
                <img src="img/gonganbeian.png" alt="" width="20px">
                <a href="">豫公网安备 41012202000160号</a>
            </p>
            <p class="phone">联系电话 0371-62180519 158-9006-2947</p>
            <p class="phone">郑州素馨花卉有限公司 版权所有 © 2017-2021</p>
        </main>
    </footer>
    <!--底部-->
</body>
</html>