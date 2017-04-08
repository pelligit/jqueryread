let arr = [1,2,3,"array.js","hello-world.js"];

arr.forEach(function(item,index,arr){
	console.log(index,item);

	if(index == 4){
		console.log(arr);
	}
});