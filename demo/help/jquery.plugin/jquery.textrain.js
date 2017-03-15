(function($){
	// 文字雨插件。在页面中下雨
	// 这里由于是演示插件封装，只是做了简单的在页面中展示文字从顶部落下的效果。
	// 如果想要完善的话，还有许多可以发挥创造力的地方
	// 比如变速运动，左右摆动，适应元素大小，自定义雨滴的样式，自定义文字的内容
	$.fn.textRain = function(params){
		// 默认参数：如果调用的时候没有传递参数，则使用以下默认值
		var defaults = {
			color : "red",
			size : "12px",
			time : 3000,
			wrap : $("body"),//包裹雨的元素
			requeue : true,
			text : null,//文字雨的文字内容
		}
		
		var setting = $.extend(defaults,params);

		var textAll = setting.text ? setting.text : this.text();

		var len = textAll.length;
		var textArr = textAll.split("");

		var page_w = setting.wrap.width();
		var page_h = setting.wrap.height();

		var animateTime;

		var tempRain;

		// 清空页面内容，让文字雨有盛放的容器
		$("body").html("");
		for(var i = 0; i < len; i++,tempRain = null){
			animateTime = parseInt(Math.random() * 3000 + 2000);
			tempRain = $("<div>" + textArr[i] + "</div>");
			tempRain.css({
				color : setting.color,
				fontSize : setting.size,
				position : "absolute",
				width : "20px",
				height : "20px",
				lineHeight : "20px",
				textAlign : "center",
				backgroundColor : "rgba(12,12,12,0.3)",
				left : Math.random() * page_w - 60 + "px",
				top : "0",
				borderRadius : "50%"
			}).animate({
				top : Math.random() * page_h - 60 + "px",
				opacity : "0.5"
			},animateTime);

			defaults.wrap.append(tempRain);
		}

		return this;
	}
})(jQuery);