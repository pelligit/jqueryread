// 这个模块可用于应用的单元测试，通过 require('assert') 可以使用这个模块。

// assert.fail(actual, expected, message, operator)
// 使用参数 operator 测试参数 actual (实际值) 和 expected （期望值）是否相等。

// assert(value[, message]), assert.ok(value[, message])
// 测试参数 value 是否为 true,此函数和 assert.equal(true, !!value, message); 等价。

// assert.equal(actual, expected[, message])
// 判断实际值 actual 和期望值 expected 是否相等。

// assert.notEqual(actual, expected[, message])
// 判断实际值 actual 和期望值 expected 是否不等。

// assert.deepEqual(actual, expected[, message])
// 执行深度比较，判断实际值 actual 和期望值 expected 是否相等。

// assert.notDeepEqual(actual, expected[, message])
// 深度比较两个参数是否不相等。

// assert.strictEqual(actual, expected[, message])
// 深度比较两个参数是否相等。

// assert.notStrictEqual(actual, expected[, message])
// 此函数使用操作符 ‘!==’ 严格比较是否两参数不相等。

// assert.throws(block[, error][, message])

let assert = require("assert");

for(var name in assert){
	console.log(name);
}

// AssertionError
// fail
// ok
// equal
// notEqual
// deepEqual
// deepStrictEqual
// notDeepEqual
// notDeepStrictEqual
// strictEqual
// notStrictEqual
// throws
// doesNotThrow
// ifError
console.log("--------------");
console.log(assert.AssertionError);
console.log(assert.fail);
console.log(assert.ok);