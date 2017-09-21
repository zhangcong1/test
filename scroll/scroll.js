/*
*   窗口的高度          +   滚动条滚动的距离         >= 距页面左上角的距离
*   window.innerHeight      document.body.scrollTop     obj.offsetTop
* */
window.onload = function () {
    //获取窗口的高度
    let ch = window.innerHeight;
    //获取每个floor距离页面左上角的距离
    let floor = document.querySelectorAll('.floor');
    console.log(floor);    /*nodeList  有forEach方法*/
    let posArr = [];
    floor.forEach(element => {
        return posArr.push(element.offsetTop);
    })
    console.log(posArr);
    //获取lis
    let aside = document.querySelector('.aside');
    let lis = aside.children;
    //当前对应floor
    let nthfloor = 0;
    //点击
    for (let i=0;i<lis.length;i++){
        lis[i].onclick = function () {
            //改变scrollTop的值为对应数组里每个floor对应的值
            // document.body.scrollTop = posArr[i];
            animate(document.body,{scrollTop:posArr[i]})
        }
    }
    //获取搜索框
    let search = document.querySelector('.search');
    //搜索框开关
    let flag = true;
    // 滚动事件
    window.onscroll = function () {
        // 获取滚动条滚动的距离
        /*let st = document.body.scrollTop;
        console.log(st);*/
        //解决兼容性问题
        let obj = document.body.scrollTop ? document.body:document.documentElement;
        let st = obj.scrollTop;

        // 判断每个floor满足条件
        posArr.forEach(function (value,index) {
            if (ch + st >= value + 200){
                //获取当前floor的所有img
                /*let imgs = floor[index].getElementsByTagName('img');
                console.log(imgs);  /!*  HTMLCollection  *!/
                //将自定义属性imgPath的值传给src属性
                for (let i=0;i<imgs.length;i++){
                    imgs[i].src = imgs[i].getAttribute('imgPath')
                }*/
                //将imgs转换成数组，有forEach方法
                let imgs = Array.from(floor[index].getElementsByTagName('img'));
                console.log(imgs);
                imgs.forEach(function (value,index) {
                    imgs[index].src = imgs[index].getAttribute('imgPath');
                })

                //滚动
                lis[nthfloor].classList.remove('active');
                lis[index].classList.add('active');
                nthfloor = index;
            }
        })
        //搜索框  问题：st>500时每次都执行动画
        if (st > 500){
            if (flag){
                flag = !flag;
                animate(search,{top:0});
                console.log(1)
            }
        }
        if (st < 500){
            if (!flag){
                flag = !flag;
                animate(search,{top:-50})
                console.log(2);
            }
        }

    }
}