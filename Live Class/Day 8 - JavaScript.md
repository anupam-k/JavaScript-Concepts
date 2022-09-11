# _Prototype_

<b>
  
```javascript
let myHeros = ["thor", "spiderman"];

let heropower = {

  thor: "hammer",
  spiderman: "sling",
  
  getSpiderPower: function(){
      console.log('Spidy Power is ${this.spiderman`}');
  }
}

// Object Prototype
Object.prototype.hitesh = function(){
	console.log("This is Hitesh");
}

// Array Prototype
//heyArray -> Total element is 4
Array.prototype.heyArray = function() {
		console.log(`Total elements are ${this.length}`);
}

myHeros.hitesh()

```
- Array has its own properties but it also inherits properties of object

## _Inheritance_
```javascript
cont User  = {
	name: "top nname",
	email: "example@gmail.com"
}

const Teacher = { 
	makeVideos: true
}

const TeachingSuport = {
	isAvailable: false
}

const TSAssistant = {
	makeAssignment: "js assignment",
	fullTime: true,
	__proto__: TeachingSupport  // old code
}

Teacher.__proto__ = User
Teacher.prototype = User
Object.setPrototypeOf(Teacher, User); // preferred
Object.setPrototypeOf(TeachingSuport, Teacher);
```

## Challenge
```javascript
console.log("Hitesh".length);   // 6
console.log("Hitesh  ".length); // 8

// trueLength()
String.prototype.trueLength = function() {
    console.log(`true length is ${this.trim().length});
}

"Hitesh  ".trueLength();

```

# _Event Loop_
 - _based on event occurance it gets executed_
	
```javascript
const UserOne = () => {	
    console.log("Hello I am User One");	
}

const UserTwo = () => {
	setTimeout(() => {
      console.log("I am inside User Two");
	}, 2000);
	console.log("Hello I am User Two");
}
	
const UserThree = () => {
      console.log("Hello I am User Three");
}

UserOne();
UserTwo();
UserThree();
	
// Output
Hello I am User One
Hello I am User Two
Hello I am User Three
I am inside User Two
```	
</b>
