window.onload = function () {
    let xiezhen = document.querySelector('.xiezhen');
    let imgs = xiezhen.querySelectorAll('li');
    let t = setInterval(fn,5000);
    let now = 0;
    function fn() {
        now++;
        if (now == imgs.length){
            now = 0;
        }
        for (let i=0;i<imgs.length;i++){
            imgs[i].style.opacity = 0;
        }
        imgs[now].style.opacity = 1;
    }

    let audio = document.querySelector('audio');
    let song = document.querySelector('.song');
    let songer = document.querySelector('.songer');
    let lyrics = document.querySelector('.lyrics');
    let songs = document.querySelector('.songs');
    let album = document.querySelector('.album>img');
    let alltime = document.querySelector('.alltime');
    let i=0;
    render(database[i]);
    function render(data) {
        audio.src = `${data.src}`;
        songs.innerText = `${data.songs}-${data.name}`;
        album.src = `${data.photo}`;
        alltime.innerText = `${data.alltime}`;
        song.innerText = data.songs;
        songer.innerText = data.name;
        lyrics.innerHTML = ``;
        data.lyrics.forEach(ele=>{
            lyrics.innerHTML += `<li>${ele.lyric}</li>`
        })
    }
    //播放
    let play = document.querySelector('.iconfont.icon-pcduanbizhixiazaicishutubiao');
    play.onclick = function () {
        if (audio.paused){
            audio.play();
        }else {
            audio.pause();
        }
        play.classList.toggle('icon-pcduanbizhixiazaicishutubiao');
        play.classList.toggle('icon-pcduanbizhixiazaicishutubiao1');
    }
    //格式化时间函数
    function time(data) {
        let minute = Math.floor(data/60)>=10 ? `${Math.floor(data/60)}`:`0${Math.floor(data/60)}`;
        let second = Math.floor(data%60)>=10 ? `${Math.floor(data%60)}`:`0${Math.floor(data%60)}`;
        return `${minute}:${second}`;
    }
    //进度条，时间, 歌词
    let pro = document.querySelector('.pro');
    // let currentTime = document.querySelector('.currentTime');
    audio.ontimeupdate = function () {
        //audio.currentTime  audio.duration
        //进度条
        let bili = audio.currentTime / audio.duration;
        pro.style.width = `${bili*100}%`;
        //时间
        let times = time(audio.duration-audio.currentTime);
        alltime.innerText = times;
        //歌词
        let t = time(audio.currentTime);
        database[i].lyrics.forEach((ele,index)=>{
            if (ele.time == t){
                lyrics.innerHTML = ``;
                let a = index;
                if (index<4){
                    index = 0;
                }else {
                    index -= 4;
                }
                for (let j=index;j<database[i].lyrics.length;j++){
                    lyrics.innerHTML += `<li class = "list${j}">${database[i].lyrics[j].lyric}</li>`
                }
                let lis = document.querySelector(`.list${a}`);
                lis.style.color = 'greenyellow';
                lis.style.fontSize = '26px';
            }
        })
    }
    //上一首
    let last = document.querySelector('.iconfont.icon-shangyishou');
    last.onclick = function () {
        i--;
        if (i<0){
            i = database.length-1;
        }
        render(database[i]);
        audio.play();
        if(play){
            play.classList.remove('icon-pcduanbizhixiazaicishutubiao');
            play.classList.add('icon-pcduanbizhixiazaicishutubiao1');
        }else{
            play.classList.remove('icon-pcduanbizhixiazaicishutubiao1');
            play.classList.add('icon-pcduanbizhixiazaicishutubiao');
        }
    }
    //下一首
    let next = document.querySelector('.iconfont.icon-xiayishou');
    next.onclick = function () {
        i++;
        if (i>database.length){
            i = 0;
        }
        render(database[i]);
        audio.play();
        if(play){
            play.classList.remove('icon-pcduanbizhixiazaicishutubiao');
            play.classList.add('icon-pcduanbizhixiazaicishutubiao1');
        }else{
            play.classList.remove('icon-pcduanbizhixiazaicishutubiao1');
            play.classList.add('icon-pcduanbizhixiazaicishutubiao');
        }
    }
    //音量
    let sound = document.querySelector('.iconfont.icon-yinliang');
    let voice = document.querySelector('.voice');
    voice.onblur = function () {
        voice.style.display = 'none';
    }
    sound.onclick = function () {
        voice.style.display = 'block';
    }
    let voiceButton = document.querySelector('.voiceButton');
    let voice2 = document.querySelector('.voice2');
    voiceButton.onmousedown = function (e) {
        e.preventDefault();
        let oy = e.clientY;
        let top = voiceButton.offsetTop;
        document.onmousemove = function (e) {
            let cy = e.clientY;
            let tops = cy - oy + top;
            if (tops<-6){
                tops = -6;
            }else if (tops>94){
                tops = 94;
            }
            voiceButton.style.top = `${tops}px`;
            voice2.style.height = `${100-tops-6}px`;
            audio.volume = (100-tops-6)/100;
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
    //播放完成
    audio.onended = function () {
        i++;
        render(database[i]);
        audio.play();
        if(play){
            play.classList.add('icon-pcduanbizhixiazaicishutubiao1');
        }
    }
    //随机播放
    let playBox = document.querySelector('.list>span:nth-of-type(2)');
    let playOrder = document.querySelector('.iconfont.icon-ttpodicon');
    playOrder.onclick = function(){
        i = Math.floor(Math.random()*database.length);
        render(database[i]);
        audio.play();
        if(play){
            play.classList.remove('icon-pcduanbizhixiazaicishutubiao');
            play.classList.add('icon-pcduanbizhixiazaicishutubiao1');
        }else{
            play.classList.remove('icon-pcduanbizhixiazaicishutubiao1');
            play.classList.add('icon-pcduanbizhixiazaicishutubiao');
        }
        playBox.classList.remove('icon-ttpodicon');
        playBox.classList.add('icon-suijibofang');
        //单曲循环
        let playRandom = document.querySelector('.iconfont.icon-suijibofang');
        playRandom.onclick = function(){
            i = i;
            render(database[i]);
            audio.play();
            if(play){
                play.classList.remove('icon-pcduanbizhixiazaicishutubiao');
                play.classList.add('icon-pcduanbizhixiazaicishutubiao1');
            }else{
                play.classList.remove('icon-pcduanbizhixiazaicishutubiao1');
                play.classList.add('icon-pcduanbizhixiazaicishutubiao');
            }
            playBox.classList.remove('icon-suijibofang');
            playBox.classList.add('icon-danquxunhuan');
            //顺序播放
            let playOne = document.querySelector('.iconfont.icon-danquxunhuan');
            playOne.onclick = function(){
                i++;
                if (i>database.length){
                    i = 0;
                }
                render(database[i]);
                audio.play();
                if(play){
                    play.classList.remove('icon-pcduanbizhixiazaicishutubiao');
                    play.classList.add('icon-pcduanbizhixiazaicishutubiao1');
                }else{
                    play.classList.remove('icon-pcduanbizhixiazaicishutubiao1');
                    play.classList.add('icon-pcduanbizhixiazaicishutubiao');
                }
                playBox.classList.remove('icon-danquxunhuan');
                playBox.classList.add('icon-ttpodicon');
            }
        }
    }
}