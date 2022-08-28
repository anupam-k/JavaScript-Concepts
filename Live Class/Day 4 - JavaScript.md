## _Method in Object_

```javascript
let userDetailCourse = {
  firstName: "Anurag",
  lastName: "Tiwari",
  role: "Student",
  googlelogin: true,
  courseList: [],
  buyCourse: function (coursename) {
    this.courseList.push(coursename);
  },
  getcoursecount: function () {
    return `${this.courseList.length}`;
  },
};

console.log(userDetailCourse.firstName);
userDetailCourse.buyCourse("Pro Backend");
console.log(userDetailCourse.courseList);
userDetailCourse.buyCourse("React JS");
console.log(userDetailCourse.courseList);
console.log(userDetailCourse.getcoursecount);

//Keys
console.log(Object.keys(userDetailCourse));

//Values
console.log(Object.values(userDetailCourse));

//Checking Key
console.log(userDetailCourse.hasOwnProperty("firstName"))

Console Output:
Anurag
[ 'Pro Backend' ]
[ 'Pro Backend', 'React JS' ]
[Function: getcoursecount]
[
  'firstName',
  'lastName',
  'role',
  'googlelogin',
  'courseList',
  'buyCourse',
  'getcoursecount'
]
[
  'Anurag',
  'Tiwari',
  'Student',
  true,
  [ 'Pro Backend', 'React JS' ],
  [Function: buyCourse],
  [Function: getcoursecount]
]
true
```

## _For in Loop_
```javascript
let userDetails = {
  firstName: "Anurag",
  lastName: "Tiwari",
  role: "Admin",
  loginCount: 25,
};

for (let x in userDetails) {
  console.log(x);
}

Output:
firstName
lastName
role
loginCount

for (let x in userDetails) {
  console.log(`Key is ${x} and Value is ${userDetails[x]}`);
}

Output:
Key is firstName and Value is Anurag
Key is lastName and Value is Tiwari
Key is role and Value is Admin
Key is loginCount and Value is 25
```

## _Higher Order Function_
// Call back Function
```javascript
let isEven = (ele) => {
  return ele % 2 == 0;
};

let value = [2, 4, 6, 8].every(isEven);
console.log(value);

Output:
true
```

## _Set Time Out_
```javascript
function course() {
  console.log("Welcome to Full Stack Web Developer Bootcamp");
}

setTimeout(course, 3000);

setTimeout(() => {
  console.log("Welcome to Full Stack Web Developer Bootcamp");
}, 3000);

Output:
Welcome to Full Stack Web Developer Bootcamp
Welcome to Full Stack Web Developer Bootcamp
```

## _Set Interval_
```javascript
setInterval(() => {
  console.log("Hello ");
}, 3000);

Output:
//After 3000 sec
Hello
Hello
Hello
Hello
.
.
.

```

## _For Each_

```javascript
let arr=["Hey", "hi", "hello", "Hola", "Namaste"];
arr.forEach((val) => {
console.log(val);
});

Output:
Hey
hi
hello
Hola
Namaste
```

## _Map_
- It can iterate and modify
```javascript
let numbers = [1,2,3,4,5,6];
let store = numbers.map((num) => num * num);
console.log(store);

Output:
[ 1, 4, 9, 16, 25, 36]
```
```javascript
let names = ["hitesh Sir", "Surya Sir", "ANurag", "PrasaD"];
let store1 = names.map((names) => name.toUpperCase()); 
console.log(store1);

Output:
['HITESH SIR', 'SURYA SIR, 'ANURAG', 'PRASAD']
```

## _Filter_
- It will also iterate in array and return a new array
```javascript
let country = ["India", japan", "Kenya", "Ireland", "Canada", "Germanyan"];

let store = country.filter((country) => country.includes("an"));
console.log(store);

Output:
['japan', 'Canada', 'Germanyan']
```

## _Reduce_
```javascript
let numbers = [1,2,3,4,5,6,7];

// Syntax
// arrayName.reduce(acc,curr)=>{},value)
//acc -> monitor
//cu -> 1,2,3
let sum = numbers.reduce((acc, curr) => acc + curr, 2);
console.log(sum);

Output:
30
```
