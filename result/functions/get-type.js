function getType(obj){
	var tempType, realType;

	if(arguments.length === 0){
		return 'null';
	}else{
		tempType = Object.prototype.toString.call(obj);//[object Array], [object Number], [object String]......
		realType = tempType.substring(8,tempType.length - 1);// Array, Number, String, Function
		return realType.toLowerCase();// array, number, string, function
	}
}