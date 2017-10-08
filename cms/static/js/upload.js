class upload{
    constructor(){
        //选择按钮的name属性
        this.fileName="file";
        //选择按钮的样式
        this.selectBtnStyle="width:150px;height:50px;border-radius:10px;background:#ff6700;";
        this.selectBtnContent="请选择";
        //上传按钮的样式
        this.upBtnStyle="width:150px;height:50px;border-radius:10px;background:#ccc;";
        this.upBtnContent="点击上传";
        //预览样式
        this.previewStyle="width:300px;height:200px;border:1px solid black;"
        //列表样式
        this.listStyle="width:98px;height:98px;border:1px solid #ccc;float:left;"
        //进度条样式
        this.progressStyle="width:100%;height:5px;position:absolute;bottom:0;left:0;"
        this.progStyle="width:0%;height:100%;background:green;"
        //错误样式
        this.errorStyle="width:100%;height:30px;background:rgba(0,0,0,0.7);position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;text-align:center;line-height:30px;color:white;"
        this.errorContent="错误信息";
        //删除样式
        this.delStyle="width:18px;height:18px;border:1px solid #ccc;position:absolute;right:8px;top:8px;text-align:center;line-height:18px;cursor:pointer;display:none;"
        this.delCon="X"
        //上传文件的类型
        this.type="image/png;image/jpeg;image/gif";
        //上传文件的大小
        this.size=1024*1024*10;
        this.list=[];
        this.data=[];
    }
    createView(params){
        let that = this;
        //创建选择按钮
        this.createSelectBtn(params,function () {
            //创建预览
            that.createPreview(params);
            //创建上传按钮
            that.createUpBtn(params);
            //显示预览
            that.change();
        });
    }
    //创建选择按钮
    createSelectBtn(params,callback){
        this.parent=params.parent;
        if (!params.parent){
            console.error('必须指定父容器');
            return false;
        }
        if (params.selectBtn){
            this.selectbtn=params.selectBtn;
        }else {
            //创建选择按钮
            let selectBtn = document.createElement('div');
            selectBtn.style.cssText=this.selectBtnStyle;
            selectBtn.style.position="relative";
            selectBtn.style.textAlign="center";
            selectBtn.innerText=this.selectBtnContent;

            let file = document.createElement('input');
            file.setAttribute("multiple","multiple");
            file.type="file";
            file.name=this.fileName;
            file.style.cssText="opacity:0;width:100%;height:100%;z-index:1;position:absolute;left:0;top:0";
            this.parent.appendChild(selectBtn);
            selectBtn.appendChild(file);
            selectBtn.style.lineHeight=selectBtn.offsetHeight+"px";

            this.selectbtn=file;
            callback();
        }
    }
    //
    createUpBtn(params){
        if (params.upBtn){
            this.upbtn=params.upBtn;
        }else {
            //创建上传按钮
            let upBtn = document.createElement('div');
            upBtn.style.cssText=this.upBtnStyle;
            upBtn.style.position="relative";
            upBtn.style.textAlign="center";
            upBtn.innerText=this.upBtnContent;
            this.parent.appendChild(upBtn);
            upBtn.style.lineHeight=upBtn.offsetHeight+"px";
            this.upbtn = upBtn;
        }
    }
    //
    createPreview(params){
        if (params.preview){
            this.prev=params.preview;
            return false;
        }else {
            //创建预览
            let preview = document.createElement('div');
            preview.style.cssText=this.previewStyle;
            this.parent.appendChild(preview);
            this.preview=preview;
        }
    }
    //值发生改变并失去焦点
    change(){
        let that=this;
        this.selectbtn.onchange = function () {
            //获取相应文件的信息
            // console.log(this.files);
            //将有length属性的对象转化为真正的数组
            that.data = Array.prototype.slice.call(this.files);
            that.check();
        }
    }
    check(){
        /*var that=this;
        var temp=[];*/
        //var 闭包
        /*for (var i=0;i<this.data.length;i++){
            var obj=this.createList(this.data[i]);
            (function (obj) {
                obj.list.onmouseenter = function () {
                    obj.del.style.display="block";
                }
                obj.list.onmouseleave = function () {
                    obj.del.style.display="none";
                }
            })(obj)
            //删除
            /!*
            *
            * *!/
            obj.del.index=i;
            temp[i]=this.data[i];
            obj.del.onclick=function () {
                this.parentNode.parentNode.removeChild(this.parentNode);
                var tempdata=temp[this.index];
                for(var j=0;j<that.data.length;j++){
                    if(that.data[j]==tempdata){
                        that.data.splice(j,1);
                        that.list.splice(j,1);
                    }
                }
                console.log(that.data)
            }
        }*/
        //let 作用域
        let that=this;
        let temp=[];
        for (let i=0;i<this.data.length;i++){
            temp[i]=this.data[i];
            let obj=this.createList(this.data[i]);
            that.list[i]=obj;
            obj.del.index=i;
            obj.list.onmouseenter = function () {
                obj.del.style.display="block";
            }
            obj.list.onmouseleave = function () {
                obj.del.style.display="none";
            }
            //删除
            obj.del.onclick = function () {
                this.parentNode.parentNode.removeChild(this.parentNode);
                //删除数据
                let tempdata=temp[this.index];

                for(var j=0;j<that.data.length;j++){
                    if(that.data[j]==tempdata){
                        that.data.splice(j,1);
                        that.list.splice(j,1);
                    }
                }
            }
            //是否符合数据类型
            if (this.type.indexOf(this.data[i].type)<0){
                let tempdata=temp[this.index];

                for(var j=0;j<that.data.length;j++){
                    if(that.data[j]==tempdata){
                        that.data.splice(j,1);
                        that.list.splice(j,1);
                    }
                }
                obj.error.style.display="block";
                obj.error.innerHTML="类型不对";
            }
            //是否符合大小
            if (this.size < this.data[i].size) {
                let tempdata=temp[this.index];

                for(var j=0;j<that.data.length;j++){
                    if(that.data[j]==tempdata){
                        that.data.splice(j,1);
                        that.list.splice(j,1);
                    }
                }
                that.data.splice(i,1);
                obj.error.style.display = "block";
                obj.error.innerHTML = "尺寸太大";
            }
        }
    }
    createList(data){
        let list=document.createElement('div');
        list.style.cssText=this.listStyle;
        list.style.position="relative";
        //图片预览
        let tempType=["image/jpeg","image/png"];
        if (tempType.includes(data.type)){
            //创建能够解析文件信息的对象
            let read = new FileReader();
            read.onload = function (e) {
                list.style.background="url("+e.target.result+")";
                list.style.backgroundSize="cover";
            }
            read.readAsDataURL(data)
        }else{
            let notice=document.createElement("div");
            notice.innerHTML="未知类型";
            list.appendChild(notice);
        }
        //进度条容器
        let progress=document.createElement('div');
        progress.style.cssText=this.progressStyle;
        //进度条
        let prog=document.createElement('div');
        prog.style.cssText=this.progStyle;;
        //错误的容器
        let error=document.createElement('div');
        error.style.cssText=this.errorStyle;
        error.innerHTML=this.errorContent;
        error.style.display="none";
        //删除按钮
        let del=document.createElement('div');
        del.style.cssText=this.delStyle;
        del.innerHTML=this.delCon;

        list.appendChild(del)
        list.appendChild(error);
        progress.appendChild(prog);
        list.appendChild(progress);
        this.preview.appendChild(list);

        return {
            list:list,
            prog:prog,
            error:error,
            del:del
        }
    }
    up(url,callback){
        let that=this;
        this.upbtn.onclick=function() {
            for (let i = 0; i < that.data.length; i++) {
                let ajax = new XMLHttpRequest();
                let form = new FormData();

                // console.log(form);
                form.append(that.fileName, that.data[i]);
                ajax.onload = function () {
                    if(callback) {
                        callback(ajax.response);
                    }
                }

                ajax.upload.onprogress = function (e) {
                    var bili = e.loaded / e.total * 100 + "%"
                    that.list[i].prog.style.width = bili;
                }
                ajax.open("post", url);
                ajax.send(form);
            }
        }
    }
}