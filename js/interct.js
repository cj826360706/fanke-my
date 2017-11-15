window.onload = function() {
	var ico_weixin = document.getElementById("ico_weixin");
	var code = document.getElementById("code");
	var ico_phone = document.getElementById("ico_phone");
	var numbers = document.getElementById("number");
	var bdshare = document.getElementById("bdshare");
	var bdshare_smallbox = document.getElementById("bdshare_smallbox");

	//移动显示
	ico_weixin.onmouseover = function() {
		show(code, "block");
	}
	ico_weixin.onmouseout = function() {
		noshow(code, "none");
	}
	ico_phone.onmouseover = function() {
		show(numbers, "block");
	}
	ico_phone.onmouseout = function() {
		noshow(numbers, "none");
	}
	bdshare.onmouseover = function() {
		show(bdshare_smallbox, "block");
	}
	bdshare.onmouseout = function() {
		noshow(bdshare_smallbox, "none");
	}

	function show(obj, type) {
		obj.style.display = type
	}

	function noshow(obj, type) {
		obj.style.display = type
	}
	//************************************************
	var row_ = document.getElementById("row_");
	var mOve = row_.getElementsByTagName("span")[0]
	var Div = row_.getElementsByTagName("div");
	var saycontent_box = document.getElementById("saycontent_box");
	var s_how = saycontent_box.getElementsByTagName("div");
	var timer =null;
	var num = 0;

	for(var i = 0; i < Div.length; i++) {
		Div[i].result = i
		Div[i].onmouseover = function() {
			mOve.style.left = this.offsetLeft + "px";
			mOve.style.top = this.offsetTop + "px"
			for(var j=0;j<s_how.length;j++){
				s_how[j].className = ""
			}
			s_how[this.result].className = "showsay"
		}
	}
	//*************************************************
	var move = document.getElementsByClassName("move")[0];
	var show_ = document.getElementsByClassName("show_")[0];
	var a1 = move.getElementsByTagName("a")[0];
	var a2 = move.getElementsByTagName("a")[1];
	var a3 = move.getElementsByTagName("a")[2];
	var a4 = move.getElementsByTagName("a")[3];
	
	a1.onmouseover = function(){
		show_.style.backgroundPosition = "-420px 0px";
		show.style.transition = "1s"
	}
	a2.onmouseover = function(){
		show_.style.backgroundPosition = "-425px -289px";
		show_.style.transition = "1s"
		
	}
	a3.onmouseover = function(){
		show_.style.backgroundPosition = "-425px -559px";
		show_.style.transition = "1s"
		
	}
	a4.onmouseover = function(){
		show_.style.backgroundPosition = "-425px -830px";
		show_.style.transition = "1s"
		
	}
	
}