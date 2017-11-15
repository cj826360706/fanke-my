window.onload = function() {
	var oH4 = document.getElementsByTagName("h4");
	var span = document.getElementById("move")
	var bannerbox = document.getElementById("bannerbox");
	var Odiv = bannerbox.getElementsByTagName("div");
	for(var i = 0; i < oH4.length; i++) {
		oH4[i].index = i;
		oH4[i].onmouseover = function() {
			move(span, {
				"left": this.index * 410 + 20
			})
			for(var j = 0; j < Odiv.length; j++) {
				Odiv[j].className = ""
			}
			Odiv[this.index].className = "show"
		}
	}
	//***************************************************
	var div = document.getElementById("div1");
	//获取滚轮高度
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	// div.style.top=document.documentElement.clientHeight-div.offsetHeight+scrollTop+'px';
	startmove(parseInt((document.documentElement.clientHeight - div.offsetHeight) / 2 + scrollTop))
	//offsetHeight是div的高度
	//document.documentElement.clientHeight是到窗口的顶部
};
var timer = null;

function startmove(iTarget) {
	var div = document.getElementById('div1');
	clearInterval(timer);
	timer = setInterval(function() {
		var speed = (iTarget - div.offsetTop) / 4;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(div.offsetTop == iTarget) {
			clearInterval(timer);
		} else {
			div.style.top = div.offsetTop + speed + 'px';
		}
	}, 30)
}