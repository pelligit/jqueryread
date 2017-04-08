class Car{
	constructor(name,year){
		this.name = name;
		this.year = year;
		// 这里定义对象的属性
	}

	getName(){
		console.log(this.name);
	}

	getYear(){
		console.log(this.year);
	}

	getTwoCar(){
		let color = "red";
		let length = 1.5;
		let sum = 2;
		let city = ["Beijing","Hongkong"];
		console.log(color,length,sum,city);
	}

}

class Bike extends Car{
	getName(val){
		if(val){
			console.log(val);
		}else{
			console.log(this.name);
		}
	}
}


function Car(name,year){
	this.name = name;
	this.year = year;
}

Car.prototype.getName = function(){
	console.log(this.name);
}

Car.prototype.getYear = function(){
	console.log(this.year);
}