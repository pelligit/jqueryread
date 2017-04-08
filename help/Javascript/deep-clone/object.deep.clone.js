var myInfo = {
	name : "Pelli",
	age : 18,
	country : "China",
	language : "mandarin",
	city : "Peking",
	hobby : "write bug",
	tell : function(){
		console.log("hello world");
	},
	season : ["spring","summer","autumn","winter"],
	empty1 : null,
	empty2 : undefined,
	empty3 : 0,
	empty4 : "",
	str1 : "hello world",
	str2 : (new String("hi baby")),
	no1 : 123,
	no2 : (new String(9999)),
	no3 : NaN,
	no4 : (new Array(3,4))
}


!!{};//true

function deepClone(obj){
	var tempObj = {}
	if(!!obj && typeof obj === "object"){
		// object
		for(key in obj){
			tempObj[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
		}
	}

	return tempObj;
}

// 满足大部分的需求,但是当属性值有函数的时候，这里就不行了。
// JSON规范中，数据类型只有基本值，数组，对象等，没有函数这种类型。
function deepClone(obj){
	if(!!obj && typeof obj === "object"){
		return JSON.parse(JSON.stringify(obj));
	}
}


// 最简单的深拷贝，拿好：

// b = JSON.parse( JSON.stringify(a) )

// 相互引用


var obj0 = {
	color : "red",
	type : "good man",
	phone : "motolola"
	others : obj0,//undefined
}

var obj1 = {
	color : "red",
	type : "good man",
	phone : "motolola"
}

var obj2 = {
	fun : "hah, zheg zhende hao ma"
}

obj1.other = obj2;
obj2.other = obj1;




// ------------------------------------
function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        var prop = initalObj[i];
  
        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
        if(prop === obj) {
            continue;
        }
  
        if (typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? [] : {};
            arguments.callee(prop, obj[i]);
        } else {
            obj[i] = prop;
        }
    }
    return obj;
}
// ----------------------------------------



// ------------------------------------------------
function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        var prop = initalObj[i];
  
        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
        if(prop === obj) {
            continue;
        }
  
        if (typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
        } else {
            obj[i] = prop;
        }
    }
    return obj;
}

// ---------------------------------------------------
// 如果有一个元素是数组，并且数组中某一个元素的值是一个对象的话?
// 这种情况没问题：数组中的对象不再是原来的对象了
var temp = {
	phone : "white",
	book : "z.cc"
};

var arr = ["Pelli","red","nice","computer",temp];

var obj1 = {
	name : "Pelli",
	contry : "China",
	city : "Beijing",
	hello : arr,
	ok : "ok"
};

var obj2 = {
	hi : "hi",
	hello : arr
}

