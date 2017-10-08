$(function () {
    let speed=10;
    let next=1,now=0;
    let t=setInterval(fn,500)
    function fn() {
        speed+=10;
        if (speed==1600){
            $('.huayi>ul').eq(now).css({left:1600})
            $('.huayi>ul').eq(next).css({left:0})
            speed=10;
            next=0;now=1;
        }
        $('.huayi>ul').eq(now).animate({left:-speed},500)
        $('.huayi>ul').eq(next).animate({left:1600-speed},500)
    }
    $('.huayi').hover(function () {
        clearInterval(t);
    },function () {
        t=setInterval(fn,500);
    })
})