(function($){
	// 在原型上扩展jQuery对象
	// 这里扩展的方法可以链式调用。作用于通过选择器选择到的元素

	// 第一个插件示例：向元素添加阴影
	// $(ele).showPelliName().addShadow();
	$.fn.extend({
		pelliName : "pelli's jQuery plugin",
		showPelliName : function(){
			this.html(this.pelliName);
			return this;
		},
		addShadow : function(styleObj){
			if(styleObj){
				this.css(styleObj);
			}else{
				this.css({
					boxShadow : "2px 2px 5px red"
				});
			}

			return this;
		}
	});

	// 第二个插件示例：想jQuery类上添加方法
	// 可以直接调用
	// $.run();
	// $.smile();
	$.extend({
		run : function(){
			console.log("run");
			return this;
		},
		smile : function(){
			console.log("smile to you");
			return this;
		}
	});


	// 第三个插件示例：让文字闪烁
	// 开发一个可以配置参数的jQuery插件
	// 这个插件使文字闪烁
	$.fn.extend({
		blink : function(params){
			var defaults = {
				time : 100,
				// color属性没有用上，本意是做霓虹灯效果。如果有兴趣的朋友可以尝试一下
				color : ["#fff","#000"],
			}

			var setting = $.extend(defaults,params);

			var _this = this;

			function blinkIt(ele,fn){
				ele.animate({
					opacity : 0
				},setting.time,function(){
					ele.animate({
						opacity : 1
					},setting.time,function(){
						if(fn && typeof fn === "function"){
							fn(ele,fn);
						}
					});
				});
			}

			blinkIt(_this,function(){
				blinkIt(_this);
			});

			// 返回this就可以链式调用。这里的this指的是jQuery实例，比如说通过选择器选择到的元素。
			return this;
		}
	});


	// 第四个插件示例：文字雨。在页面中下雨
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
			requeue : true
		}
		
		var setting = $.extend(defaults,params);

		var textAll = this.text();
		var len = textAll.length;
		var textArr = textAll.split("");

		var page_w = 1800;
		var page_h = 600;

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
				// backgroundColor : "rgba(12,12,12,0.3)",
				left : Math.random() * page_w + "px",
				top : "0",
				borderRadius : "50%"
			}).animate({
				top : "900px",
				opacity : "0.1"
			},animateTime);

			defaults.wrap.append(tempRain);
		}

		return this;
	}
})(jQuery);