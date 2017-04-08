(function($){
	$.fn.extend({
		photos : function(params){
			// 默认参数
			var defaults = {
				margin : 5,
				showDot : true,
				showArrow : true,
				changeType : "page",//single||page;single表示每次移动一个元素，page表示每次移动一页
				direction : "left",//left||right;//默认的方向
				leftArrowStyle : {},
				rightArrowStyle : {},
				timeInterval : 2000,
				duration : 500,
				dotStyle : {

				}
			}

			// 自定义参数
			var settings = $.extend(defaults,params);

			var indexList = [];//记录每一次切换的位置。用以准确的切换
			var maxIndex = 0;
			var preIndex = 0;

			// 当前轮播的方向:left||right，向左，向右
			// 向左移动是指图片朝着左方向移动：点击右边的箭头的时候是向左移动；之前是第一个圆点有焦点，现在点击了第三个圆点，图片是向左移动；
			// 向右移动是指图片朝着右方向移动：点击左边的箭头的时候是向右移动；之前是第三个圆点有焦点，现在点击了第一个圆点，图片是向右移动；
			var curDir = defaults.direction;

			//插件开始
			var wraper = this;
			var wraperWidth = this.width();
			var wraperHeight = this.height();

			// 获取子元素
			var items = this.children();
			var itemSum = items.length;

			var realWraper = itemWraper();

			var wraperWidthArr = [];
			var maxWidth = 0;

			this.css({
				position : "relative",
				overflow : "hidden",
				padding : 0
			});

			init();

			function init(){
				// 轮播的元素包裹在新的div中
				wrapItem();

				// 设置所有父div的样式
				setWraperStyle();

				// 将新的元素放进原先的位置
				wraper.append(realWraper);

				initDot();
			}

			function initItems(){
				
			}

			// 创建元素包裹要轮播的元素
			function itemWraper(){
				var realWraper = $("<div></div>").attr({
					id : "photos_real_wraper_item",
				});

				return realWraper;
			}

			// 包裹所有的item
			function wrapItem(){
				console.log(123);

				var tempEle,
					tempEleWidth,tempEleHeight,
					tempItial = 1,
					tempRealWidth,tempRealHeight;

				
				for(var i = 0; i < itemSum; i++){
					// 当前的元素
					tempEle = items.eq(i);

					// 当前元素的宽度和高度
					tempEleWidth = tempEle.width();
					tempEleHeight = tempEle.height();

					// 长宽比
					tempItial = tempEleWidth/tempEleHeight;

					// 根据比例计算宽度和高度
					tempRealHeight = wraperHeight;
					tempRealWidth = tempRealHeight * tempItial;

					var marginVal = settings.margin;

					// 总宽度
					maxWidth = maxWidth + 2 * marginVal + tempRealWidth;

					// 存储数据
					wraperWidthArr.push(tempRealWidth + 2 * marginVal);

					tempEle.css({
						width : tempRealWidth + "px",
						height : tempRealHeight + "px",
						margin : "0 " + marginVal + "px",
						float : "left"
					});

					realWraper.append(tempEle);
				}
			}

			function setWraperStyle(){
				realWraper.css({
					width : maxWidth + "px",
					position : "absolute",
					top : 0,
					left : 0
				});
			}

			function getMaxWidth(){
				// 计算一共可以有几屛。不满一屏算是一屏
				return Math.ceil(maxWidth / wraperWidth);
			}

			// ------------------------------------

			function initDot(){
				var dotStr = wrapDotString();
				wraper.append(dotStr);

				function getDotSum(){
					if(settings.changeType === "single"){
						maxIndex = itemSum;
						return itemSum;
					}else if(settings.changeType === "page"){
						var pageSum = getMaxWidth();
						itemSum = pageSum;
						return pageSum;
					}
				}

				function getDotString(){
					var sumDot = getDotSum();
					var itemDotsString = '';
					for(var j = 0; j < sumDot; j++){
						itemDotsString += '<div class="photos-items-dot"></div>';
					}

					return itemDotsString;
				}

				function superDotParent(){
					return $("<div id='dot_super_wraper'></div>");
				}

				function wrapDotString(){
					var itemDotsString = getDotString();

					var dotSize = {
						width : 15,
						height : 15
					}

					var dotMargin = 3;

					var dotsWraper = $("<div>"+ itemDotsString +"</div>");
					var dotsEle = dotsWraper.find(".photos-items-dot");
					getDir(dotsEle);

					dotsEle.css({
						width : dotSize.width + "px",
						height : dotSize.height + "px",
						margin : "0 "+ dotMargin +"px",
						backgroundColor : "#ccc",
						float : "left",
						borderRadius : "50%",
						cursor : "pointer"
					});

					dotsEle.eq(0).addClass('active');

					var sumDot = getDotSum();
					var sumWidth = dotSize.width * (sumDot + dotMargin * 2);
					dotsWraper.css({
						width : sumWidth + "px",
						height : dotSize.height + "px",
						position : "absolute",
						top : 0,
						left : (wraperWidth - sumWidth)/2 + "px"
					});

					var superParent = superDotParent();
					
					superParent.css({
						width : wraperWidth + "px",//和原来的父元素宽度一样
						height : dotSize.height + "px",
						position : "absolute",
						bottom : "5px",
						left : 0
					}).append(dotsWraper);

					return superParent;
				}

				// 给每个圆点绑定事件
				function getDir(dots){
					// curDir
					// 点击圆点的时候，
					var len = dots.length;
					for(var j = 0; j < len; j++){
						(function(j){
							dots.eq(j).on("click",function(){
								var $index = $(this).index();
								
								var dir = getDirection(preIndex,$index);
								changeItem(preIndex,$index,dir);
							});
						})(j);
					}
				}

				// 点击圆点的时候用这个方法来确定方向
				function getDirection(pre,cur){
					var dir = curDir;
					if(pre === cur)return dir;

					if(pre > cur){
						// <<<<<<===
						if(!(cur === 0 && pre === maxIndex)){
							dir = "left";
						}
					}else if(pre < cur){
						// ===>>>>>>
						if(!(cur === maxIndex && pre === 0)){
							dir = "right";
						}
					}

					return dir;
				}
			}
			
			// ------------------------------------

			function setStep(){
				if(settings.changeType === "single"){
					indexList = wraperWidthArr;
				}else if(settings.changeType === "page"){
					// wraperWidth
					for(var k = 0, sum = wraperWidthArr.length,tempW = 0,tempSumWidth = 0; k < sum; k++,tempW = 0){
						tempW = wraperWidthArr[k];
						tempSumWidth += tempW;
						if(tempSumWidth > wraperWidth){
							indexList.push(tempSumWidth - tempW);
							k--;
							tempSumWidth = 0;
							continue;
						}
					}
				}
			}

			
			// 自动切换的时候或者一次切换一页的时候用这个方法来确定下一个点的序号
			function nextIndex(dir){
				var next = 0;
				if(dir === "left"){
					if(preIndex === 0){
						next = itemSum - 1;
					}else{
						next = preIndex - 1;
					}
				}else{
					if(preIndex === itemSum - 1){
						next = 0;
					}else{
						next = preIndex + 1;
					}
				}
				return next;
			}

			function twoArrow(){
				function arrowDom(){
					var wrapArrow = $("<div id='wrap_arrow'></div>");
					var arrowLeft = $("<div type='left' class='arrow arrow_left'></div>");
					var arrowRight = $("<div type='right' class='arrow arrow_right'></div>");

					var leftIcon = $("<div class='arrow_icon icon_left'></div>").css(settings.leftArrowStyle);
					var rightIcon = $("<div class='arrow_icon icon_right'></div>").css(settings.rightArrowStyle);

					function styleObj(){
						return {
							width : "30px",
							height : wraperHeight + "px",
							position : "absolute",
							top : 0,
							opacity : 0.5,
							textAlign : "center"
						}	
					}

					var leftStyle = styleObj();
					leftStyle["left"] = "0";

					var rightStyle = styleObj();
					rightStyle["right"] = "0";

					arrowLeft.css(leftStyle).append(leftIcon);
					arrowRight.css(rightStyle).append(rightIcon);

					addEvent(arrowLeft);
					addEvent(arrowRight);

					wrapArrow.append(arrowLeft).append(arrowRight).css({
						width : wraperWidth + "px",
						height : wraperHeight + "px",
						position : "relative"
					});

					return wrapArrow;
				}

				function addEvent($ele){
					$ele.on("click",function(){
						var dir = $(this).attr("type");
						var next = nextIndex(dir);
						changeItem(preIndex,next,dir);
					});
				}

				function appendArrow(){
					var arrowAll = arrowDom();
					wraper.append(arrowAll);
				}
			}

			function autoChange(){
				//自动切换

			}

			// 切换，
			function changeItem(pre,cur,dir){
				console.log("切换图片");
				realWraper.stop().animate({
					left : indexList[cur] + "px"
				},settings.timeInterval,function(){
					// 圆点样式改变
					$(".photos-items-dot").hasClass('active').removeClass('active');
					$(".photos-items-dot").eq(preIndex).addClass('active');
					// 动画完成
					preIndex = cur;
					curDir = dir;
				});
			}
		}
	});
})(jQuery);