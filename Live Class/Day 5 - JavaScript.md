## _Changing Datatype_
>  _String is always stored in the database_

### _String To Number_

_**Code**_
```javascript
let fakenum = "25";

let orgNum = Number(fakenum);
console.log(typeof orgNum);
console.log(typeof fakenum);
```
_**Output**_
```javascript
number
string
```
<br>

_**Code**_
```javascript
let newnum = 25;
let strnum =  String(newnum);
console.log(typeof strnum);
```
_**Output**_
```
string
```

## _Destructuring and Spread_
```javascript
let scivalue = [2.72, 3.14, 9.81, 37, 100];
let e,
    pi,
    gravity,
    bodytemp,
    boil = scivalue;
    
console.log(e); // undefined
    
let [e,pi,gravity,bodytemp,boil] = scivalue;
console.log(e);      // 2.72
```

```javascript
let arrayone = [1,2,3,4,5];
let [a,b,c,d,e] = arrayone;
console.log(c);

3  // output
```
```javascript
let fullstack = [
    ["html","css","js","tailwind"],["nodejs","express", "mongodb"]
];

let [frontend, backend] = fullstack;

console.log(frontend);  // [' html ',' css ',' js ',' tailwind ']
```
```javascript
let arrayone = [1,2,3,4,5];
let [a, ,b, ,c] = arrayone;
console.log(c);   // 5
```
```javascript
let arrayone = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [a,b, ...rest] = arrayone;
console.log(a,b);  // 1 2
console.log(rest); // [3, 4, 5, 6, 7, 8, 9]
```

## _Spread and Rest_
### _Spread_
```javascript
funtion sum(x, y) {
  return x + y;
}

let vari = [5, 7];
console.log(sum(vari)); // 5,7undefined
// It is not able to evaluate array

console.log(sum(...vari));  //This is called Spread Operator   // 12 
```

### _Rest_
```javascript
function sumtwo(...args){    // accumulating all the values and wrap in an array 
console.log(args);           // [1, 2, 3, 4, 5 ] Array
  let sum = 0;
  for(let a of args){
  sum = sum + a;
  }
  return sum;
}

console.log(sumtwo(1,2,3,4,5));   // 15
```

## _New_
> new is a keyword

```javascript
let person = {
name: "Anurag",
};
console.log(person);         // { name: 'anurag' }
```

```javascript
let person = new Object();
person.name = "Anurag";
console.log(person);        // { name: 'anurag' }
```

## _Registering on LCO_
```javascript
var person = function(firstname, coursecount){
    this.firstname = firstname;
    this.coursecount = coursecount;
};

var anurag = new person("Anurag", 7);
console.log(anurag);
var anirudh = new person("Anirudh", 5);
console.log(anirudh);

// Output
person { firstname: 'Anurag', coursecount: 7 }
person { firstname: 'Anirudh', coursecount: 5 }

//memory allocation for all the users getting registered at LCO
```

## _Set and Map_
> Set - > Set only contains unique elements
```javascript
let a = [1, 2, 3, 1, 2, 3, 4, 3, 2, 4, 1, 2, 4, 1, 12, 3, 4];

let num = new Set();
console.log(num);       // Set(0) {}

let num1 = new Set(a);
console.log(num1);      // Set(5) {1, 2, 3, 4, 5}

for(let i of num1){     // 1
    console.log(i);     // 2
}                       // 3
                        // 4
                        // 12
//delete, has function
num.delete(12);
console.log(num.has(7));
```

## _Maps_
> Key can be of any data type

// getter and setter

```javascript
let newmap = new Map();
console.log(newmap);
newmap.set("1", "one");
newmap.set(1, "one");
newmap.set(true, "one");
// Map(3) { '1' => 'one', 1 => 'ome', true => 'one' }

// {1:"one"} // object
// {1,2,3,4,5} //set
// {'1' => 'one', 1 => 'one', true => one' } //map
```

```javascript
let city = [
["India", "Delhi"],
["Gujrat", "Surat"],
["Raj","jaipur"],
];

let newmap = new Map(city);
console.log(newmap);
console.log(newmap.get("India"));

// Map { 'India' => 'Delhi', 'Gujrat' => 'Surat', 'Raj' => 'jaipur' }
// Delhi

for(let key of newmap){
    console.log(key);
}

// [ 'India', 'Delhi' ]
// [ 'Gujrat', 'Surat' ]
// [ 'Raj', 'jaipur' ]

// differnece bwtween foreach and for of
```

## _Closure_

>  When inner function access the values/variables of outer function, they are called as **Closure**

```javascript
function outer(){
    let variable = "Seven";
    function inner() {
        console.log(variable);
     }
    inner();
}
outer();

// Output
// Seven
```

# _Scope_
> Anything written inside a curly bracket is scope
> Scope: Where to look for things
> Q. What it is that we are looking for


```javascript
{
let x = 3;
}
console.log(x);  //  x is not defined as x is ina block of scope
```

```javascript
if(){
let x = 4;
console.log(x)
}
```

## _Lexical Scope_

## _Dynamic Scope_
> no use in javascript

## _Scope Chaning_

# <b>📍Note Important:</b>
  - Javascript is a Synchornous Single Threaded Language<br>
  - In Javascript everything happen inside an Execution Context

As soon as you run a javascript program, an execution context is created:
```javascript
var a = 10;
var b = 25;
var c = 30;

function sum(){
var a = 10;
var b = 20;
console.log(a+b);
}
sum();
```

![image](https://user-images.githubusercontent.com/91872149/188261850-8ae4e063-bab2-4947-bac1-61db4f0e2f69.png)

TO DO ✅
- Read Closure Properly
- Global Execution context
