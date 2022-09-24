# _Javascript | Interview Questions_
- First name Of Js  - Mocha

- Launched year of JS - 1995

- JS was designed for frontend or backend 
   - initially was made for frontend later on the backend

- which kind of software do we use to run js - node js

- can I run the js program in the browser and where - yes, console.log

- how can I declare variables: let, var, const

- which introduced ES6: let and const

- Syntax of ES6: let and const

- What is a Variable: variable is like a container that stores values of different datatypes

- const: initialisation should be done on the spot at the time of declaration

- read hoisting in depth(Homework)

- Two broad category of data types: primitives and non-primitives(is also called object)

- diff between primitives and non-primitives:
  primitives: storing one single type of value
  non-primitives: storing multiple type of value

- _Data types under Primitive:_
  - Number
  - String 
  - Boolean
  - Null
  - Undefined

- diff between null and undefined
  [Read Here](https://www.geeksforgeeks.org/undefined-vs-null-in-javascript/#:~:text=Definition%3A,not%20exist%20in%20the%20compiler.)

- Data types under Non - Primitive:
  - Array
  - Object

- Math

const PI = Math.PI
console.log(PI);
//3.14

  - Everything comes from that Math

Number to get rounded
console.log(Math.roun(9.91));
// Error with spelling roun

console.log(Math.round(9.91));
// 10

console.log(Math.floor(9.91));
// 9

console.log(Math.min(9.91,8.5));
// 8.5 (need atleast 2 values two values to compare and more)

### _Imp math functions:_
- Math.round
- Math.floor
- Math.ceil
- Math.max
- Math.random
- Math.pow
- Math.sqrt

- in what range random produces from 0 to 0.99999

- Generate random num between 0 to 10

let randum = Math.floor(Math.random() * 10);
console.log(randum);

### _String_

let user = '' and  ""

let user = 'Anurag ';
let username = "Anurag";

console.log(user[4]);
// a

let user = 'Anurag ';
console.log(user.toUpperCase());
// ANURAG 

### _Imp string functions:_
 -  toUpperCase
 -  toLowerCase
 -  substr
 -  split
 -  includes
 -  replace
 -  charAt
 -  indexOf
 -  concat
 -  startWith
 -  endWith
 -  search
 -  match
 -  repeat
 -  length

length: property

## _Truthy Value and Falsy Value_

### _Anything which results in True is called Truthy Value_  
- All the numbers positive and negative
- All string except empty string

### _Anything which results in False is called Falsy Value_
- undefined, null, 0, empty string, NaN

## _Coercion in JavaScript:  Read About It_

## _Operators_
   - Assignment Operator(=)
   - Arithmetic Operator(+ , - , / , * , % , **)
   - Comparision Operator(==, > < , >= <= !=, ===)
   - Logical Operator(&&, ||)
   - Ternary Operator or Ternary Condition

## _Conditions_
   - if, if else, if else if else, switch, ternary
   

```
let user = "Hitesh_Sir";
switch(user) {
     case "Hitesh_Sir":
     	    console.log("Hitesh Sir");
          break;

     case "Anurag":
	  console.log("Anurag Tiwari");
          break;

	 default:
	 console.log("Hello World");
		   break;
}
```

	
## _Ternary_
<b>condition ? true event : false event</b>

```
let raining = true;
raining 
? console.log("It is Raining")
: console.log("It is not Raining")
			OR
raining ? console.log("It is Raining") : console.log("It is not Raining")
```
// It is Raining  

## _Loops_

### _For Loop_


```
for(ini; condition; increment/decrement)
```

<b>Can I declare variable inside for loop</b>
     - Yes, We can declare and at the same time we initialise also

### _Do while_
do while will execute the code atleast once and while will not

```
let i= 0;
while ( i <= 5) {
	console.log(i);
	i++;
}

// Output
// 0
// 1
// 2
// 3
// 4
// 5
```

```
let students = ["Shivam", "Noman", "Sudhip", "Akash","Anitha"];
console.log(students);

let UpperStud = [];

for(let i = 0; i< students.length; i++){
 	UpperStud.push(students[i].toUpperCase());
}
console.log(UpperStud);

// Output
['Shivam', 'Noman', 'Sudhip', 'Akash', 'Anitha']
['SHIVAM', 'NOMAN', 'SUDHIP', 'AKASH', 'ANITHA']

```

## _Imp for function_
- concat()
- indexOf()
- lastindexOf()
- includes()
- isArray()
- toString()
- join()
- pop()
- push()
- slice()
- splice()
- shift()
- unshift()
- splice()
- reverse()
- sort()
- log()

```
let names = {
 anurag: 97,
 Shubham: 98,
 HiteshSir: 100,
};

console.log(names.anurag);

// 97

let names = {
 anurag: 97,
 Shubham: 98,
 HiteshSir: 100,
 students: ["Stud1","Stud2", "Stud3"],
 username: function () {
return this.anurag;
 },
};

console.log(names.username());
console.log(names.students[1]);
// 97
// Stud2
```
 










 



