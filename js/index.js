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
				var aAtags = document.getElementsByTagName("li");
				for(var i = 0; i < aAtags.length; i++) {
					aAtags[i].onclick = function() {
						mainSlideIndex = this.getAttribute("index");
						mainSlideGo();
					}
				}

				/*单页滚动开始*/
				//鼠标滚动实践绑定及检测
				var mainSlideIndex = 0;
				var mainSlideGoing = false;
				var mainSlideDelay = 0;
				var mainSlideTimer = null;
				var scrollFunc = function(e) {
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
						if(mainSlideIndex > 3) {
							mainSlideIndex = 3;
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
					var direction = 1;

					var oDiv = document.getElementsByClassName("content");

					var target = document.getElementById("wrap").offsetHeight * mainSlideIndex;

					var distance = Math.abs(target + oDiv.offsetTop);
					//判断滚动方法，并设置相应的滚动方向是+还是-
					if(target + oDiv.offsetTop < 0) {
						direction = -1;
					}
					//设置滚动速度
					var spead = distance / 40;
					var remainDis = distance;

					//运动定时器
					var goTimer = setInterval(function() {
						oDiv.style.top = oDiv.offsetTop - spead * direction + "px";
						remainDis -= spead;
						if(remainDis <= 40) {
							clearInterval(goTimer);
							oDiv.style.top = -target + "px"
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
				
//*************************************************************************************				
//				var box = document.getElementsByClassName("box")[0];
//				var botn = document.getElementsByTagName("span");
//				var span1 = box.getElementsByTagName("span")[1]
//				var span2 = box.getElementsByTagName("span")[2]
//				var span3 = box.getElementsByTagName("span")[3]
//				var span4 = box.getElementsByTagName("span")[4]
//				var span5 = box.getElementsByTagName("span")[5]
//				
//				var h = 8
//					M1 = 5
//					M2 = 9
//					m1 = 5
//					m2 = 9
//					
//				setInterval(function(){
//					for(var d=1;d<botn.length;d++){
//						span[i].innerText = ""
//					}
//					going()
//				},1000)
//					
//					function going(){
//						m2--;
//						if(m2<0){
//							m2=9
//							m1--
//							span5.innerText = m2
//						}else if(m1<0){
//							m1=5
//							M2--
//							span4.innetText = m1
//						}else if(M2<0){
//							M2=9
//							M1--
//							span3.innerText = M2
//						}else if(M1<0){
//							M1=5
//							h--
//							span2.innerText = M1
//						}else if(h=0){
//							M1=0;
//							M2=0;
//							m1=0;
//							m2=0;
//							span1.innerText = 0
//						}
//					}
//
//			}