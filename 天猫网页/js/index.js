window.onload = function () {
//    头部
    let mytaobao = document.getElementsByClassName('mytaobao');
    let yimai = document.getElementsByClassName('yimai');
    mytaobao[0].onmouseover = function () {
        yimai[0].style.display = 'block';
    }
    mytaobao[0].onmouseout = function () {
        yimai[0].style.display = 'none';
    }
    mytaobao[1].onmouseover = function () {
        yimai[1].style.display = 'block';
    }
    mytaobao[1].onmouseout = function () {
        yimai[1].style.display = 'none';
    }
    let support = document.getElementsByClassName('support');
    mytaobao[2].onmouseover = function () {
        support[0].style.display = 'block';
    }
    mytaobao[2].onmouseout = function () {
        support[0].style.display = 'none';
    }
    let daohang = document.getElementsByClassName('daohang');
    mytaobao[3].onmouseover = function () {
        daohang[0].style.display = 'block';
    }
    mytaobao[3].onmouseout = function () {
        daohang[0].style.display = 'none';
    }
//    banner部分
    let cedaohang = document.getElementById('cedaohang');
    let lis = cedaohang.getElementsByTagName('li');
    let items = cedaohang.getElementsByClassName('item');
    for (var i=0;i<lis.length;i++){
        lis[i].onmouseover = (function (i) {
            return function () {
                items[i].style.display = 'block'
            }
        })(i)
        lis[i].onmouseout = (function (i) {
            return function () {
                items[i].style.display = 'none'
            }
        })(i)
    }
    let banner = document.getElementsByClassName('bannertu');
    let bannerlis = banner[0].getElementsByTagName('li');
    let dian = document.getElementsByClassName('dian');
    let dians = dian[0].getElementsByTagName('li');

    let background = document.getElementsByClassName('background');
    let backgroundlis = background[0].getElementsByTagName('li');

    let num = 0;
    let t = setInterval(fn,3000);
    dians[0].id = 'circle';
    function fn() {
        num++;
        if (num == bannerlis.length){
            num = 0;
        }
        for (let i=0;i<bannerlis.length;i++){
            bannerlis[i].style.display = 'none';
            dians[i].id = 'none';
            backgroundlis[i].style.display = 'none';

        }
        bannerlis[num].style.display = 'block';
        dians[num].id = 'circle';
        backgroundlis[num].style.display = 'block';
    }
    let stop = document.getElementsByClassName('banner');
    stop[0].onmouseover = function () {
        clearInterval(t);
    }
    stop[0].onmouseout = function () {
        t = setInterval(fn,4000);
    }
    for (let i=0;i<dians.length;i++){
        dians[i].onmouseover = function () {
            for (let j=0;j<bannerlis.length;j++){
                bannerlis[j].style.display = 'none';
                dians[j].id = '';
                backgroundlis[j].style.display = 'none';
            }
            bannerlis[i].style.display = 'block';
            dians[i].id = 'circle';
            backgroundlis[i].style.display = 'block';
        }
    }
    //搜索栏部分
    let searchLan = document.querySelector('.searchLan');
    //获取窗口高度
    let ch = window.innerHeight;
    let flag = true;
    window.addEventListener('scroll',function () {
        //获取滚动的高度
        let sh = document.body.scrollTop;
        if (sh >= ch){
            if (flag){
                flag = !flag;
                searchLan.style.top = 0;
            }
        }else {
            if (!flag){
                flag = !flag;
                searchLan.style.top = '-50px';
            }
        }
    })
    //跳转部分
    let floor = document.querySelector('.floor');
    let floors = floor.querySelectorAll('li');
    let flag1 = true;
    window.addEventListener('scroll',function () {
        let st = document.body.scrollTop;
        if (st >= 500){
            if (flag1){
                flag1 = !flag1;
                floor.style.width = '36px';
                floor.style.height = '266px';
            }
        }else {
            if (!flag1){
                flag1 = !flag1;
                floor.style.width = '0px';
                floor.style.height = '0px';
            }
        }
        //获取每个楼层的滚动高度
        let beauty = document.querySelectorAll('.beauty');
        let arr = [];
        beauty.forEach(element=>{
            return arr.push(element.offsetTop);
        })
        let like = document.querySelector('.love');
        arr.push(like.offsetTop);
        arr.forEach((value,index)=>{
            if (st+200>=value){
                for (let i=0;i<6;i++){
                    floors[i].id = '';
                }
                floors[index+1].id = `color${index+1}`;
            }
        })
        floors.forEach(function (element,index) {
            element.onclick = function () {
                // document.body.scrollTop = arr[index-1];
                animate(document.body,{scrollTop:arr[index-1]})
            }
        })
    })

}