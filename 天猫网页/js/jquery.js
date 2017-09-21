$(function () {
    //选项卡
    $('#cedaohang>li').hover(function () {
        $(this).find('.item').toggle();
    })
    //自动播放
    let num = 0;
    let length = $('.bannertu>li').length;
    $('.dian>li').eq(0).attr('id','circle')
    let t = setInterval(fn,3000);
    function fn() {
        num++;
        if (num == length){
            num = 0;
        }
        $('.dian>li').removeAttr('id','circle');
        $('.dian>li').eq(num).attr('id','circle')
        $('.bannertu>li').eq(num).prevAll().fadeOut('slow');
        $('.bannertu>li').eq(num).fadeIn('slow');
    }
    //背景自动播放
    let num1 = 0;
    let lengths = $('.background>li').length;
    let t1 = setInterval(fn1,3000);
    function fn1() {
        num1++;
        if (num1 == lengths){
            num1 = 0;
        }
        $('.background>li').eq(num1).prevAll().fadeOut('slow');
        $('.background>li').eq(num1).fadeIn('slow');
    }
    //清除自动播放
    $('.banner').hover(function () {
        clearInterval(t);
        clearInterval(t1);
    },function () {
        t = setInterval(fn,3000);
        t1 = setInterval(fn1,3000);
    })
    //轮播点
    $('.dian>li').mouseenter(function () {
        let index = $(this).index();
        num = index;
        num1 = index;
        $('.bannertu>li').finish();
        $('.background>li').finish();
        $('.background>li').eq(num1).prevAll().fadeOut('slow');
        $('.background>li').eq(num1).fadeIn('slow');
        $('.dian>li').removeAttr('id','circle');
        $('.dian>li').eq(num).attr('id','circle')
        $('.bannertu>li').eq(num).prevAll().fadeOut('slow');
        $('.bannertu>li').eq(num).fadeIn('slow');
    })
    //浏览器缩小失去焦点
    $(window).blur(function () {
        clearInterval(t);
        clearInterval(t1);
    })
    //浏览器获得焦点
    $(window).focus(function () {
        t = setInterval(fn,3000);
        t1 = setInterval(fn1,3000);
    })
    //头部
    $('.mytaobao').eq(0).hover(function () {
        $('.yimai').eq(0).show();
    },function () {
        $('.yimai').eq(0).hide();
    })
    $('.mytaobao').eq(1).hover(function () {
        $('.yimai').eq(1).show();
    },function () {
        $('.yimai').eq(1).hide();
    })
    $('.mytaobao').eq(2).hover(function () {
        $('.support').show();
    },function () {
        $('.support').hide();
    })
    $('.mytaobao').eq(3).hover(function () {
        $('.daohang').show();
    },function () {
        $('.daohang').hide();
    })
    //固定搜索栏
    let ch = $(window).innerHeight();
    $(window).scroll(function () {
        let st = $(document.body).scrollTop();
        if (st>=ch){
            $('.searchLan').css('top','0');
        }else {
            $('.searchLan').css('top','-50px');
        }
    })
    //跳转部分
    $(window).scroll(function () {
        let st = $(document.body).scrollTop();
        if (st>=500){
            $('.floor').css({
                width:36,height:266
            })
        }else {
            $('.floor').css({
                width:0,height:0
            })
        }
        let arr = [];
        for (let i=0;i<$('.beauty').length;i++){
            arr.push($('.beauty').eq(i).offset().top);
        }
        arr.push($('.love').offset().top);
        arr.forEach((value,index)=>{
            if (st+200 >= value){
                $('.floor>li').removeAttr('id',`color${index+1}`);
                $('.floor>li').eq(index+1).attr('id',`color${index+1}`)
            }
        })
        let floor = document.querySelector('.floor');
        let floors = floor.querySelectorAll('li');
        console.log(floors)
        floors.forEach(function (element,index) {
            element.onclick = function () {
                // document.body.scrollTop = arr[index-1];
                console.log(index)
                animate(document.body,{scrollTop:arr[index-1]})
            }
        })
        /*let floors = $('.floor>li');
        floors.each(function (index,obj) {
            $(obj).click(function () {
                console.log(index)
                /!*let index = $(this).index()
                console.log(index)*!/
                $(document.body).animate({
                    scrollTop:arr[index-1]
                })
            })
        })*/
    })
})