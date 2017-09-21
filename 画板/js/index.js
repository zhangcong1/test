window.onload = function () {
    let lables = document.querySelectorAll('label');
    let canvas = document.querySelector('canvas');
    let mask = document.querySelector('.mask');
    let erasers = document.querySelector('.eraser');
    let caiqie = document.querySelector('.clip');

    //新建
    let bottom = document.querySelector('.bottom')
    let news = document.querySelector('.iconfont.icon-plus-creat');
    news.onclick = function(){
        bottom.removeChild(canvas);
        fn();
        function fn(){
            canvas = document.createElement('canvas');
            canvas.width = '1240';
            canvas.height = '580';
            bottom.appendChild(canvas);
            return canvas;
        }
        console.log(canvas);
        return fn;
    }

    let palettes = new palette(canvas,mask);

    lables.forEach(ele=>{
        ele.onclick = function () {
            let active = document.querySelector('label[active=true]');
            active.setAttribute('active',false);
            ele.setAttribute('active',true);

            if (ele.id == 'pencil'){
                palettes.pencil();
            }
            if (ele.id == 'poly'){
                palettes.flags = prompt('请输入边数',5);
                palettes.draw(ele.id);
            }
            if (ele.id == 'polygon'){
                palettes.flags = prompt('请输入边数',5);
                palettes.draw(ele.id);
            }
            else {
                palettes.draw(ele.id);
            }
        }
    })

    let tools = document.querySelectorAll('.tools');

   
    tools.forEach(ele=>{
        ele.onclick = function () {
            let active = document.querySelectorAll('label[active=true]');
            active[1].setAttribute('active',false);
            ele.setAttribute('active',true);
            if (ele.id=='stroke'){
                palettes.style = ele.id;
            }
            if (ele.id=='fill'){
                palettes.style = ele.id;
            }
            if (ele.id == 'eraser') {
                palettes.eraser(erasers);
            }
            if (ele.id == 'word'){
                palettes.text();
            }
            if (ele.id == 'clip'){
                palettes.clips(caiqie);
            }
        }
    })

    let colors = document.querySelectorAll('label input');
    colors.forEach((ele,index)=>{
        ele.onchange = function () {
            if (index == 0){
                palettes.strokeStyle = ele.value;
            }
            if (index == 1){
                palettes.fillStyle = ele.value;
            }
        }
    })

    
    //保存
    let save = document.querySelector('.iconfont.icon-baocun');
    save.onclick = function(){
        save.href = canvas.toDataURL('image/png');
        console.log(save.href)
        save.download = 'a.png';
    }
    //反相
    let fx = document.querySelector('.fx');
    fx.onclick = function(){
        palettes.reverse();
    }
    //返回
    let back = document.querySelector('.iconfont.icon-fanhui');
    back.onclick = function(){
        palettes.back();
    }
}