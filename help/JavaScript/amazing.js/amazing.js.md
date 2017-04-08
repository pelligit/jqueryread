### 将以下代码在控制台执行

> 下面每段代码中的console.log输出的是什么？

```javascript
var myName = ("Pelli","沛笠");
console.log(myName);// 沛笠
```

```javascript
var myName = 5 > 4 ? "Pelli" : "沛笠";
console.log(myName);// Pelli
```

```javascript
var myName = "Pelli" || "沛笠";
console.log(myName);// Pelli
```

```javascript
var myName = "Pelli" && "沛笠";
console.log(myName);// 沛笠
```

```javascript
var myName = "Pelli" === "沛笠";
console.log(myName);// false
```

```javascript
var myName = "Pelli";

```

```javascript
var myName = "Pelli";
var meName = myName = "沛笠";
console.log(myName,meName);// 沛笠 沛笠
```

```javascript
function getName(name){
    return name;
}

var myName = getName("Pelli");
console.log(myName);// pelli
```

```javascript
function getName(name){
    return name;
}

var meName = getName(("沛笠","Pelli"));
console.log(meName);// pelli
```

```javascript
var myName = getName("Pelli");
console.log(myName);
function getName(name){
    return name;
}
```

```javascript
var myName = getName("Pelli");// Uncaught TypeError:getName is not a function
console.log(myName);
var getName = function(name){
    return name;
}
```

```javascript
var myName = getName("Pelli");//undefined
console.log(myName);
function getName(name){}
```

```javascript
var myName = getName("Pelli","沛笠");
console.log(myName);
function getName(){
    return arguments[1];
}
```

```javascript
var myName = "沛笠";
setTimeout(function(){
    myName = "Pelli";
},0);
myName = "Joke";
console.log(myName);
```

```javascript

```

---

```javascript
var test = 0.1 + 0.2 === 0.3;
console.log(test);// false

var test = 0.1 + 0.2 == 0.3;
console.log(test);// false
```

---

## amazing.js

```javascript
var a = [] + [];// ""
```

```javascript
var b0 = {} + {};//[object Object][object Object]
var b1 = {} + {} + {};
```

```
+
-
*
/
=
===
:
""
''
~
||
&&
|
&
%
^
()
[]
{}
<
>


```
