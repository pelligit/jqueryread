define(["./hello","./hi","./jquery","./underscore"],function(hello,hi,$,_){
	console.log(hello);
	console.warn(hi);
	console.error($);
	console.info(_);
	var test1 = function(){
		return function(){
			console.log("hello, I am Pelli,what about you");
		}
	}

	function nihao(){
		var name = "Pelli";
		var age = 18;
		var tell = function(){
			return name;
		}

		var run = function(){
			console.log("let's run!");
		}

		run();

		tell();
	}

	var okk = test1();

	nihao();

	okk();
});