(function(window){
	// 获取值或者变量的类型
	function Type(obj){
		var typeStr = {}.toString.call(obj);
		var len = typeStr.length;
		return typeStr.substring(8,len - 1).toLowerCase();
	}

	function IsFunction(str){
		return function(obj){
			return Type(obj) === str;
		}
	}

	// 执行Tool()，会直接生成各种函数，挂载window上
	function Tool(){
		var arr = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol", "Null", "Undefined"];
		arr.forEach(function(item,index,arr){
			window["is" + item] = Type(window["is" + item]) === "function" ? window["is" + item] : IsFunction(item.toLowerCase());
		});
	}

	Tool();
})(window);
