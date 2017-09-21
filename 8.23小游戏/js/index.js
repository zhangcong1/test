/*
* @Author: 张聪
* @Date:   2017-08-23 09:06:20
* @Last Modified by:   张聪
* @Last Modified time: 2017-08-24 08:52:53
*/
/*
	属性
		哪些字符，个数，速度，得分，关卡，生命，减分
	方法
		消除
		产生字符
			个数
			哪些
		下一关
		重新开始
	属性：charSheet，length
		  elements保存页面中的元素 speed
	方法：start：产生字符 getChars  getChar
		  drop
 */
function Game(){
	this.charSheet = [
		['Q','img/Q.png'],
		['W','img/W.png'],
		['E','img/E.png'],
		['R','img/R.png'],
		['T','img/T.png'],
		['Y','img/Y.png'],
		['U','img/U.png'],
		['I','img/I.png'],
		['O','img/O.png'],
		['P','img/P.png'],
		['A','img/A.png'],
		['S','img/S.png'],
		['D','img/D.png'],
		['F','img/F.png'],
		['G','img/G.png'],
		['H','img/H.png'],
		['J','img/J.png'],
		['K','img/K.png'],
		['L','img/L.png'],
		['Z','img/Z.png'],
		['X','img/X.png'],
		['C','img/C.png'],
		['V','img/V.png'],
		['B','img/B.png'],
		['N','img/N.png'],
		['M','img/M.png']
	];
	this.length = 5;
	this.elements = [];
	this.speed = 10;
	this.score = 0;
	this.scoreObj = document.querySelector('.score>span');
	this.level = 5;
	this.position = [];
	this.life = 10;
	this.lifeObj = document.querySelector('.life>span');
}
Game.prototype = {
	start:function(){
		this.getChars(this.length);
		this.drop();
		this.key();
		/*this.parse();*/
	},
	getChars:function(length){
		for(let i=0;i<length;i++){
			this.getChar();
		}
	},
	checkRepeat:function(num){
		return this.elements.some(value=> value.innerText == this.charSheet[num][0])
	},
	checkPosition:function(lefts){
		return this.position.some(function(value){
			return Math.abs(value - lefts)<70;
		})
	},
	getChar:function(){
		let num = Math.floor(Math.random()*this.charSheet.length);

		let lefts = (window.innerWidth-400)*Math.random() + 200;
		let tops = Math.random()*100;


		let divs = document.createElement('div');
		divs.classList.add('divs');
		//去除重复字母
		while(this.checkRepeat(num)){
			num = Math.floor(Math.random()*this.charSheet.length);
		}
		//去除重叠
		while(this.checkPosition(lefts)){
			lefts = (window.innerWidth-400)*Math.random() + 200;
		}
		this.position.push(lefts);


		divs.innerText = this.charSheet[num][0];

		divs.style.cssText = `
			left:${lefts}px;top:${tops}px;
			background-image:url(${this.charSheet[num][1]});
		`;

		this.elements.push(divs);

		document.body.appendChild(divs);
	},
	drop:function(){
		let that = this;
		this.t = setInterval(function(){
			for(let i=0;i<that.elements.length;i++){
				let newTop = that.elements[i].offsetTop;
				that.elements[i].style.top = `${newTop + that.speed}px`;
				if(newTop >= 490){
					document.body.removeChild(that.elements[i]);
					that.elements.splice(i,1);
					that.position.splice(i,1);

					that.life--;
					that.lifeObj.innerText = that.life;

					if(that.life == 0){
						alert('game over');
						
						if(confirm('是否重新开始？')){
							clearInterval(that.t);
							for(let j=0;j<that.elements.length;j++){
								document.body.removeChild(that.elements[j]);
								that.elements.splice(j,1);
								that.position.splice(j,1);
							}
							that.life = 10;
							that.lifeObj.innerText = 10;
							that.start();
						}else{
							close();
						}
						
					}
				}
			}
			if(that.elements.length < that.length){
				that.getChar();
			}
		},200)
	},
	key:function(){
		let that = this;
		document.onkeydown = function(e){
			let char = String.fromCharCode(e.keyCode);
			for(let i=0;i<that.elements.length;i++){
				if(char == that.elements[i].innerText){
					that.score++;
					that.scoreObj.innerText = that.score;

					if(that.elements.length == 8 && that.score == that.level){
						clearInterval(that.t);
						if(confirm('恭喜过关！是否进入下一关卡？')){
							that.newNext();
						}else{
							close();
						}
						break;
					}

					if (that.score == that.level) {
						clearInterval(that.t);
						if(confirm('恭喜过关！是否进入下一关卡？')){
							that.next();
						}else{
							close();
						}
						
					}

					document.body.removeChild(that.elements[i]);
					that.elements.splice(i,1);
					that.position.splice(i,1);
				}
			}
		}
	},
	next:function(){
		this.length++;
		for(let i=0;i<this.elements.length;i++){
			document.body.removeChild(this.elements[i]);
		}
		this.elements = [];
		this.position = [];
		this.level += 5;
		this.start();
	},
	newNext:function(){
		this.speed += 10;
		for(let i=0;i<this.elements.length;i++){
			document.body.removeChild(this.elements[i]);
		}
		this.elements = [];
		this.position = [];
		this.level += 5;
		this.start();
	}
	/*parse:function(){
		let parse = document.querySelectorAll('ul>li:first-child');
		let that = this;
		parse.onclick = function(){
			clearInterval(that.t);
		}
	}*/
}
function bgColor(){
	let str = '';
	let a = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	let c = Math.floor(Math.random()*256);
	str = `rgb(${a},${b},${c})`;
	return str;
}