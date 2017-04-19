var arr = [1,2,3,"hello","world","hi"];

// 遍历
arr.forEach(function(value,index,arr){});

// 遍历
arr.map(function(value,index,arr){});

// 如果有一个符合条件则返回true
arr.some(function(value){});

// 只有所有的元素都符合条件返回true
arr.every(function(value){});

// 过滤，返回符合条件元素的数组
arr.filter(function(value){});

// 返回第一个符合条件元素的序号
arr.indexOf("hello");

// 返回最后一个符合条件的元素序号
arr.lastIndexOf("nihao");

// 累加器
arr.reduce(R,0);

arr.reduceRight(R,0);

/**
* pv:previousValue,之前的值
* CV:currentValue，当前值
* CI:currentIndex，当前序号
* AO:arrObject，数组
*/
function R(PV,CV,CI,AO){}








