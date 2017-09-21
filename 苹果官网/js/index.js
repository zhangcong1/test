window.onload = function () {
    let banner = document.querySelector('.imgs');
    let imgs = banner.querySelectorAll('li');
    let lunbo = document.querySelector('.lunbo');
    let circle = lunbo.querySelectorAll('li');
    console.log(circle)
    circle[0].id = 'color';
    let now=0,next=0;
    let t = setInterval(fn,3000);
    function fn() {
        next++;
        if (next == imgs.length){
            next = 0;
        }
        circle[now].id = '';
        circle[next].id = 'color';
        imgs[next].style.left = '1366px';
        animate(imgs[now],{left:-1336});
        animate(imgs[next],{left:0},function(){flag = true});
        now = next;
    }

    let bannerBox = document.querySelector('.banner');
    bannerBox.onmouseenter = function () {
        clearInterval(t);
    }
    bannerBox.onmouseleave = function () {
        t = setInterval(fn,3000);
    }

    let back = document.querySelector('.circle1');
    let forward = document.querySelector('.circle2');
    let flag = true;
    forward.onclick = function () {
        if (!flag){
            return;
        }
        flag = !flag;
        fn();
    }
    back.onclick = function () {
        if (!flag){
            return;
        }
        flag = !flag;
        fn1();
    }
    function fn1() {
        next--;
        if (next == -1){
            next = imgs.length-1;
        }
        circle[now].id = '';
        circle[next].id = 'color';
        imgs[next].style.left = '-1366px';
        animate(imgs[now],{left:1336});
        animate(imgs[next],{left:0},function(){flag = true});
        now = next;
    }
}