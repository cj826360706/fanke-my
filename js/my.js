/*
 * @Author: admin
 * @Date:   2017-08-07 10:26:19
 * @Last Modified by:   admin
 * @Last Modified time: 2017-08-08 13:57:24
 */

/*
	要求：返回顶部按钮开始是隐藏的，当页面向上滚动超出600px时，显示返回顶部按钮，。
*/
var GLOBLE = GLOBLE || {}; //定义一个全局变量，用来存值
window.onload = function() {

	resizeBlocks();

	window.onresize = function() {
		resizeBlocks();
		//调整页面大小的时候让整屏居中。
		mainSlideGo();
		if(mainSlideIndex) {
			if(GLOBLE.resizeTimer) {
				clearInterval(GLOBLE.resizeTimer);
			}
			GLOBLE.resizeTimer = setTimeout(function() {
				mainSlideGoing = true;
				mainSlideGo();
			}, 200)
		}
	}

	//鼠标点击时切换
	var aAtags = document.getElementsByTagName("a");
	for(var i = 0; i < aAtags.length; i++) {
		aAtags[i].onclick = function() {
			mainSlideIndex = this.getAttribute("index");
			mainSlideGo();
		}
	}

	/*单页滚动开始*/
	//鼠标滚动实践绑定及检测
	let mainSlideIndex = 0;
	let mainSlideGoing = false;
	let mainSlideDelay = 0;
	let mainSlideTimer = null;
	let scrollFunc = function(e) {
		e = e || window.event;
		if(e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件            
			if(e.wheelDelta > 0) { //当滑轮向上滚动时  
				//alert("滑轮向上滚动"); 
				mainSlideUp();
			}
			if(e.wheelDelta < 0) { //当滑轮向下滚动时  
				//alert("滑轮向下滚动 ie chrom");
				mainSlideDown();

			}
		} else if(e.detail) { //Firefox滑轮事件   
			if(e.detail > 0) { //当滑轮向下滚动时  
				//alert("滑轮向下滚动")
				mainSlideDown();

			}
			if(e.detail < 0) { //当滑轮向上滚动时  
				//alert("滑轮向上滚动ff");
				mainSlideUp();
			}
		}
	}
	//给页面绑定滑轮滚动事件  
	if(document.addEventListener) { //firefox  
		document.addEventListener('DOMMouseScroll', scrollFunc, false);
	}
	//滚动滑轮触发scrollFunc方法  //ie 谷歌  
	window.onmousewheel = document.onmousewheel = scrollFunc;
	//向下滚动
	function mainSlideDown() {
		if(mainSlideDelay < 1) { //这个判断用于检测第一次鼠标滚动，让第二次鼠标滚动的时候，再执行页面动效
			clearInterval(mainSlideTimer);
			mainSlideTimer = setTimeout(function() {
				mainSlideDelay++;
			}, 100)

		} else if(!mainSlideGoing) {
			mainSlideGoing = true;
			mainSlideIndex++;
			if(mainSlideIndex > 6) {
				mainSlideIndex = 6;
			}
			mainSlideGo();

		}
	}
	//向上滚动
	function mainSlideUp() {
		if(mainSlideDelay < 1) {
			clearInterval(mainSlideTimer);
			mainSlideTimer = setTimeout(function() {
				mainSlideDelay++;
			}, 100)

		} else if(!mainSlideGoing) {
			mainSlideGoing = true;
			mainSlideIndex--;
			if(mainSlideIndex < 0) {
				mainSlideIndex = 0;
			}
			mainSlideGo();
		}
	}

	//滚动方法
	function mainSlideGo() {

		//用于设置滚动方向
		let direction = 1;

		let oDiv = document.getElementById("content");

		let target = document.getElementById("wrap").offsetHeight * mainSlideIndex;

		let distance = Math.abs(target + oDiv.offsetTop);
		//判断滚动方法，并设置相应的滚动方向是+还是-
		if(target + oDiv.offsetTop < 0) {
			direction = -1;
		}
		//设置滚动速度
		let spead = distance / 40;
		let remainDis = distance;

		//运动定时器
		let goTimer = setInterval(function() {
			oDiv.style.top = oDiv.offsetTop - spead * direction + "px";
			remainDis -= spead;
			if(remainDis <= 40) {
				clearInterval(goTimer);
				oDiv.style.top = -target + "px"
				oDiv.style.transition = "1s"
				mainSlideGoing = false;
				mainSlideDelay = 0;
				document.getElementsByClassName("now")[0].className = "";
				document.getElementsByTagName("a")[mainSlideIndex].className = "now";
			}
		}, 8)

	}

	/*单页滚动结束*/

	//调整页面高度的方法
	function resizeBlocks() {
		var screenh = document.documentElement.clientHeight || document.body.clientHeight;

		aBlock = document.getElementsByClassName("colorBlock");

		for(var i = 0; i < aBlock.length; i++) {

			aBlock[i].style.height = screenh + "px";
		}
		document.getElementById("wrap").style.height = screenh + "px";
	}
	var servicebox = document.getElementById("servicebox")
	servicebox.onmouseover = function() {
		servicebox.style.right = 0
	}
	servicebox.onmouseout = function() {
		servicebox.style.right = -150 + "px"
	}
}

