// 是否是一个类数组对象
function isArrayLike( obj ) {
    // 如果参数值有length属性的话，则length的值等于obj的length
    // 数组一定会有length属性，
    // 字符串也有length，但是无法通过“in”操作符读取
    // 函数的length的值是函数形参的个数
    // 对象可以自定义length属性，比如jQuery对象，默认的length属性值是0

    // 所以这里的length值要么是数字，要么是false
    var length = !!obj && "length" in obj && obj.length,

    // 获取参数的类型
        type = jQuery.type( obj );

    // 如果是函数或者窗口对象，则返回false
    if ( type === "function" || jQuery.isWindow( obj ) ) {
        return false;
    }

    return type === "array" || length === 0 ||
        typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}