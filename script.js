// //complete this code
class Person {
	constructor(name, age){
		this._name=name,
		this._age=age
	}
	get name(){
		return this._name;
	}
	set age(a){
		this._age=a;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	study(){
		console.log(`${this._name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age)
	}
	teach(){
		console.log(`${this._name} is teaching`)
	}
}

window.Person=Person;
window.Student=Student
window.Teacher=Teacher



