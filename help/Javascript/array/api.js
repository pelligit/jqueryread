// es3
// 属性
// constructor:返回创建对象的原型函数
// length：设置或者返回数组元素的个数
// prototype：允许你想数组对象添加属性或者方法
// 方法
// concat()：连接两个或者更多的数组，并返回结果
// copyWithin()：从数组指定位置拷贝元素到数组的另一个指定位置中
// every()：检测数值元素的每个元素是否都符合条件
// fill()：使用一个固定值来填充数组
// filter()：检测数值元素，并返回符合条件所有元素的数组
// find()
// findIndex()
// forEach()
// indexOf()
// join()
// lastIndexOf()
// map()
// pop()
// push()
// reduce()
// reduceRight()
// reverse()
// shift()
// slice()
// some()
// sort()
// splice()
// toString()
// unshift()
// valueOf()

// es5
// es6



// Array 对象

// Array 对象用于在变量中存储多个值:

// var cars = ["Saab", "Volvo", "BMW"];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 数组属性

//    属性                   描述
// constructor 返回创建数组对象的原型函数。
// length      设置或返回数组元素的个数。
// prototype   允许你向数组对象添加属性或方法。

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Array 对象属性

//     方法                                          描述
// concat()      连接两个或更多的数组，并返回结果。
// copyWithin()  从数组的指定位置拷贝元素到数组的另一个指定位置中。
// every()       检测数值元素的每个元素是否都符合条件。
// fill()        使用一个固定值来填充数组。
// filter()      检测数值元素，并返回符合条件所有元素的数组。
// find()        返回符合传入测试（函数）条件的数组元素。
// findIndex()   返回符合传入测试（函数）条件的数组元素索引。
// forEach()     数组每个元素都执行一次回调函数。
// indexOf()     搜索数组中的元素，并返回它所在的位置。
// join()        把数组的所有元素放入一个字符串。
// lastIndexOf() 返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
// map()         通过指定函数处理数组的每个元素，并返回处理后的数组。
// pop()         删除数组的最后一个元素并返回删除的元素。
// push()        向数组的末尾添加一个或更多元素，并返回新的长度。
// reduce()      将数组元素计算为一个值（从左到右）。
// reduceRight() 将数组元素计算为一个值（从右到左）。
// reverse()     反转数组的元素顺序。
// shift()       删除并返回数组的第一个元素。
// slice()       选取数组的的一部分，并返回一个新数组。
// some()        检测数组元素中是否有元素符合指定条件。
// sort()        对数组的元素进行排序。
// splice()      从数组中添加或删除元素。
// toString()    把数组转换为字符串，并返回结果。
// unshift()     向数组的开头添加一个或更多元素，并返回新的长度。
// valueOf()     返回数组对象的原始值。

// es5
// forEach
// filter
// map
// reduce
// reduceRight
// some
// every
// 返回序号
// indexOf
// lastIndexOf

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

arr.indexOf("hello");//3
arr.indexOf("Pelli");//-1
arr.lastIndexOf("nihao");//-1
arr.lastIndexOf(2);//4

arr.reduce(function(previousValue,currentValue,currentIndex,arrObject){
	// 累加
},startValue);
// 如果传递了startValue，则以startValue为第一个值进行累加并对数组中的每一个元素进行操作（调用回调函数）
// 如果没有传递startValue，则以数组中第一个元素为值进行累加，并从第二个元素开始进行操作（调用回调函数）