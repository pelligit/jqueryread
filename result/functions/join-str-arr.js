function joinStrArr(arr){
	var paramsType = Object.prototype.toString.call(arr);
	if(paramsType !== '[object Array]'){
		return arr;
	}

	var str = '';
	arr.forEach(function(item,index,arr){
		if(typeof item === "string" || typeof item === "number"){
			str += item;
		}
	});
	return str;
}
