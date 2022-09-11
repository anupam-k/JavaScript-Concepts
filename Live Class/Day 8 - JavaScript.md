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

Teacher.__proto__ = User
Teacher.prototype = User
Object.setPrototypeOf(Teacher, User); // preferred
```
</b>
