$(function () {
    //文字
    $('.title1').css('opacity','1').animate({top:250},2);
    //自动播放
    $('.lunbo>li:first').attr('id','color')
    let t = setInterval(function () {
        fn('f')
    },3000);
    let now = 0,next = 0;
    function fn(flag) {
        if (flag == 'f'){
            next++;
            if (next == 2){
                next = 0;
            }
            $('.banner>li').eq(next).css({left:1349})
            $('.banner>li').eq(now).animate({left:-1349})
        }else if (flag == 'b'){
            next--;
            if (next == -1){
                next = 1;
            }
            $('.banner>li').eq(next).css({left:-1349})
            $('.banner>li').eq(now).animate({left:1349})
        }
        $('.lunbo>li').eq(now).removeAttr('id','color');
        $('.lunbo>li').eq(next).attr('id','color')
        $('.banner>li').eq(next).animate({left:0},function () {
            flags = true;
            //
            $('.title1').css('opacity','0').animate({top:360},2);
            $('.title2').css('opacity','0').animate({top:150},2)
            $('.title3').css('opacity','0').animate({top:400},2)
            if (next==0){
                $('.title1').css('opacity','1').animate({top:250},2);
            }else if (next==1){
                $('.title2').css('opacity','1').animate({top:250},2)
                $('.title3').css('opacity','1').animate({top:300},2)
            }
        })
        now = next;
    }
    //清除自动播放
    $('header').hover(function () {
        clearInterval(t)
    },function () {
        t = setInterval(function () {
            fn('f')
        },3000);
    })
    //浏览器缩小失去焦点
    $(window).blur(function () {
        clearInterval(t);
    })
    //浏览器获得焦点
    $(window).focus(function () {
        t = setInterval(function () {
            fn('f')
        },3000);
    })
    let flags = true;
    //点击前进
    $('.forward').click(function () {
        if (!flags){
            return ;
        }
        flags = !flags;
        fn('f');
    })
    $('.back').click(function () {
        if (!flags){
            return ;
        }
        flags = !flags;
        fn('b');
    })
    //点击轮播点
    $('.lunbo>li').click(function () {
        let index = $(this).index();
        let next = index;
        fn('f');
    })
    //热门景点
    let index = 0;
    $('.forward1').click(function () {
        if (index == 3){
            return ;
        }
        index++;
        $('.contain>ul').css({
            marginLeft: -index*380
        })
    })
    $('.back1').click(function () {
        if (index == 0){
            return ;
        }
        index--;
        $('.contain>ul').css({
            marginLeft: -index*380
        })
    })
    //导航栏
    $('.nav>li').eq(1).hover(function () {
        $('.sort>li>a').animate({left:15},600);
        $('.sanjiao').css('borderTop','4px solid #16b0dc');
    },function () {
        $('.sort>li>a').animate({left:-90},0);
        $('.sanjiao').css('borderTop','4px solid #fff');
    })
    //滚动事件
    $(window).scroll(function () {
        let st = $(document.body).scrollTop();
        if (st>0){
            $('.head').css({
                background:'white',borderBottom:'1px solid #D9D9D9'
            });
            $('.sanjiao').css('borderTop','4px solid #2A333C');
            $('.navi').css('color','#2A333C').hover(function () {
                $(this).css('color','#16b0dc')
            },function () {
                $(this).css('color','#2A333C')
            })
            $('.navi').eq(0).css('color','#16b0dc').hover(function () {
                $(this).css('color','#16b0dc')
            })
            $('.sanjiao1').css('borderBottom','8px solid #16b0dc')
            $('.nav>li').eq(1).hover(function () {
                $('.sanjiao').css('borderTop','4px solid #16b0dc');
            },function () {
                $('.sanjiao').css('borderTop','4px solid #2A333C');
            })
        }else if(st==0){
            $('.head').css({
                background:'rgba(0,0,0,0.15)',borderBottom:'none'
            });
            $('.sanjiao').css('borderTop','4px solid #fff');
            $('.navi').css('color','#fff').hover(function () {
                $(this).css('color','#16b0dc')
            },function () {
                $(this).css('color','#fff');
            })
            $('.navi').eq(0).css('color','#16b0dc').hover(function () {
                $(this).css('color','#16b0dc')
            })
            $('.sanjiao1').css('borderBottom','8px solid #fff')
            $('.nav>li').eq(1).hover(function () {
                $('.sanjiao').css('borderTop','4px solid #16b0dc');
            },function () {
                $('.sanjiao').css('borderTop','4px solid #fff');
            })
        }
        //更多介绍
        let posArr = [1028, 1187, 1330, 1475];
        /*$('.list').each(function (index,obj) {
            posArr.push($(obj).offset().top)
        })*/
        // console.log(posArr);
        for (let i=0;i<posArr.length;i++){
            if (st>posArr[i]){
                $('.list:eq('+i+')>li').css('transform','translateX(0px)');
            }
        }
    })
    //旅游体验
    $('.tiyan>li').hover(function () {
        $(this).find('img').css('transform','scale(5,5)');
        $(this).find('.mask1').css('opacity','1');
    },function () {
        $(this).find('img').css('transform','scale(1,1)');
        $(this).find('.mask1').css('opacity','0');
    })
})