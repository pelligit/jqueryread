var arr = [1,2,3,"hello","world","hi"];

arr.forEach(function(value,index,arr){
	console.log(value,index,arr);
});

arr.map(function(value,index,arr){
	console.log(value,index,arr);
});

arr.some(function(value){
	return typeof value === "number";
});

arr.every(function(value){
	return typeof value === "string";
});

arr.filter(function(value){
	return typeof value === "string";
});

arr.indexOf("hello");
arr.lastIndexOf("nihao");

arr.reduce(function(previousValue,currentValue,currentIndex,arrObject){},startValue);
