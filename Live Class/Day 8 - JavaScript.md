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

## _Challenge_
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
## _Promise(Callback, Promise con, async await)_
- pending
- fullfilled (resolve)
- reject (reject)
	
```javascript
const MakePromise = new Promise((resolve,reject) => {
   setTimeOut(() => {
   const arrOne = ["userOne", "userTwo","userThree"];
   if(arrOne.length > 0) {
      resolve("User Found");
   } else {
      reject("No Found");
   }
  }, 2500);
});

// MakePromise.then().catch();
// console.log(MakePromise.then());	
	
MakePromise.then((result) => {
   console.log(result);
}).catch((result) =>{
   console.log(result);
});
	
	
// Output
User Found
```
# _Async and Await_

```javascript
const UserOne = () => {
	return "I am UserOne";
};
const UserTwo = () => {
	return new Promise((resolve,reject0 => {
	setTimeOut(() => {
		resolve("User Found");
	}, 1500);
  });
};
const UserThree = () => {
	return "I am UserThree";
};
	
const Wait = async() => {
  let GuestOne = UserOne();
  console.log(GuestOne);
	
  let GuestTwo = await UserTwo();
  console.log(GuestTwo);
	
  let GuestThree = UserThree();
  console.log(GuestThree);
};
	
Wait();

// Output without async
I am UserOne
Promise { <pending> }
I am UserThree
	
// Output with async
I am UserOne
User Found
I am UserThree
```
</b>
