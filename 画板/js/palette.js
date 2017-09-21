/*
*   属性
*       线宽  端点  颜色  边数  角   尺寸  widths  heights history
*       ctx     canvas
*   方法
*       画线  画虚线 铅笔  多边形     圆   矩形  多角形
*       橡皮  裁切  文字
*       新建  保存
* */
function palette(canvas,mask) {
    this.canvas = canvas;
    this.mask = mask;
    this.ctx = canvas.getContext('2d');

    //历史记录
    this.widths = canvas.width;
    this.heights = canvas.height;
    this.history = [];

    // 样式
    this.lineWidth = 1;
    this.lineCap = 'buttn';
    this.fillStyle = '#000';
    this.strokeStyle = '#000';
    //填充  描边
    this.style = 'stroke';
    //几边形 几角形
    this.flags;
    //剪切
    this.temp;
}
palette.prototype = {
    inits:function(){
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.lineCap = this.lineCap;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.strokeStyle = this.strokeStyle;
    },
    draw:function (type) {
        this.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            this.mask.onmousemove = function (e) {
                let rx = e.offsetX, ry = e.offsetY;
                this.ctx.clearRect(0,0,this.widths,this.heights);

                if(this.history.length == 0){
                    this.history.push(this.ctx.getImageData(0,0,this.widths,this.heights));
                }
                if(this.history.length > 0){
                    this.ctx.putImageData(this.history[this.history.length-1],0,0);
                }
                this.inits();
                this[type](ox,oy,rx,ry);
            }.bind(this)
            this.mask.onmouseup = function () {
                this.history.push(this.ctx.getImageData(0,0,this.widths,this.heights));
                this.mask.onmousemove = null;
                this.mask.onmouseup = null;
            }.bind(this)
            document.onkeydown = function (e) {
                if (e.ctrlKey && e.keyCode == 90){
                    let img = this.history.pop();
                    this.ctx.putImageData(img,0,0)
                }
            }.bind(this)
        }.bind(this)

    },
    line:function (ox,oy,rx,ry) {
        this.ctx.beginPath();
        this.ctx.moveTo(ox,oy);
        this.ctx.lineTo(rx,ry);
        this.ctx.closePath();
        this.ctx[this.style]();
    },
    dash:function (ox,oy,rx,ry) {
        this.ctx.beginPath();
        this.ctx.moveTo(ox,oy);
        this.ctx.setLineDash([10,15]);
        this.ctx.lineTo(rx,ry);
        this.ctx.closePath();
        this.ctx[this.style]();
        this.ctx.setLineDash([0,0]);
    },
    circle:function (ox,oy,rx,ry) {
        let r = Math.sqrt(Math.pow(rx-ox,2)+Math.pow(ry-oy,2));
        this.ctx.beginPath();
        this.ctx.moveTo(ox+r,oy);
        this.ctx.arc(ox,oy,r,0,2*Math.PI);
        this.ctx.closePath();
        this.ctx[this.style]();
    },
    juxing:function (ox,oy,rx,ry) {
        this.ctx.beginPath();
        this.ctx.moveTo(ox, oy);
        this.ctx.rect(ox, oy, rx - ox, ry - oy);
        this.ctx.closePath();
        this.ctx[this.style]();
    },
    poly:function (ox,oy,rx,ry) {
        let angle = (360/this.flags)*Math.PI/180;
        let r = Math.sqrt(Math.pow(rx-ox,2)+Math.pow(ry-oy,2));
        this.ctx.beginPath();
        this.ctx.moveTo(ox+r, oy);
        for (let i=1;i<this.flags;i++){
            this.ctx.lineTo(ox+r*Math.cos(angle*i),oy+r*Math.sin(angle*i));
        }
        this.ctx.closePath();
        this.ctx[this.style]();
    },
    pencil:function () {
        this.mask.onmousedown = function (e) {
            let sx = e.offsetX, sy = e.offsetY;
            console.log(sx);
            console.log(sy);
            this.ctx.beginPath();
            this.ctx.moveTo(sx,sy);
            this.mask.onmousemove = function (e) {
                if (this.history.length == 0){
                    this.history.push(this.ctx.getImageData(0,0,this.widths,this.heights))
                }
                if (this.history.length>=0){
                    this.ctx.putImageData(this.history[this.history.length-1],0,0)
                }
                let lx = e.offsetX, ly = e.offsetY;
                this.ctx.lineTo(lx,ly);
                // this.inits();
                this.ctx.stroke();
            }.bind(this)
            this.mask.onmouseup = function () {
                this.history.push(this.ctx.getImageData(0,0,this.widths,this.heights))
                this.mask.onmousemove = null;
                this.mask.onmouseup = null;
            }.bind(this)
        }.bind(this)
        document.onkeydown = function (e) {
            if (e.ctrlKey && e.keyCode == 90){
                let imgs = this.history.pop();
                this.ctx.putImageData(imgs,0,0);
            }
        }.bind(this)
    },
    polygon:function (ox,oy,rx,ry) {
        let angle = 360/this.flags/2*Math.PI/180;
        let r = Math.sqrt(Math.pow(rx-ox,2)+Math.pow(ry-oy,2));
        let r1 = r/2;
        this.ctx.beginPath();
        this.ctx.moveTo(ox+r,oy);
        for (let i=1;i<this.flags*2;i++){
            if (i%2){
                this.ctx.lineTo(ox+r1*Math.cos(angle*i),oy+r1*Math.sin(angle*i));
            }else {
                this.ctx.lineTo(ox+r*Math.cos(angle*i),oy+r*Math.sin(angle*i));
            }
        }
        this.ctx.closePath();
        this.ctx[this.style]();
    },
    eraser:function (obj) {
        this.mask.onmousedown = function(e){
            e.preventDefault();
            this.mask.onmousemove = function(e){
                obj.style.display = 'block';
                let ew = obj.offsetWidth;
                let eh = obj.offsetHeight;
                let cx = e.offsetX, cy = e.offsetY;
                let lefts = cx-ew/2;
                let tops = cy-eh/2;
                if(lefts<0){
                    lefts = 0;
                }
                if(lefts>this.mask.offsetWidth-ew){
                    lefts = this.mask.offsetWidth-ew;
                }
                if(tops<0){
                    tops = 0;
                }
                if(tops>this.mask.offsetHeight-eh){
                    tops = this.mask.offsetHeight-eh;
                }
                obj.style.left = `${lefts}px`;
                obj.style.top = `${tops}px`;

                this.ctx.clearRect(lefts-2, tops-2, ew, eh);
            }.bind(this)
            this.mask.onmouseup = function(){
                obj.style.display = 'none';
                this.history.push(this.ctx.getImageData(0,0,this.widths,this.heights))
                this.mask.onmousemove = null;
                this.mask.onmouseup = null;
            }.bind(this)
        }.bind(this)
        document.onkeydown = function (e) {
            if (e.ctrlKey && e.keyCode == 90){
                let imgs = this.history.pop();
                this.ctx.putImageData(imgs,0,0);
            }
        }.bind(this)
    },
    text:function(){
        let that = this;
        this.mask.onmousedown = function(e){
            let ox = e.offsetX, oy = e.offsetY;
            let word = document.createElement('div');

            word.style.cssText = `
                width:100px;height:40px;border:1px dashed #00AAEE;
                position:absolute;left:${ox}px;top:${oy}px;
            `;
            word.contentEditable = 'true';
            this.mask.appendChild(word); 
            this.mask.onmousedown = null;  
            //拖动
            let lefts,tops;
            word.onmousedown = function(e){
                let dx = e.clientX, dy = e.clientY;
                let ol = this.offsetLeft,ot = this.offsetTop;
                that.mask.onmousemove = function(e){
                    let mx = e.clientX,my = e.clientY;
                    lefts = mx-dx+ol;
                    tops = my-dy+ot;
                    if (lefts<0) {
                        lefts=0;
                    }
                    if(lefts>=that.mask.offsetWidth-100){
                        lefts=that.mask.offsetWidth-100
                    }
                    if (tops<0) {
                        tops=0;
                    }
                    if(tops>=that.mask.offsetHeight-40){
                        tops=that.mask.offsetHeight-40
                    }
                    word.style.left = `${lefts}px`;
                    word.style.top = `${tops}px`;

                }
                word.onmouseup = function(){
                    that.mask.onmousemove = null;
                    word.onmouseup = null;
                }
            }

            word.onblur = function(){
                let value = word.innerText;
                that.mask.removeChild(word);
                that.ctx.font = '20px bold 苹方';
                that.ctx.textAlign = 'center';
                that.ctx.textBaseLine = 'middle';
                that.ctx.fillText(value, lefts, tops);
            }
        }.bind(this)
    },
    reverse:function(){
        let img = this.ctx.getImageData(0,0,this.widths,this.heights);
        let data = img.data;
        console.log(data)
        for(let i=0;i<data.length;i+=4){
            data[i] = 255-data[i];
            data[i+1] = 255-data[i+1];
            data[i+2] = 255-data[i+2];
        }
        this.ctx.putImageData(img,0,0);
    },
    /*new:function(){
        document.body.removeChild(canvas);
    },*/
    back:function(){
        let imgs = this.history.pop();
        this.ctx.putImageData(imgs,0,0);
    },
    //裁切
    clips:function(clipObj){
        this.mask.onmousedown = function(e){
            let minX,minY,w,h;
            let ox = e.offsetX, oy = e.offsetY;
            this.mask.onmousemove = function(e){
                let cx = e.offsetX, cy = e.offsetY;
                minX = Math.min(ox,cx);
                minY = Math.min(oy,cy);
                w = Math.abs(cx-ox);
                h = Math.abs(cy-oy);
                clipObj.style.cssText = `
                    display:block;width:${w}px;height:${h}px;
                    left:${minX}px;top:${minY}px;
                `;
            }
            this.mask.onmouseup = function(){
                this.temp = this.ctx.getImageData(minX,minY,w,h);
                this.ctx.clearRect(minX, minY, w, h);
                this.history.push(this.ctx.getImageData(0,0,this.widths,this.heights))
                this.ctx.putImageData(this.temp,minX,minY);
                this.mask.onmousemove = null;
                this.mask.onmouseup = null;
                this.drag(minX,minY,w,h,clipObj);
            }.bind(this)
        }.bind(this)
    },
    drag:function(minX,minY,w,h,clipObj){
        this.mask.onmousemove = function(e){
            let ox = e.offsetX, oy = e.offsetY;
            if(ox>minX && ox<minX+w && oy>minY && oy<minY+h){
                this.mask.style.cursor = 'move';
            }else{
                this.mask.style.cursor = 'default';
            }
        }.bind(this);
        this.mask.onmousedown = function(e){
            e.preventDefault();
            let ox = e.offsetX, oy = e.offsetY;
            this.mask.onmousemove = function(e){
                let cx = e.offsetX, cy = e.offsetY;
                let lefts = cx-ox+minX;
                let tops = cy-oy+minY;
                if(lefts<=0){
                    lefts = 0;
                }
                if(lefts>=this.widths-w){
                    lefts=this.widths-w;
                }
                if(tops<=0){
                    tops = 0;
                }
                if(tops>=this.heights-h){
                    tops=this.heights-h;
                }
                this.ctx.clearRect(0,0,this.widths,this.heights);
                if(this.history.length>0){
                    this.ctx.putImageData(this.history[this.history.length-1],0,0)
                }
                this.ctx.putImageData(this.temp,lefts,tops);
                clipObj.style.left = `${lefts}px`;
                clipObj.style.top = `${tops}px`;
            }.bind(this)
            this.mask.onmouseup = function(){
                this.temp = null;
                this.mask.style.cursor = 'default'
                clipObj.style.display = 'none';
                this.history.push(this.ctx.getImageData(0,0,this.widths,this.heights))
                this.mask.onmousemove = null;
                this.mask.onmouseup = null;
            }.bind(this)
        }.bind(this)
    }
}