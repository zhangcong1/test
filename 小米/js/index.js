window.onload = function () {
    //banner轮播图
    /*let lunbodian = document.getElementsByClassName('lunbodian');
    let lunbo = lunbodian[0].getElementsByTagName('li');
    let banner = document.getElementsByClassName('banner');
    let imgs = banner[0].getElementsByTagName('li');*/
    /*console.log(lunbo);
    console.log(imgs);*/
    // 方法一
    /*for (let i=0;i<lunbo.length;i++){
        lunbo[0].id = 'circle';
        lunbo[i].onclick = function () {
            for (let j=0;j<imgs.length;j++){
                imgs[j].style.display = 'none';
                lunbo[j].id = '';
            }
            imgs[i].style.display = 'block';
            lunbo[i].id = 'circle';
        }
    }*/
    // 方法二
    /*let num = 0;
    for (let i=0;i<lunbo.length;i++){
        lunbo[i].onclick = function () {
            for (let j=0;j<imgs.length;j++){
                imgs[j].style.display = 'none';
            }
            imgs[num].style.display = 'none';
            imgs[i].style.display = 'block';
            num = i;
        }
    }*/
//    自动播放
    /*let num = 0;
    let t = setInterval(fn,3000);
    function fn() {
        num++;
        lunbo[0].id = 'circle';
        if (num == imgs.length){
            num = 0;
        }
        for (let i=0;i<imgs.length;i++){
            imgs[i].style.display = 'none';
            lunbo[i].id = '';
        }
        imgs[num].style.display = 'block';
        lunbo[num].id = 'circle';
    }*/
//    点返回，前进键
    /*let bannerPart = document.getElementsByClassName('bannerPart')
    bannerPart[0].onmouseover = function () {
        clearInterval(t);
    }
    bannerPart[0].onmouseout = function () {
        t = setInterval(fn,3000);
    }
    let back = document.getElementsByClassName('back');
    let forward = document.getElementsByClassName('forward');
    forward[0].onclick = function () {
        fn();
    }
    function fn1() {
        num--;
        lunbo[0].id = 'circle';
        if (num == -1){
            num = imgs.length-1;
        }
        for (let i=0;i<imgs.length;i++){
            imgs[i].style.display = 'none';
            lunbo[i].id = '';
        }
        imgs[num].style.display = 'block';
        lunbo[num].id = 'circle';
    }
    back[0].onclick = function () {
        fn1();
    }*/
//    侧边栏
    let aside = document.getElementsByTagName('aside');
    let lis = aside[0].getElementsByClassName('lis');
    //方法一
    /*let item = aside[0].getElementsByClassName('item');
    for (let i=0;i<lis.length;i++){
        lis[i].onmouseover = function () {
            item[i].style.display = 'block';
        }
        lis[i].onmouseout = function () {
            item[i].style.display = 'none';
        }
    }*/
//    方法二
    /*for (let i=0;i<lis.length;i++){
        lis[i].onmouseover = function () {
            let item = lis[i].getElementsByClassName('item')[0];
            item.style.display = 'block'
        }
        lis[i].onmouseout = function () {
            let item = lis[i].getElementsByClassName('item')[0];
            item.style.display = 'none'
        }
    }*/
//    方法三
    /*for (let i=0;i<lis.length;i++){
        lis[i].onmouseover = function () {
            let item = lis[i].getElementsByClassName('item')[0];
            item.classList.remove('none');
            item.classList.add('block');
        }
        lis[i].onmouseout = function () {
            let item = lis[i].getElementsByClassName('item')[0];
            item.classList.remove('block');
            item.classList.add('none');
        }
    }*/
//    方法四
    /*for (let i=0;i<lis.length;i++){
        lis[i].onmouseover = function () {
            let item = lis[i].getElementsByClassName('item')[0];
            item.classList.toggle('block');
        }
        lis[i].onmouseout = function () {
            let item = lis[i].getElementsByClassName('item')[0];
            item.classList.toggle('block');
        }
    }*/
//    方法五
    /*for (var i=0;i<lis.length;i++){
        lis[i].index = i;
        lis[i].onmouseover = function () {
            let item = lis[this.index].getElementsByClassName('item')[0];
            item.classList.toggle('block');
        }
        lis[i].onmouseout = function () {
            let item = lis[this.index].getElementsByClassName('item')[0];
            item.classList.toggle('block');
        }
    }*/
//    方法六  闭包
    for (var i=0;i<lis.length;i++){
        lis[i].onmouseover = (function (i) {
            return function () {
                let item = lis[i].getElementsByClassName('item')[0];
                item.classList.toggle('block');
            }
        })(i)
        lis[i].onmouseout = (function (i) {
            return function () {
                let item = lis[i].getElementsByClassName('item')[0];
                item.classList.toggle('block');
            }
        })(i)
    }

    let banner = document.querySelector('.banner');
    let imgs = banner.children;
    let bannerW = banner.offsetWidth;
    let lunbodian = document.querySelector('.lunbodian')
    let lunbo = lunbodian.children;
    //自动播放
    let nows = 0,nexts = 0;
    lunbo[0].id = 'circle'
    let t = setInterval(move,3000);
    function move() {
        nexts++;
        if (nexts == imgs.length){
            nexts = 0;
        }
        lunbo[nows].id = '';
        lunbo[nexts].id = 'circle';
        imgs[nexts].style.left = `${bannerW}px`;
        animate(imgs[nows],{left:-bannerW});
        animate(imgs[nexts],{left:0},function () {flag = true})
        nows = nexts;
    }
    //清除自动播放
    let banners = document.querySelector('.banners')
    banners.onmouseover = function () {
        clearInterval(t);
    }
    banners.onmouseout = function () {
        t = setInterval(move,3000);
    }

    //点击轮播点
    for (let i=0;i<lunbo.length;i++){
        lunbo[i].onclick = function () {
            if (i == nows){
                return ;
            }
            lunbo[nows].id = '';
            lunbo[i].id = 'circle'
            if (i>nows){
                imgs[i].style.left = `${bannerW}px`;
                animate(imgs[i],{left:0});
                animate(imgs[nows],{left:-bannerW});
            }else if (i<nows){
                imgs[i].style.left = `${-bannerW}px`;
                animate(imgs[i],{left:0});
                animate(imgs[nows],{left:bannerW});
            }
            nows = nexts = i;
        }
    }
    //点击前进，返回
    let forward = document.querySelector('.forward');
    let back = document.querySelector('.back');
    let flag = true;
    forward.onclick = function () {
        if (!flag){
            return ;
        }
        flag = false;
        move();
    }
    back.onclick = function () {
        if (!flag){
            return ;
        }
        flag = false;
        move1();
    }
    function move1() {
        nexts--;
        if (nexts == -1){
            nexts = imgs.length-1;
        }
        lunbo[nows].id = '';
        lunbo[nexts].id = 'circle';
        imgs[nexts].style.left = `${-bannerW}px`;
        animate(imgs[nows],{left:bannerW});
        animate(imgs[nexts],{left:0},function () {flag = true})
        nows = nexts;
    }
    // 购物车部分
    let car = document.getElementsByClassName('car');
    let gouwu = document.getElementsByClassName('gouwu');
    let xinxi = document.getElementsByClassName('xinxi')
    car[0].onmouseover = function () {
        gouwu[0].style.height = '98px';
    }
    car[0].onmouseout = function () {
        gouwu[0].style.height = 0;
    }
//    搜索框部分
    let input = document.getElementsByClassName('tex');
    let tijiao = document.getElementsByClassName('tijiao');
    let inputkuang = document.getElementsByClassName('inputkuang');
    let sousuo1 = document.getElementsByClassName('sousuo1');
    let sousuo2 = document.getElementsByClassName('sousuo2');
    let navright = document.querySelector('.nav-right');
    navright.onmouseenter = function () {
        input[0].style.border = '1px solid #A9A9A9';
        tijiao[0].style.borderTop = '1px solid #A9A9A9';
        tijiao[0].style.borderBottom = '1px solid #A9A9A9';
        tijiao[0].style.borderRight = '1px solid #A9A9A9';
    }
    navright.onmouseleave = function () {
        input[0].style.border = '1px solid rgb(224,224,224)';
        tijiao[0].style.borderTop = '1px solid rgb(224,224,224)';
        tijiao[0].style.borderBottom = '1px solid rgb(224,224,224)';
        tijiao[0].style.borderRight = '1px solid rgb(224,224,224)';
    }
    input[0].onclick = function () {
        input[0].style.border = '1px solid rgb(255,103,0)';
        tijiao[0].style.borderTop = '1px solid rgb(255,103,0)';
        tijiao[0].style.borderBottom = '1px solid rgb(255,103,0)';
        tijiao[0].style.borderRight = '1px solid rgb(255,103,0)';
        inputkuang[0].style.display = 'block';
        sousuo1[0].classList.add('none');
        sousuo2[0].classList.add('none');
        navright.onmouseenter = null;
        navright.onmouseleave = null;
    }
    input[0].onblur = function () {
        input[0].style.border = '1px solid rgb(224,224,224)';
        tijiao[0].style.borderTop = '1px solid rgb(224,224,224)';
        tijiao[0].style.borderBottom = '1px solid rgb(224,224,224)';
        tijiao[0].style.borderRight = '1px solid rgb(224,224,224)';
        inputkuang[0].style.display = 'none';
        sousuo1[0].classList.remove('none');
        sousuo2[0].classList.remove('none');
        sousuo1[0].classList.add('block');
        sousuo2[0].classList.add('block');
        navright.onmouseleave = function () {
            input[0].style.border = '1px solid rgb(224,224,224)';
            tijiao[0].style.borderTop = '1px solid rgb(224,224,224)';
            tijiao[0].style.borderBottom = '1px solid rgb(224,224,224)';
            tijiao[0].style.borderRight = '1px solid rgb(224,224,224)';
        };
        navright.onmouseenter = function () {
            input[0].style.border = '1px solid #A9A9A9';
            tijiao[0].style.borderTop = '1px solid #A9A9A9';
            tijiao[0].style.borderBottom = '1px solid #A9A9A9';
            tijiao[0].style.borderRight = '1px solid #A9A9A9';
        }
    }

//    导航栏部分
    let nav = document.getElementsByTagName('nav');
    let daohang = nav[0].getElementsByTagName('li');
    let extend = document.getElementsByClassName('extend');
    let shang1 = document.querySelectorAll('.shang1');
    for (let i=0;i<daohang.length-2;i++){
        daohang[i].onmouseenter = function () {
            for (let j=0;j<shang1.length;j++){
                shang1[j].style.display = 'none'
            }
            shang1[i].style.display = 'block'
            extend[0].style.height = '229px';
            extend[0].style.borderTop = '1px solid rgb(224,224,224)';
            extend[0].style.boxShadow = '0 3px 5px rgba(0,0,0,0.2)';
        }
        daohang[i].onmousemove = function () {
            for (let j=0;j<shang1.length;j++){
                shang1[j].style.display = 'none'
            }
            shang1[i].style.display = 'block'
            extend[0].style.height = '229px';
            extend[0].style.borderTop = '1px solid rgb(224,224,224)';
            extend[0].style.boxShadow = '0 3px 5px rgba(0,0,0,0.2)';
        }
        daohang[i].onmouseleave = function () {
            extend[0].style.height = 0;
            extend[0].style.borderTop = '0px solid rgb(224,224,224)';
            extend[0].style.boxShadow = '';
        }
    }
    extend[0].onmouseenter = function () {
        extend[0].style.height = '229px';
        extend[0].style.borderTop = '1px solid rgb(224,224,224)';
        extend[0].style.boxShadow = '0 3px 5px rgba(0,0,0,0.2)';
    }
    extend[0].onmouseleave = function () {
        extend[0].style.height = 0;
        extend[0].style.borderTop = '0px solid rgb(224,224,224)';
        extend[0].style.boxShadow = '';
    }
//    单品部分
    /*let main1 = document.getElementsByClassName('main1');
    let main2 = document.getElementsByClassName('main2');

    let fanye1 = document.getElementsByClassName('fanye1');
    let fanye2 = document.getElementsByClassName('fanye2');
    let iconfont3 = document.getElementsByClassName('iconfont3');
    let iconfont4 = document.getElementsByClassName('iconfont4');
    fanye1[0].onclick = function () {
        main1[0].style.transform = 'translateX(-1226px)';
        main2[0].style.transform = 'translateX(0)';
        iconfont3[0].style.color = 'rgb(224,224,224)';
        iconfont4[0].style.color = 'rgb(176,176,182)';
        fanye1[0].style.cursor = 'default';
        fanye2[0].style.cursor = 'pointer';
    }
    fanye2[0].onclick = function () {
        main1[0].style.transform = 'translateX(0)';
        main2[0].style.transform = 'translateX(1226px)';
        iconfont4[0].style.color = 'rgb(224,224,224)';
        iconfont3[0].style.color = 'rgb(176,176,182)';
        fanye1[0].style.cursor = 'pointer';
        fanye2[0].style.cursor = 'default';
    }
    main1[0].onmouseover = function () {
        clearInterval(a);
    }
    main1[0].onmouseout = function () {
        a = setInterval(fnn1,3000);
    }
    fanye1[0].onmouseover = function () {
        clearInterval(a);
        // iconfont3[0].style.color = 'rgb(255,103,0)';
    }
    fanye1[0].onmouseout = function () {
        a = setInterval(fnn1,3000);
        // iconfont3[0].style.color = 'rgb(224,224,224)';
    }
    fanye2[0].onmouseover = function () {
        clearInterval(a);
    }
    fanye2[0].onmouseout = function () {
        a = setInterval(fnn1,3000);
    }

    let a = setInterval(fnn1,3000);
    let flag = false;
    function fnn1() {
        if (flag){
            main1[0].style.transform = 'translateX(0)';
            main2[0].style.transform = 'translateX(1226px)';
            flag = !flag;
            iconfont4[0].style.color = 'rgb(224,224,224)';
            iconfont3[0].style.color = 'rgb(176,176,182)';
        }else {
            main1[0].style.transform = 'translateX(-1226px)';
            main2[0].style.transform = 'translateX(0)';
            flag = !flag;
            iconfont3[0].style.color = 'rgb(224,224,224)';
            iconfont4[0].style.color = 'rgb(176,176,182)';
        }
    }*/

// 单品部分
    let main1 = document.querySelector('.main1');
    let fanye1 = document.querySelector('.fanye1')
    let fanye2 = document.querySelector('.fanye2')
    let iconfont3 = document.querySelector('.iconfont3')
    let iconfont4 = document.querySelector('.iconfont4')

    fanye1.onclick = function () {
        // this.disabled = true;
        main1.style.marginLeft = `0px`;
        iconfont3.style.color = 'rgb(224,224,224)';
        iconfont4.style.color = 'rgb(176,176,182)';
        fanye1.style.cursor = 'default';
        fanye2.style.cursor = 'pointer';

        fanye1.onmouseover = null;

        fanye2.onmouseover = function () {
            iconfont4.style.color = 'rgb(255,103,0)';
        }
        fanye2.onmouseout = function () {
            iconfont4.style.color = 'rgb(224,224,224)';
        }
    }
    fanye2.onclick = function () {
        // this.disabled = true;
        main1.style.marginLeft = `-1226px`;
        iconfont3.style.color = 'rgb(176,176,182)';
        iconfont4.style.color = 'rgb(224,224,224)';
        fanye1.style.cursor = 'pointer';
        fanye2.style.cursor = 'default';

        fanye2.onmouseover = null;

        fanye1.onmouseover = function () {
            iconfont3.style.color = 'rgb(255,103,0)';
        }
        fanye1.onmouseout = function () {
            iconfont3.style.color = 'rgb(224,224,224)';
        }
    }
    //鼠标移入
    fanye2.onmouseover = function () {
        iconfont4.style.color = 'rgb(255,103,0)';
    }
    fanye2.onmouseout = function () {
        iconfont4.style.color = 'rgb(224,224,224)';
    }
    //自动播放
    let a = setInterval(yidong,2000);
    let flags = true;
    function yidong() {
        if(flags){
            main1.style.marginLeft = `0px`;
            iconfont3.style.color = 'rgb(224,224,224)';
            iconfont4.style.color = 'rgb(176,176,182)';
            fanye1.style.cursor = 'default';
            fanye2.style.cursor = 'pointer';
            flags = !flags;
        }else {
            main1.style.marginLeft = `-1226px`;
            iconfont3.style.color = 'rgb(176,176,182)';
            iconfont4.style.color = 'rgb(224,224,224)';
            fanye1.style.cursor = 'pointer';
            fanye2.style.cursor = 'default';
            flags = !flags;
        }
    }
    //清除自动播放
    main1.onmouseover = function () {
        clearInterval(a);
    }
    main1.onmouseout = function () {
        a = setInterval(yidong,2000);
    }
    let fanye = document.querySelector('.fanye');
    fanye.onmouseover = function () {
        clearInterval(a);
    }
    fanye.onmouseout = function () {
        a = setInterval(yidong,2000);
    }


//    家电部分
    let jiadian = document.getElementsByClassName('jiadian');
    let name = jiadian[0].getElementsByClassName('name');
    let remen = name[0].getElementsByTagName('a');
    let part = jiadian[0].getElementsByTagName('li');
    remen[0].style.color = '#FF6700';
    remen[0].style.borderBottom = '2px solid #FF6700';
    for (let i=0;i<remen.length;i++){
        remen[i].onmouseover = function () {
            for (let j=0;j<remen.length;j++){
                remen[j].style.color = '';
                remen[j].style.borderBottom = '';
                part[j].style.display = 'none';
            }
            remen[i].style.color = '#FF6700';
            part[i].style.display = 'block';
            remen[i].style.borderBottom = '2px solid #FF6700';
        }
    }
//    智能部分
    let zhineng = document.getElementsByClassName('zhineng');
    let name1 = zhineng[0].getElementsByClassName('name');
    let remen1 = name1[0].getElementsByTagName('a');
    let part1 = zhineng[0].getElementsByTagName('li');
    remen1[0].style.color = '#FF6700';
    remen1[0].style.borderBottom = '2px solid #FF6700';
    for (let i=0;i<remen1.length;i++){
        remen1[i].onmouseover = function () {
            for (let j=0;j<remen1.length;j++){
                remen1[j].style.color = '';
                remen1[j].style.borderBottom = '';
                part1[j].style.display = 'none';
            }
            remen1[i].style.color = '#FF6700';
            remen1[i].style.borderBottom = '2px solid #FF6700';
            part1[i].style.display = 'block';
        }
    }
    //    搭配部分
    let name2 = zhineng[1].getElementsByClassName('name');
    let remen2 = name2[0].getElementsByTagName('a');
    let part2 = zhineng[1].getElementsByTagName('li');
    remen2[0].style.color = '#FF6700';
    remen2[0].style.borderBottom = '2px solid #FF6700';
    for (let i=0;i<remen2.length;i++){
        remen2[i].onmouseover = function () {
            for (let j=0;j<remen2.length;j++){
                remen2[j].style.color = '';
                remen2[j].style.borderBottom = '';
                part2[j].style.display = 'none';
            }
            remen2[i].style.color = '#FF6700';
            remen2[i].style.borderBottom = '2px solid #FF6700';
            part2[i].style.display = 'block';
        }
    }
    //    周边部分
    let name3 = zhineng[2].getElementsByClassName('name');
    let remen3 = name3[0].getElementsByTagName('a');
    let part3 = zhineng[2].getElementsByTagName('li');
    remen3[0].style.color = '#FF6700';
    remen3[0].style.borderBottom = '2px solid #FF6700';
    for (let i=0;i<remen3.length;i++){
        remen3[i].onmouseover = function () {
            for (let j=0;j<remen3.length;j++){
                remen3[j].style.color = '';
                remen3[j].style.borderBottom = '';
                part3[j].style.display = 'none';
            }
            remen3[i].style.color = '#FF6700';
            remen3[i].style.borderBottom = '2px solid #FF6700';
            part3[i].style.display = 'block';
        }
    }
//    为你推荐部分
    let main4 = document.querySelector('.main4');
    let fanye3 = document.querySelectorAll('.fanye1')[1];
    let fanye4 = document.querySelectorAll('.fanye2')[1];
    //获取宽度
    let childCount = main4.childElementCount;
    console.log(childCount)
    let childW = main4.children[0].offsetWidth + parseInt(getComputedStyle(main4.children[0],null).marginRight) ;
    console.log(childW)
    main4.style.width = `${childW*childCount-14*4}px`
    console.log(`${childW*childCount-14*4}`)

    let index = 0;

    let iconfont5 = document.querySelectorAll('.iconfont3')[1]
    let iconfont6 = document.querySelectorAll('.iconfont4')[1]

    fanye4.onclick = function () {

        if (index == 3){
            this.disabled = true;
            return ;
        }
        index++;
        main4.style.marginLeft = `${-index*1226}px`;
        iconfont5.style.color = 'rgb(176,176,182)';
        iconfont6.style.color = 'rgb(176,176,182)';
        fanye3.style.cursor = 'pointer';
        fanye4.style.cursor = 'pointer';
        if (index == 3){
            iconfont5.style.color = 'rgb(176,176,182)';
            iconfont6.style.color = 'rgb(224,224,224)';
            fanye3.style.cursor = 'pointer';
            fanye4.style.cursor = 'default';

            // iconfont6.style.color = 'rgb(224,224,224)'
            fanye4.onmouseover = null;
            fanye4.onmouseout = null;
            return ;
        }
        iconfont6.style.color = 'rgb(255,103,0)'
        fanye3.onmouseover = function () {
            iconfont5.style.color = 'rgb(255,103,0)'
        }
        fanye3.onmouseout = function () {
            iconfont5.style.color = 'rgb(176,176,182)'
        }
        fanye4.onmouseover = function () {
            iconfont6.style.color = 'rgb(255,103,0)'
        }
        fanye4.onmouseout = function () {
            iconfont6.style.color = 'rgb(176,176,182)'
        }
    }
    fanye3.onclick = function () {
        // this.disabled = true;
        if (index == 0){
            return ;
        }
        index--;
        main4.style.marginLeft = `${-index*1226}px`;
        iconfont5.style.color = 'rgb(176,176,182)';
        iconfont6.style.color = 'rgb(176,176,182)';
        fanye3.style.cursor = 'pointer';
        fanye4.style.cursor = 'pointer';
        if (index == 0){
            iconfont5.style.color = 'rgb(224,224,224)';
            iconfont6.style.color = 'rgb(176,176,182)';
            fanye3.style.cursor = 'default';
            fanye4.style.cursor = 'pointer';

            // iconfont5.style.color = 'rgb(224,224,224)'
            fanye3.onmouseover = null;
            fanye3.onmouseout = null;
            return ;
        }
        iconfont5.style.color = 'rgb(255,103,0)'
        fanye3.onmouseover = function () {
            iconfont5.style.color = 'rgb(255,103,0)'
        }
        fanye3.onmouseout = function () {
            iconfont5.style.color = 'rgb(176,176,182)'
        }
        fanye4.onmouseover = function () {
            iconfont6.style.color = 'rgb(255,103,0)'
        }
        fanye4.onmouseout = function () {
            iconfont6.style.color = 'rgb(176,176,182)'
        }
    }
    fanye3.onmouseover = function () {
        iconfont5.style.color = 'rgb(224,224,224)'
    }
    fanye3.onmouseout = function () {
        iconfont5.style.color = 'rgb(224,224,224)'
    }
    fanye4.onmouseover = function () {
        iconfont6.style.color = 'rgb(255,103,0)'
    }
    fanye4.onmouseout = function () {
        iconfont6.style.color = 'rgb(176,176,182)'
    }

    //自动播放
    let b = setInterval(yidong1,2000)
    let panding = true;
    function yidong1() {
        if(panding){
            index++;
            main4.style.marginLeft = `${-index*1226}px`;
            if (index == 3){
                panding = !panding;
                iconfont5.style.color = 'rgb(176,176,182)';
                iconfont6.style.color = 'rgb(224,224,224)';
                fanye3.style.cursor = 'pointer';
                fanye4.style.cursor = 'default';
            }
            if (index > 0 && index <3){
                iconfont5.style.color = 'rgb(176,176,182)';
                iconfont6.style.color = 'rgb(176,176,182)';
                fanye3.style.cursor = 'pointer';
                fanye4.style.cursor = 'pointer';
            }
        }else {
            index--;
            main4.style.marginLeft = `${-index*1226}px`;
            if (index == 0){
                panding = !panding;
                iconfont6.style.color = 'rgb(176,176,182)';
                iconfont5.style.color = 'rgb(224,224,224)';
                fanye4.style.cursor = 'pointer';
                fanye3.style.cursor = 'default';
            }
            if (index > 0 && index <3){
                iconfont5.style.color = 'rgb(176,176,182)';
                iconfont6.style.color = 'rgb(176,176,182)';
                fanye3.style.cursor = 'pointer';
                fanye4.style.cursor = 'pointer';
            }
        }
    }
    //清除自动播放
    main4.onmouseover = function () {
        clearInterval(b);
    }
    main4.onmouseout = function () {
        b = setInterval(yidong1,2000);
    }
    let fanyes = document.querySelectorAll('.fanye')[1];
    fanyes.onmouseover = function () {
        clearInterval(b);
    }
    fanyes.onmouseout = function () {
        b = setInterval(yidong1,2000);
    }

//    内容部分
    let part_1 = document.querySelectorAll('.part_1');
    let content = part_1[0].children;
    let zuobian = document.querySelectorAll('.zuobian');
    let youbian = document.querySelectorAll('.youbian');
    let dian = document.querySelectorAll('.dian');
    let dianlis1 = dian[0].children;
    let widths = part_1[0].offsetWidth;

    let flag2 = true;
    let now1 = 0,next1 = 0;
    dianlis1[0].id = 'border';
    youbian[0].onclick = function () {

        if (next1 == content.length-1){
            return ;
        }
        if (!flag2){
            return;
        }
        flag2 = false;
        next1++;
        if (next1 == content.length-1){
            youbian[0].style.cursor = 'default';
        }
        zuobian[0].style.cursor = 'pointer';
        dianlis1[now1].id = '';
        dianlis1[next1].id = 'border'
        // content[next1].style.left = `${widths}px`;
        animate(content[now1],{left:-widths});
        animate(content[next1],{left:0},function () {flag2=true});
        now1 = next1;
    }

    zuobian[0].onclick = function () {

        if (next1 == 0){
            return ;
        }
        if (!flag2){
            return ;
        }
        flag2 = false;
        next1--;
        if (next1 == 0){
            zuobian[0].style.cursor = 'default';
        }
        youbian[0].style.cursor = 'pointer';
        dianlis1[now1].id = '';
        dianlis1[next1].id = 'border'
        // content[next1].style.left = `${-widths}px`;
        animate(content[now1],{left:widths});
        animate(content[next1],{left:0},function () {flag2 = true});
        now1 = next1;
    }
    //点击轮播点
    for (let i=0;i<dianlis1.length;i++){
        dianlis1[i].onclick = function () {
            if (now1<i){
                content[i].style.left = `${widths}px`
                animate(content[now1],{left:-widths});
                animate(content[i],{left:0});
            }else if (now1>i){
                content[i].style.left = `${-widths}px`
                animate(content[now1],{left:widths});
                animate(content[i],{left:0});
            }else if (now1 == i){
                return ;
            }
            dianlis1[now1].id = '';
            dianlis1[i].id = 'border';
            now1 = next1 = i;
        }
    }
    //内容2
    let content1 = part_1[1].children;
    let dianlis2 = dian[1].children;
    let now2 = 0,next2 = 0;

    dianlis2[0].id = 'border';
    youbian[1].onclick = function () {
        if (next2 == content1.length-1){
            return ;
        }
        if (!flag2){
            return;
        }
        flag2 = false;
        next2++;
        if (next2 == content1.length-1){
            youbian[1].style.cursor = 'default';
        }
        zuobian[1].style.cursor = 'pointer';

        dianlis2[now2].id = '';
        dianlis2[next2].id = 'border'
        content1[next2].style.left = `${widths}px`;
        animate(content1[now2],{left:-widths});
        animate(content1[next2],{left:0},function () {flag2 = true});
        now2 = next2;
    }
    zuobian[1].onclick = function () {
        if (next2 == 0){
            return ;
        }
        if (!flag2){
            return;
        }
        flag2 = false;
        next2--;
        if (next2 == 0){
            zuobian[1].style.cursor = 'default';
        }

        youbian[1].style.cursor = 'pointer';
        dianlis2[now2].id = '';
        dianlis2[next2].id = 'border'
        content1[next2].style.left = `${-widths}px`;
        animate(content1[now2],{left:widths});
        animate(content1[next2],{left:0},function () {flag2 = true});
        now2 = next2;
    }
    //点击轮播点
    for (let i=0;i<dianlis2.length;i++){
        dianlis2[i].onclick = function () {
            if (now2<i){
                content1[i].style.left = `${widths}px`
                animate(content1[now2],{left:-widths});
                animate(content1[i],{left:0});
            }else if (now2>i){
                content1[i].style.left = `${-widths}px`
                animate(content1[now2],{left:widths});
                animate(content1[i],{left:0});
            }else if (now2 == i){
                return ;
            }
            dianlis2[now2].id = '';
            dianlis2[i].id = 'border';
            now2 = next2 = i;
        }
    }
    //内容3
    let content2 = part_1[2].children;
    let dianlis3 = dian[2].children;
    let now3 = 0,next3 = 0;

    dianlis3[0].id = 'border';
    youbian[2].onclick = function () {
        if (next3 == content2.length-1){
            return ;
        }
        if (!flag2){
            return;
        }
        flag2 = false;
        next3++;
        if (next3 == content2.length-1){
            youbian[2].style.cursor = 'default';
        }
        zuobian[2].style.cursor = 'pointer';

        dianlis3[now3].id = '';
        dianlis3[next3].id = 'border'
        content2[next3].style.left = `${widths}px`;
        animate(content2[now3],{left:-widths});
        animate(content2[next3],{left:0},function () {flag2 = true});
        now3 = next3;
    }
    zuobian[2].onclick = function () {
        if (next3 == 0){
            return ;
        }
        if (!flag2){
            return;
        }
        flag2 = false;
        next3--;
        if (next3 == 0){
            zuobian[2].style.cursor = 'default';
        }
        youbian[2].style.cursor = 'pointer';

        dianlis3[now3].id = '';
        dianlis3[next3].id = 'border'
        content2[next3].style.left = `${-widths}px`;
        animate(content2[now3],{left:widths});
        animate(content2[next3],{left:0},function () {flag2 = true});
        now3 = next3;
    }
    //点击轮播点
    for (let i=0;i<dianlis3.length;i++){
        dianlis3[i].onclick = function () {
            if (now3<i){
                content2[i].style.left = `${widths}px`
                animate(content2[now3],{left:-widths});
                animate(content2[i],{left:0});
            }else if (now3>i){
                content[i].style.left = `${-widths}px`
                animate(content2[now3],{left:widths});
                animate(content2[i],{left:0});
            }else if (now3 == i){
                return ;
            }
            dianlis3[now3].id = '';
            dianlis3[i].id = 'border';
            now3 = next3 = i;
        }
    }
    //内容4
    let content3 = part_1[3].children;
    let dianlis4 = dian[3].children;
    let now4 = 0,next4 = 0;

    dianlis4[0].id = 'border';
    youbian[3].onclick = function () {
        if (next4 == content3.length-1){
            return ;
        }
        if (!flag2){
            return;
        }
        flag2 = false;
        next4++;
        if (next4 == content3.length-1){
            youbian[3].style.cursor = 'default';
        }
        zuobian[3].style.cursor = 'pointer';

        dianlis4[now4].id = '';
        dianlis4[next4].id = 'border'
        content3[next4].style.left = `${widths}px`;
        animate(content3[now4],{left:-widths});
        animate(content3[next4],{left:0},function () {flag2 = true});
        now4 = next4;
    }
    zuobian[3].onclick = function () {
        if (next4 == 0){
            return ;
        }
        if (!flag2){
            return;
        }
        flag2 = false;
        next4--;
        if (next4 == 0){
            zuobian[3].style.cursor = 'default';
        }
        youbian[3].style.cursor = 'pointer';

        dianlis4[now4].id = '';
        dianlis4[next4].id = 'border'
        content3[next4].style.left = `${-widths}px`;
        animate(content3[now4],{left:widths});
        animate(content3[next4],{left:0},function () {flag2 = true});
        now4 = next4;
    }
    //点击轮播点
    for (let i=0;i<dianlis4.length;i++){
        dianlis4[i].onclick = function () {
            if (now4<i){
                content3[i].style.left = `${widths}px`
                animate(content3[now4],{left:-widths});
                animate(content3[i],{left:0});
            }else if (now4>i){
                content3[i].style.left = `${-widths}px`
                animate(content3[now4],{left:widths});
                animate(content3[i],{left:0});
            }else if (now4 == i){
                return ;
            }
            dianlis4[now4].id = '';
            dianlis4[i].id = 'border';
            now4 = next4 = i;
        }
    }
}