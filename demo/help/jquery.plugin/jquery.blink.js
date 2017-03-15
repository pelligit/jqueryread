(function($){
	// 文字闪烁插件
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
})(jQuery);