(function($){
	// 向元素添加阴影
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
})(jQuery);