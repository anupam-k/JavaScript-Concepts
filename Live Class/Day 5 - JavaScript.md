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
function sumtwo(..args){     // accumulating all the values and wrap in an array 
console.lof(args);           // [1, 2, 3, 4, 5 ] Array
  let sum = 0;
  for(let a of args){
  sum = sum + a;
  }
  return sum;
}

console.log(sumtwo(1,2,3,4,5));   // 15
```
