/*
*   姓名  电话  拼音
*   data    处理  按照拼音首字母
*   dataObj = {
*       ‘A’：[{}，{}，{}]
*   }
* */
window.onload = function () {
    let lxr = [
        {'name':'张三','num':'15935412153','pinyin':'zhangsan'},
        {'name':'李四','num':'18404968076','pinyin':'lisi'},
        {'name':'王五','num':'15035434457','pinyin':'wangwu'},
        {'name':'锅四','num':'13753912395','pinyin':'ghaosi'},
        {'name':'钱三','num':'15935410493','pinyin':'qiansan'},
        {'name':'孙武','num':'18641259632','pinyin':'sunwu'},
        {'name':'汤二','num':'15935412153','pinyin':'tier'},
        {'name':'一一','num':'15935412153','pinyin':'yhouyi'},
        {'name':'吴四','num':'15935412153','pinyin':'wusi'},
        {'name':'韩一','num':'15935412153','pinyin':'hhengyi'},
        {'name':'王六','num':'15935412153','pinyin':'wangliu'},
        {'name':'张三','num':'15935412153','pinyin':'zhangsan'},
        {'name':'李四','num':'15935412153','pinyin':'lisi'},
        {'name':'王五','num':'15935412153','pinyin':'wangwu'},
        {'name':'锅四','num':'15935412153','pinyin':'ghaosi'},
        {'name':'钱三','num':'15935412153','pinyin':'qiansan'},
        {'name':'孙武','num':'15935412153','pinyin':'sunwu'},
        {'name':'汤二','num':'15935412153','pinyin':'tier'},
        {'name':'一一','num':'15935412153','pinyin':'yhouyi'},
        {'name':'吴四','num':'15935412153','pinyin':'wusi'},
        {'name':'韩一','num':'15935412153','pinyin':'hhengyi'},
        {'name':'王六','num':'15935412153','pinyin':'wangliu'},
    ];
    /*localStorage.lxr = JSON.stringify(lxr);
    let data = JSON.parse(localStorage.lxr);*/
    // console.log(data);


    //获取数据  有  初始
    let data = getData(lxr);

    function getData(lxr) {
        let data = localStorage.getItem('lxr')?JSON.parse(localStorage.lxr):false;
        if (!data){
            localStorage.setItem('lxr',JSON.stringify(lxr));
            data = JSON.parse(localStorage.lxr);
        }
        return data;
    }
    console.log(data)
    /*
    *
    * dateObj = {
    *       ‘A’:[{}，{}，{}]
    *       ‘B’:[{}，{}，{}]
    *       ‘C’:[{}，{}，{}]
    * }
    *
    * */
    let dl = document.querySelector('dl');
    render(data);
    function render(data) {
        let dataObj = {};
        data.forEach(element=>{
            let firstChar = element.pinyin.charAt(0).toUpperCase();
            if (!dataObj[firstChar]){
                dataObj[firstChar] = [];
            }
            dataObj[firstChar].push(element);
        })

        dl.innerHTML = ``;

        let keys = Object.keys(dataObj).sort();

        keys.forEach(ele=>{
            dl.innerHTML += `
                <dt>${ele}</dt>
            `;
            dataObj[ele].forEach(value=>{
                dl.innerHTML += `
                    <dd><a href="tel:${value.num}">${value.name}</a></dd>
                `
            })
        })

        let aside = document.querySelector('.aside');

        aside.innerHTML = ``;
        keys.forEach(ele=>{
            aside.innerHTML += `
                <li>${ele}</li>
            `
        })
        let asideH = aside.offsetHeight;
        aside.style.marginTop = `-${asideH/2}px`

        let tips = document.querySelector('.tips');
        tips.innerText = keys[0];
        let header = document.querySelector('header');
        let hh = header.offsetHeight;
        //获取每层距离文档的高度
        let floors = document.querySelectorAll('dt')
        let newArr = [];
        floors.forEach(ele=>{
            return newArr.push(ele.offsetTop)
        })

        window.onscroll = function () {
            let st = document.body.scrollTop;
            newArr.forEach((ele,index)=>{
                if (ele < st + hh){
                    tips.innerText = keys[index];
                }
            })
        }
    }
    let input = document.querySelector('input');
    input.onkeyup = function () {
        let value = this.value.trim();
        let filter = data.filter(ele => {
            return ele.name.includes(value) || ele.num.includes(value) || ele.pinyin.includes(value);
        });
        render(filter);
    }
    let add = document.querySelector('.add');
    add.onclick = function () {
        adds('阿萨德','15935412153','asd')
    }

    function adds(name,num,pinyin) {
        data.push({'name':`${name}`,'num':`${num}`,'pinyin':`${pinyin}`});
        /*localStorage.clear(data);*/
        render(data)
    }
}