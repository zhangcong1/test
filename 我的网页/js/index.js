window.onload = function () {

    let title1 = document.querySelector('.title1');
    let title2 = document.querySelector('.title2');
    let title3 = document.querySelector('.title3');
    title1.style.opacity = 1;
    animate(title1,{top:250});

    let banner = document.querySelector('.banner');
    let imgs = banner.querySelectorAll('li');
    let lunbo = document.querySelector('.lunbo');
    let circle = lunbo.querySelectorAll('li');
    //自动播放
    let t = setInterval(fn,2000);
    let now=0, next=0;
    circle[0].id = 'color';
    function fn() {
        next++;
        if (next == imgs.length){
            next = 0;
        }
        //轮播点
        circle[now].id = '';
        circle[next].id = 'color';

        imgs[next].style.left = '1349px'
        animate(imgs[now],{left:-1349})
        animate(imgs[next],{left:0},function () {flag=true});
        // title1.style.opacity = 0;
        title2.style.opacity = 1;
        animate(title2,{top:250});
        title3.style.opacity = 1;
        animate(title3,{top:300});
        now = next;
    }
    //清除自动播放
    let header = document.querySelector('header');
    header.onmouseenter = function () {
        clearInterval(t);
    }
    header.onmouseleave = function () {
        t = setInterval(fn,2000);
    }
    //点击轮播点
    for (let i=0;i<circle.length;i++){
        circle[i].onclick = function () {
            if (now<i){
                circle[now].id = '';
                circle[i].id = 'color'
                animate(imgs[now],{left:-1349})
                animate(imgs[i],{left:0});
                now = next = i;
            }
            if (now>i){
                circle[now].id = '';
                circle[i].id = 'color'
                animate(imgs[now],{left:1349})
                animate(imgs[i],{left:0});
                now = next = i;
            }
        }
    }
    //前进，后退
    let back = document.querySelector('.back');
    let forward = document.querySelector('.forward');
    let flag = true;
    forward.onclick = function () {
        if (!flag){
            return ;
        }
        flag = !flag;
        fn();
    }
    back.onclick = function () {
        if (!flag){
            return ;
        }
        flag = !flag;
        fn1();
    }
    function fn1() {
        next--;
        if (next == -1){
            next = imgs.length-1;
        }
        //轮播点
        circle[now].id = '';
        circle[next].id = 'color';

        imgs[next].style.left = '-1349px'
        animate(imgs[now],{left:1349})
        animate(imgs[next],{left:0},function () {flag=true})
        now = next;
    }

    let nav = document.querySelector('.nav')
    let lis = nav.querySelectorAll('li');
    let sort = document.querySelector('.sort');
    let sorts = sort.querySelectorAll('a');
    
    lis[1].onmouseenter = function () {
        sorts.forEach(ele=>{
            animate(ele,{left:15});
        })
    }
    lis[1].onmouseleave = function () {
        sorts.forEach(ele=>{
            animate(ele,{left:-90});
        })
    }



    //滚动事件
    let head = document.querySelector('.head');
    let navi = document.querySelectorAll('.navi');
    let sanjiao = document.querySelector('.sanjiao')
    window.onscroll =function () {
        let st = document.body.scrollTop;
        if (st>0){
            head.style.background = 'white';
            head.style.borderBottom = '1px solid #D9D9D9';
            sanjiao.style.borderTop = '4px solid #2A333C';
            for (let i=1;i<navi.length;i++){
                navi[i].style.color = '#2A333C';
                navi[i].onmouseenter = function () {
                    for (let j=1;j<navi.length;j++){
                        navi[j].style.color = '#2A333C';
                    }
                    navi[i].style.color = '#16b0dc';
                }
                navi[i].onmouseleave = function () {
                    for (let j=1;j<navi.length;j++){
                        navi[j].style.color = '#2A333C';
                    }
                }
            }
            navi[1].onmouseenter = function () {
                navi[1].style.color = '#16b0dc';
                sanjiao.style.borderTop = '4px solid #16b0dc';
            }
            navi[1].onmouseleave = function () {
                navi[1].style.color = '#2A333C';
                sanjiao.style.borderTop = '4px solid #2A333C';
            }
        }
        if (st == 0){
            head.style.background = 'rgba(0,0,0,0.15)';
            head.style.borderBottom = 'none';
            sanjiao.style.borderTop = '4px solid #fff';
            for (let i=1;i<navi.length;i++){
                navi[i].style.color = '#fff';
                navi[i].onmouseenter = function () {
                    for (let j=1;j<navi.length;j++){
                        navi[j].style.color = '#fff';
                    }
                    navi[i].style.color = '#16b0dc';
                }
                navi[i].onmouseleave = function () {
                    for (let j=1;j<navi.length;j++){
                        navi[j].style.color = '#fff';
                    }
                }
            }
            navi[1].onmouseenter = function () {
                navi[1].style.color = '#16b0dc';
                sanjiao.style.borderTop = '4px solid #16b0dc';
            }
            navi[1].onmouseleave = function () {
                navi[1].style.color = '#fff';
                sanjiao.style.borderTop = '4px solid #fff';
            }
        }

        //更多介绍
        let list = document.querySelectorAll('.list');
        let posArr = [1028, 1187, 1330, 1475];
        /*list.forEach(element => {
            return posArr.push(element.offsetTop);
        })
        console.log(posArr);*/
        console.log(st)
        for (let i=0;i<posArr.length;i++){
            if (st>posArr[i]){
                let lists = list[i].querySelectorAll('li');
                lists[0].style.transform = 'translateX(0px)';
                lists[1].style.transform = 'translateX(0px)';
            }
        }
    }

//    花艺部分
    let contain = document.querySelector('.contain');
    let ul = contain.querySelector('ul')
    let forward1 = document.querySelector('.forward1');
    let back1 = document.querySelector('.back1')
    let index = 0;
    forward1.onclick = function () {
        if (index==3){
            return ;
        }
        index++;
        // animate(ul,{marginLeft:-index*380})
        ul.style.marginLeft = `-${index*380}px`
    }
    back1.onclick = function () {
        if (index ==0){
            return;
        }
        index--;
        ul.style.marginLeft = `-${index*380}px`
    }


//    旅游体验
    let tiyan = document.querySelectorAll('.tiyan>li');
    tiyan.forEach(ele=>{
        ele.onmouseenter = function () {
            let img = ele.querySelector('img');
            img.style.transform = 'scale(5,5)';
            let masks = ele.querySelector('.mask1');
            masks.style.opacity = '1';
        }
        ele.onmouseleave = function () {
            let img = ele.querySelector('img');
            img.style.transform = 'scale(1,1)';
            let masks = ele.querySelector('.mask1');
            masks.style.opacity = '0';
        }
    })
}