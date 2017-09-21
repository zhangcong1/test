/*
* @Author: 张聪
* @Date:   2017-08-21 17:40:14
* @Last Modified by:   张聪
* @Last Modified time: 2017-08-22 10:05:33
*/
window.onload = function(){
	let textarea = document.querySelector('textarea');
	let word = document.querySelector('.word');
	let b = word.querySelector('b');

	let button = document.querySelector('.tijiao');
	let maxLength = 120;
	let floor = 01;
	textarea.onkeyup = function(){
		//获取输入内容的长度
		let length = this.value.length;
		b.innerText = `${maxLength - length}`
	}

	let ul = document.querySelector('ul');
	button.onclick = textarea.onkeydown = function(e){
		if(e.type == 'click'){
			fn.call(textarea);
		}else if(e.type == 'keydown'){
			if (e.shiftKey && e.keyCode == 13) {
				fn.call(textarea);
			}
		}
		function fn(){
			// 保存输入的内容
			let content = this.value;
			// 清空
			this.value = '';
			// 创建新评论
			let newCom = document.createElement('li');
			newCom.innerHTML = `
				<li>
					<img src="img/aa.jpg" alt="">
					<div class="content">
						<div class="user">浅笑嫣然</div>
						<div class="neirong">${content}</div>
						<div class="time">
							<span class="iconfont icon-icon-test"></span>
							<span class="timer">2017.08.21</span>
						</div>
						<div class="floor">
							<span class="floor1">0${++floor}</span>
							<div class="xie"></div>
							<span class="floor2">楼</span>
						</div>
					</div>
				</li>
			`;
			ul.appendChild(newCom);


		}
	}
    ul.onclick = function (e) {
        e.target.style.background = 'pink';
    }
}
