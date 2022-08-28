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


