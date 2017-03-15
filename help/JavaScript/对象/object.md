### JavaScript面向对象程序设计

**问题**

* 自定义构造函数的方法创建的对象，将来可以将实例标识为一种特定类型。什么意思？  

参考资料：《JavaScript高级程序设计》第六章--面向对象程序设计  

* OO
* OOA  
* OOD  
* OOP  

**一些常识**

* 所有的对象都继承自Object  
* 所有的对象都有constructor属性

### 创建对象最简单的方法  

```javascript
var person = new Object();
person.name = "Pelli";
person.age = 18;
person.github = "https://www.github.com/pelligit";
person.job = "F2E";
person.sayHi = function(){
    console.log("Hi,I am " + this.name + ", my job is a " + this.job);
}
```

上面那些是比较原始的写法，在很多年之前比较流行，现在的前端朋友们更喜欢使用对象字面量的方式来创建一个对象。上面的对象可以使用以下代码创建。  

```javascript
var person = {
    name : "Pelli",
    age : 18,
    github : "https://www.github.com/pelligit",
    job : "F2E",
    sayHi : function(){
        console.log("Hi,I am " + this.name + ", my job is a " + this.job);
    }
};

// Object.defineProperty();
```

### 工厂模式创建对象  

> 用函数来封装以特定接口创建对象的细节。  

```javascript
function createPerson(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayHi = function(){
        console.log("Hi, I am " + this.name + ", my job is " + this.job);
    }
    return o;
}

var person1 = createPerson("Pelli",18,"F2E");
var person2 = createPerson("沛笠",18,"FEE");
```

* 解决了创建多个相似对象的问题  
* 没有解决对象识别的问题（如何知道一个对象的类型）  

### 构造函数模式创建对象  

```javascript
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayHi = function(){
        console.log("Hi,I am " + this.name + ", my job is " + this.job);
    }
}

var person1 = new Person("Pelli",18,"F2E");
var person2 = new Person("沛笠",18,"FEE");

// 通过构造函数创建的对象都有一个constructor属性  
person1.constructor === Person;// true
person1.constructor === Person;// true
```

**特点**

* 没有显式创建对象  
* 直接将属性和方法赋给了this对象  
* 没有return语句  
* 函数名首字母大写。！按照惯例，构造函数始终都应该以一个大写字母开头。  
* 非构造函数则应该以一个小写字母开头。这个做法借鉴与其他OO语言，主要是为了区别构造函数和其他函数的不同。因为构造函数本身也是函数，只不过可以用来创建对象而已。  

**创建对象**

* 创建一个Person对象的实例，必须使用new操作符。通过new操作符调用构造函数，经历了以下步骤：

1. 创建一个新的对象  
2. 将构造函数的作用域赋给新对象（this指向了新对象） 
3. 执行构造函数的代码（添加属性等操作）
4. 返回新的对象  

>　创建自定义的构造函数意味着将来可以将它的实例标识为一种特定的类型。这正是构造函数模式胜过工厂模式的地方。

**缺点**

* 每个方法都要在每个实例上重新创建一遍。比如上面实例的sayHi方法
* `person1.sayHi === person2.sayHi;//false`  

### 改进的构造函数模式

```javascript
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayHi = sayHi;
}

function sayHi(){
    console.log("Hi,I am" + this.name + ", my job is " + this.job);
}

var person1 = new Person("Pelli",18,"F2E");
var person2 = new Person("沛笠",18,"FEE");
```

在这个例子中，我们将构造函数中的方法指向了全局函数sayHi,这样就使创建的两个实例person1和person2共用了一个方法，从而是每次创建实例的时候不用都创建新的做同样事情的方法。

**缺点**

* 全局中创建的函数只能被某个特定的对象使用，这让全局函数有点名不副实。  
* 如果该对象有很多方法，这样就会在全局作用域中创建很多这样的全局函数。这样就没有封装性可言了。要知道面向对象编程的要点之一就是封装性。  

### 原型模式创建对象

```javascript
function Person(name,age,job){
    this.name = name;
    this.age = age || 18;
    this.job = job || "worker";
}

Person.prototype.sayHi = function(){
    console.log("Hi,I am " + this.name + ", my job is " + this.job);
};

var person1 = new Person("Pelli",18,"F2E");
person1.sayHi();
```

**原型模式的缺点**

原型模式最大的问题是其共享本质导致的。  

原型中的所有属性都是被很多实例共享的，这种共享对于函数非常合适。对于那些包含基本值的属性倒也说的过去。然而对于包含引用类型值的苏醒来说，问题就比较突出。  

```javascript
function Person(){}
Person.prototype = {
    constructor : Person,
    name : "Pelli",
    age : 18,
    job : "F2E",
    friends : ['John','Bob'],
    sayHi : function(){
        console.log("Hi,I am " + this.name + ", my job is " + this.job);
    }
}

var person1 = new Person();
var person2 = new Person();

console.log(person1.friends);
console.log(person2.friends);

// 本意只是修改实例person1中的friends属性值，结果实例person2中的friends属性值也改变了。
person1.friends.push('Jerry');

console.log(person1.friends);// ['John','Bob','Jerry']
console.log(person2.friends);// ['John','Bob','Jerry']
console.log(person1.friends === person2.friends);// true
```

> 原型模式主要的问题就是各个实例之间共享的引用类型的值的时候，其中一个实例做了更改，其他的实例也都跟着变化了。通常情况下，这不是我们想要的结果。  

### 组合使用原型模式和构造函数模式

```javascript
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['John','Bob'];
}

Person.prototype = {
    constructor : Person,
    sayName : function(){
        console.log(this.name);
    }
}

var person1 = new Person("Pelli",18,"F2E");
var person2 = new Person("沛笠",18,"FEE");
```

原型模式和构造函数模式结合的话，就不会出现前面的问题。

```javascript
console.log(person1.friends);// ["John", "Bob"]
console.log(person2.friends);// ["John", "Bob"]
person1.friends.push('Jerry');
console.log(person1.friends);// ["John", "Bob", "Jerry"]
console.log(person2.friends);// ["John", "Bob"]
console.log(person1.friends === person2.friends);// false
```

就目前来说，原型模式和构造函数模式是前端使用最广泛的一种创建对象的方式。  

### 动态原型模式  


