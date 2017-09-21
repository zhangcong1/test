//banner部分
$(function () {
    //选项卡
    $('aside>ul>li').hover(function () {
        $(this).find('.item').toggle();
    })
    //自动播放
    let num = 0;
    let length = $('.banner>li').length;
    $('.lunbodian>li:first').attr('id','circle');
    let t = setInterval(function () {
        fn('f')
    },3000);
    function fn(flag) {
        if (flag == 'f'){
            num++;
            // num = num%index;
            if (num == length){
                num = 0;
            }
        }else if (flag == 'b'){
            num--;
            if (num<0){
                num = length - 1;
            }
        }
        $('.banner>li').finish();
        $('.lunbodian>li').removeAttr('id','circle');
        $('.lunbodian>li').eq(num).attr('id','circle');
        $('.banner>li').eq(num).prevAll().fadeOut(1200);
        $('.banner>li').eq(num).fadeIn(1200);
    }
    //清除自动播放
    $('.banners').hover(function () {
        clearInterval(t);
    },function () {
        t = setInterval(function () {
            fn('f')
        },3000);
    })
    //点击返回，前进
    $('.forward').click(function () {
        fn('f');
    });
    $('.back').click(function () {
        fn('b');
    })
    //点击轮播点
    $('.lunbodian>li').click(function () {
        let index = $(this).index();
        num = index;
        fn();
    });
    //开关
    /*var flags = true;
    function onOff() {
        if (!flags){
            return;
        }
        flags = !flags;
    }*/
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

    //购物车
    $('.car').hover(function () {
        $('.gouwu').finish();
        $('.gouwu').slideToggle('slow').css({
            boxShadow:'0 3px 5px 0px rgba(0,0,0,0.2)'
        });
    })
    //导航栏
    /*var navIndex;
    $('nav>ul>li').slice(0,7).hover(function () {
        navIndex = $(this).index();
        $('.shang1').hide();
        $('.shang1').eq(navIndex).show();
        $('.extend').slideToggle('slow').css({
            boxShadow:'0 3px 5px rgba(0,0,0,0.2)'
        })
    }).mousemove(function () {
        $('.shang1').eq(navIndex).show();
        $('.extend').finish()
    })
    $('.extend').hover(function () {
        $(this).show();
    })*/
    var navIndex;
    $('nav>ul>li').slice(0,7).hover(function () {
        navIndex = $(this).index();
        $('.shang1').hide();
        $('.shang1').eq(navIndex).show();
        $('.extend').css({
            height:'229px',border:'1px solid rgb(224,224,224)',
            boxShadow:'0 3px 5px rgba(0,0,0,0.2)'
        })
    },function () {
        $('.extend').css({
            height:'0px',border:'0px solid rgb(224,224,224)',
            boxShadow:''
        })
    }).mousemove(function () {
        $('.shang1').eq(navIndex).show();
        $('.extend').css({
            height:'229px',border:'1px solid rgb(224,224,224)',
            boxShadow:'0 3px 5px rgba(0,0,0,0.2)'
        })
    })
    $('.extend').hover(function () {
        $('.extend').css({
            height:'229px',border:'1px solid rgb(224,224,224)',
            boxShadow:'0 3px 5px rgba(0,0,0,0.2)'
        })
    },function () {
        $('.extend').css({
            height:'0px',border:'0px solid rgb(224,224,224)',
            boxShadow:''
        })
    })
    //搜索框部分
    $('.tex').click(function () {
        $('.inputkuang').css('display','block');
        $(this).css({
            border:'1px solid rgb(255,103,0)'
        })
        $('.tijiao').css({
            borderTop:'1px solid rgb(255,103,0)',
            borderBottom:'1px solid rgb(255,103,0)',
            borderRight:'1px solid rgb(255,103,0)'
        })
    }).blur(function () {
        $('.inputkuang').css('display','none');
        $(this).css({
            border:'1px solid rgb(221,221,221)'
        })
        $('.tijiao').css({
            borderTop:'1px solid rgb(221,221,221)',
            borderBottom:'1px solid rgb(221,221,221)',
            borderRight:'1px solid rgb(221,221,221)'
        })
    })
    //单品部分
    let index1 = 0;

    $('.fanye2').eq(0).click(function () {
        if (index1 == 1){
            return;
        }
        index1++
        $('.main1').css({marginLeft:-index1*1226});
        $(this).css('cursor','default').hover(function () {
            $('.iconfont4').css('color','rgb(224,224,224)')
        },function () {
            $('.iconfont4').css('color','rgb(224,224,224)')
        });
        $('.fanye1').css('cursor','pointer').hover(function () {
            $('.iconfont3').css('color','rgb(255,103,0)')
        },function () {
            $('.iconfont3').css('color','rgb(176,176,182)')
        })
        $('.iconfont3').css('color','rgb(176,176,182)')
        $('.iconfont4').css('color','rgb(224,224,224)')
    }).hover(function () {
        $('.iconfont4').css('color','rgb(255,103,0)')
    },function () {
        $('.iconfont4').css('color','rgb(176,176,182)')
    })

    $('.fanye1').eq(0).click(function () {
        if (index1 == 0){
            return;
        }
        index1--;
        $('.main1').css({marginLeft:-index1*1226});
        $(this).css('cursor','default').hover(function () {
            $('.iconfont3').css('color','rgb(224,224,224)')
        },function () {
            $('.iconfont3').css('color','rgb(224,224,224)')
        });
        $('.fanye2').css('cursor','pointer').hover(function () {
            $('.iconfont4').css('color','rgb(255,103,0)')
        },function (){
            $('.iconfont4').css('color','rgb(176,176,182)')
        })
        $('.iconfont4').css('color','rgb(176,176,182)')
        $('.iconfont3').css('color','rgb(224,224,224)')
    })

    let play = setInterval(move0,3000);
    let moveFlag = true;
    function move0() {
        if(moveFlag){
            moveFlag = !moveFlag;
            $('.main1').css({marginLeft:0});
            $('.iconfont3').eq(0).css('color','rgb(224,224,224)');
            $('.iconfont4').eq(0).css('color','rgb(176,176,182)');
            $('.fanye1').eq(0).css('cursor','default')
            $('.fanye2').eq(0).css('cursor','pointer')
        }else {
            moveFlag = !moveFlag;
            $('.main1').css({marginLeft:-1226});
            $('.iconfont4').eq(0).css('color','rgb(224,224,224)');
            $('.iconfont3').eq(0).css('color','rgb(176,176,182)');
            $('.fanye1').eq(0).css('cursor','pointer')
            $('.fanye2').eq(0).css('cursor','default')
        }
    }
    //清除自动播放
    $('.main1').hover(function () {
        clearInterval(play);
    },function () {
        play = setInterval(move0,3000);
    })
    $('.fanye').eq(0).hover(function () {
        clearInterval(play);
    },function () {
        play = setInterval(move0,3000);
    })

    //家电部分
    $('.hot_right a:first-child').css({
        color:'#FF6700',borderBottom:'2px solid #FF6700'
    })
    $('.jiadian .hot_right a').hover(function () {
        let index = $(this).index();
        $('.jiadian .hot_right a').css({
            color:'',borderBottom:''
        })
        $(this).css({
            color:'#FF6700',borderBottom:'2px solid #FF6700'
        })
        $('.jiadian ul>li').css('display','none');
        $('.jiadian ul>li').eq(index).css('display','block');
    })

    function part(num) {
        $('.zhineng:eq('+num+') .hot_right a').hover(function () {
            let index = $(this).index();
            $('.zhineng:eq('+num+') .hot_right a').css({
                color:'',borderBottom:''
            })
            $(this).css({
                color:'#FF6700',borderBottom:'2px solid #FF6700'
            })
            $('.zhineng:eq('+num+') ul>li').css('display','none');
            $('.zhineng:eq('+num+') ul>li').eq(index).css('display','block');
        })
    }
    //智能部分
    part(0);
    //搭配部分
    part(1);
    //周边部分
    part(2)


    //为你推荐部分
    let index2 = 0;

    $('.fanye2').eq(1).click(function () {
        if (index2 == 3){
            return;
        }
        index2++;
        $('.main4').css({marginLeft:-index2*1226});
        if (index2 == 3){
            $('.iconfont4').eq(1).css('color','rgb(224,224,224)')
            $(this).css('cursor','default').hover(function () {
                $('.iconfont4').eq(1).css('color','rgb(224,224,224)')
            },function () {
                $('.iconfont4').eq(1).css('color','rgb(224,224,224)')
            });
            return ;
        }
        $(this).css('cursor','pointer').hover(function () {
            $('.iconfont4').eq(1).css('color','rgb(255,103,0)')
        },function () {
            $('.iconfont4').eq(1).css('color','rgb(176,176,182)')
        });
        $('.fanye1').eq(1).css('cursor','pointer').hover(function () {
            $('.iconfont3').eq(1).css('color','rgb(255,103,0)')
        },function () {
            $('.iconfont3').eq(1).css('color','rgb(176,176,182)')
        })
        $('.iconfont3').eq(1).css('color','rgb(176,176,182)')
        $('.iconfont4').eq(1).css('color','rgb(255,103,0)')
    }).hover(function () {
        $('.iconfont4').eq(1).css('color','rgb(255,103,0)')
    },function () {
        $('.iconfont4').eq(1).css('color','rgb(176,176,182)')
    })

    $('.fanye1').eq(1).click(function () {
        if (index2 == 0){
            return;
        }
        index2--;
        $('.main4').css({marginLeft:-index2*1226});
        if (index2 == 0){
            $('.iconfont3').eq(1).css('color','rgb(224,224,224)')
            $(this).css('cursor','default').hover(function () {
                $('.iconfont3').eq(1).css('color','rgb(224,224,224)')
            },function () {
                $('.iconfont3').eq(1).css('color','rgb(224,224,224)')
            });
            return ;
        }
        $(this).css('cursor','pointer').hover(function () {
            $('.iconfont3').eq(1).css('color','rgb(255,103,0)')
        },function () {
            $('.iconfont3').eq(1).css('color','rgb(176,176,182)')
        });
        $('.fanye2').eq(1).css('cursor','pointer').hover(function () {
            $('.iconfont4').eq(1).css('color','rgb(255,103,0)')
        },function (){
            $('.iconfont4').eq(1).css('color','rgb(176,176,182)')
        })
        $('.iconfont4').eq(1).css('color','rgb(176,176,182)')
        $('.iconfont3').eq(1).css('color','rgb(255,103,0)')
    })
    //自动播放
    let play1 = setInterval(move,3000);
    let TJflag = true;
    function move() {
        if (TJflag){
            index2++;
            $('.main4').css({marginLeft:-index2*1226});
            if (index2 == 3){
                TJflag = !TJflag;
                $('.fanye1').eq(1).css('cursor','pointer');
                $('.fanye2').eq(1).css('cursor','default');
                $('.iconfont4').eq(1).css('color','rgb(224,224,224)')
                $('.iconfont3').eq(1).css('color','rgb(176,176,182)')
                return;
            }
        }else {
            index2--;
            $('.main4').css({marginLeft:-index2*1226});
            if (index2 == 0){
                TJflag = !TJflag;
                $('.fanye1').eq(1).css('cursor','default');
                $('.fanye2').eq(1).css('cursor','pointer');
                $('.iconfont3').eq(1).css('color','rgb(224,224,224)')
                $('.iconfont4').eq(1).css('color','rgb(176,176,182)')
                return;
            }
        }
        $('.fanye1').eq(1).css('cursor','pointer');
        $('.fanye2').eq(1).css('cursor','pointer');
        $('.iconfont4').eq(1).css('color','rgb(176,176,182)')
        $('.iconfont3').eq(1).css('color','rgb(176,176,182)')
    }
    //清除自动播放
    $('.main4').hover(function () {
        clearInterval(play1)
    },function () {
        play1 = setInterval(move,3000);
    })
    $('.fanye').hover(function () {
        clearInterval(play1)
    },function () {
        play1 = setInterval(move,3000);
    })

    //内容部分
    $('.dian>li:first-child').attr('id','border');
    let width = $('.part_1>li')[0].offsetWidth;
    /*function content(num,nums) {
        $('.youbian').eq(num).click(function () {
            if (nums == $('.part_1:eq(' + num + ')>li').length - 1) {
                return;
            }
            nums++;
            if (nums == $('.part_1:eq(' + num + ')>li').length - 1) {
                $(this).css('cursor', 'default')
            }
            $('.zuobian').eq(num).css('cursor', 'pointer')
            $('.dian:eq(' + num + ')>li').removeAttr('id', 'border');
            $('.dian:eq(' + num + ')>li').eq(nums).attr('id', 'border');
            $('.part_1:eq(' + num + ')>li').eq(nums).prevAll().animate({left: -width})
            $('.part_1:eq(' + num + ')>li').eq(nums).animate({left: 0})
        })
    }
    function content1(num,nums) {
        $('.zuobian').eq(num).click(function () {
            if (nums == 0){
                return;
            }
            nums--;
            if (nums == 0){
                $(this).css('cursor','default')
            }
            $('.youbian').eq(num).css('cursor','pointer')
            $('.dian:eq('+num+')>li').removeAttr('id','border');
            $('.dian:eq('+num+')>li').eq(nums).attr('id','border');
            $('.part_1:eq('+num+')>li').eq(nums).nextAll().animate({left:width})
            $('.part_1:eq('+num+')>li').eq(nums).animate({left:0})
        })
    }
    let nums = 0;
    content(0,nums);
    content(1,nums);
    content(2,nums);
    content(3,nums);
    let nums1 = 3
    content1(0,nums1);
    content1(1,nums1);
    content1(2,nums1);
    content1(3,nums1);*/
    //内容一
    let nums = 0;
    $('.youbian').eq(0).click(function () {
        if (nums == $('.part_1:eq(0)>li').length - 1) {
            return;
        }
        nums++;
        if (nums == $('.part_1:eq(0)>li').length - 1) {
            $(this).css('cursor', 'default')
        }
        $('.zuobian').eq(0).css('cursor', 'pointer')
        $('.dian:eq(0)>li').removeAttr('id', 'border');
        $('.dian:eq(0)>li').eq(nums).attr('id', 'border');
        $('.part_1:eq(0)>li').eq(nums).prevAll().animate({left: -width})
        $('.part_1:eq(0)>li').eq(nums).animate({left: 0})
    })
    $('.zuobian').eq(0).click(function () {
        if (nums == 0){
            return;
        }
        nums--;
        if (nums == 0){
            $(this).css('cursor','default')
        }
        $('.youbian').eq(0).css('cursor','pointer')
        $('.dian:eq(0)>li').removeAttr('id','border');
        $('.dian:eq(0)>li').eq(nums).attr('id','border');
        $('.part_1:eq(0)>li').eq(nums).nextAll().animate({left:width})
        $('.part_1:eq(0)>li').eq(nums).animate({left:0})
    })
    $('.dian:eq(0)>li').click(function () {
        let index = $(this).index();
        $('.dian:eq(0)>li').removeAttr('id','border');
        $(this).attr('id','border');
        if (index>nums){
            $('.part_1:eq(0)>li').eq(index).prevAll().animate({left:-width})
        }else if (index<nums){
            $('.part_1:eq(0)>li').eq(index).nextAll().animate({left:width})
        }
        $('.part_1:eq(0)>li').eq(index).animate({left:0})
        nums = index
    })
    //内容二
    let nums1 = 0;
    $('.youbian').eq(1).click(function () {
        if (nums1 == $('.part_1:eq(1)>li').length - 1) {
            return;
        }
        nums1++;
        if (nums1 == $('.part_1:eq(1)>li').length - 1) {
            $(this).css('cursor', 'default')
        }
        $('.zuobian').eq(1).css('cursor', 'pointer')
        $('.dian:eq(1)>li').removeAttr('id', 'border');
        $('.dian:eq(1)>li').eq(nums1).attr('id', 'border');
        $('.part_1:eq(1)>li').eq(nums1).prevAll().animate({left: -width})
        $('.part_1:eq(1)>li').eq(nums1).animate({left: 0})
    })
    $('.zuobian').eq(1).click(function () {
        if (nums1 == 0){
            return;
        }
        nums1--;
        if (nums1 == 0){
            $(this).css('cursor','default')
        }
        $('.youbian').eq(1).css('cursor','pointer')
        $('.dian:eq(1)>li').removeAttr('id','border');
        $('.dian:eq(1)>li').eq(nums1).attr('id','border');
        $('.part_1:eq(1)>li').eq(nums1).nextAll().animate({left:width})
        $('.part_1:eq(1)>li').eq(nums1).animate({left:0})
    })
    $('.dian:eq(1)>li').click(function () {
        let index = $(this).index();
        $('.dian:eq(1)>li').removeAttr('id','border');
        $(this).attr('id','border');
        if (index>nums1){
            $('.part_1:eq(1)>li').eq(index).prevAll().animate({left:-width})
        }else if (index<nums1){
            $('.part_1:eq(1)>li').eq(index).nextAll().animate({left:width})
        }
        $('.part_1:eq(1)>li').eq(index).animate({left:0})
        nums1 = index
    })
    //内容三
    let nums2 = 0;
    $('.youbian').eq(2).click(function () {
        if (nums2 == $('.part_1:eq(2)>li').length - 1) {
            return;
        }
        nums2++;
        if (nums2 == $('.part_1:eq(2)>li').length - 1) {
            $(this).css('cursor', 'default')
        }
        $('.zuobian').eq(2).css('cursor', 'pointer')
        $('.dian:eq(2)>li').removeAttr('id', 'border');
        $('.dian:eq(2)>li').eq(nums2).attr('id', 'border');
        $('.part_1:eq(2)>li').eq(nums2).prevAll().animate({left: -width})
        $('.part_1:eq(2)>li').eq(nums2).animate({left: 0})
    })
    $('.zuobian').eq(2).click(function () {
        if (nums2 == 0){
            return;
        }
        nums2--;
        if (nums2 == 0){
            $(this).css('cursor','default')
        }
        $('.youbian').eq(2).css('cursor','pointer')
        $('.dian:eq(2)>li').removeAttr('id','border');
        $('.dian:eq(2)>li').eq(nums2).attr('id','border');
        $('.part_1:eq(2)>li').eq(nums2).nextAll().animate({left:width})
        $('.part_1:eq(2)>li').eq(nums2).animate({left:0})
    })
    $('.dian:eq(2)>li').click(function () {
        let index = $(this).index();
        $('.dian:eq(2)>li').removeAttr('id','border');
        $(this).attr('id','border');
        if (index>nums2){
            $('.part_1:eq(2)>li').eq(index).prevAll().animate({left:-width})
        }else if (index<nums2){
            $('.part_1:eq(2)>li').eq(index).nextAll().animate({left:width})
        }
        $('.part_1:eq(2)>li').eq(index).animate({left:0})
        nums2 = index
    })
    //内容四
    let nums3 = 0;
    $('.youbian').eq(3).click(function () {
        if (nums3 == $('.part_1:eq(3)>li').length - 1) {
            return;
        }
        nums3++;
        if (nums3 == $('.part_1:eq(3)>li').length - 1) {
            $(this).css('cursor', 'default')
        }
        $('.zuobian').eq(3).css('cursor', 'pointer')
        $('.dian:eq(3)>li').removeAttr('id', 'border');
        $('.dian:eq(3)>li').eq(nums3).attr('id', 'border');
        $('.part_1:eq(3)>li').eq(nums3).prevAll().animate({left: -width})
        $('.part_1:eq(3)>li').eq(nums3).animate({left: 0})
    })
    $('.zuobian').eq(3).click(function () {
        if (nums3 == 0){
            return;
        }
        nums3--;
        if (nums3 == 0){
            $(this).css('cursor','default')
        }
        $('.youbian').eq(3).css('cursor','pointer')
        $('.dian:eq(3)>li').removeAttr('id','border');
        $('.dian:eq(3)>li').eq(nums3).attr('id','border');
        $('.part_1:eq(3)>li').eq(nums3).nextAll().animate({left:width})
        $('.part_1:eq(3)>li').eq(nums3).animate({left:0})
    })
    $('.dian:eq(3)>li').click(function () {
        let index = $(this).index();
        $('.dian:eq(3)>li').removeAttr('id','border');
        $(this).attr('id','border');
        if (index>nums3){
            $('.part_1:eq(3)>li').eq(index).prevAll().animate({left:-width})
        }else if (index<nums3){
            $('.part_1:eq(3)>li').eq(index).nextAll().animate({left:width})
        }
        $('.part_1:eq(3)>li').eq(index).animate({left:0})
        nums3 = index
    })
})