"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            
            if ("value"in descriptor){
                descriptor.writable = true;
            }

            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function(Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Car = function() {
    function Car(name, year) {
        _classCallCheck(this, Car);

        this.name = name;
        this.year = year;
        // 这里定义对象的属性
    }

    _createClass(Car, [{
        key: "getName",
        value: function getName() {
            console.log(this.name);
        }
    }, {
        key: "getYear",
        value: function getYear() {
            console.log(this.year);
        }
    }, {
        key: "getTwoCar",
        value: function getTwoCar() {
            var color = "red";
            var length = 1.5;
            var sum = 2;
            var city = ["Beijing", "Hongkong"];
            console.log(color, length, sum, city);
        }
    }]);

    return Car;
}();

var Bike = function(_Car) {
    _inherits(Bike, _Car);

    function Bike() {
        _classCallCheck(this, Bike);

        return _possibleConstructorReturn(this, (Bike.__proto__ || Object.getPrototypeOf(Bike)).apply(this, arguments));
    }

    _createClass(Bike, [{
        key: "getName",
        value: function getName(val) {
            if (val) {
                console.log(val);
            } else {
                console.log(this.name);
            }
        }
    }]);

    return Bike;
}(Car);
