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