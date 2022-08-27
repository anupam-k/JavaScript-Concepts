## HomeWork
> Write an article on arrays in javascript(in-depth)
#iwritecode complete by 8'O clock today itself i.e.(27/8/2022)


# Loops
### For Loop
**Syntax**
> for(initialization ; condition ; increment/decrement)

**Q. Print from 0 to 5**
```javascript
for(let i=0;i<=5;i++){
   console.log(i); or console.log(`${i}`);
}

Output:
0
1
2
3
4
5
```

**Q. Square of 1 to 5**
```javascript
for(let i=0;i<=5;i++){
   console.log(`${i} * ${i} = ${i*i}`);
}
```

**Q. Store the con in newcon with Uppercase**
```javascript
let con= ["India","Sweden","Norway", "Iceland"];
let newcon = [];

for(let i=0;i<con.length;i++){
  newcon.push(con[i].toUpperCase());
}
console.log(newcon);
```

### While Loop
```javascript
let i = 0;
while(i % 2 == 0){
console.log(i);
i=i+1;
}
// TODO: while(i % 2 == 0)
```

### Do While Loop
```javascript
let i = 0;
do{
  console.log(i);
  i = i + 1;
}while(i<=5);
```

> Do whike loop will run for one time atleast

**Syntax**<br>
How to iterate over an array<br>
> for(let var of array)

```javascript
let num =[1,2,3,4,5];
for(let number of num){
  console.log(number);
}

Output:
1
2
3
4
5
```

```javascript
let con = ["India","Sweden","Norway", "Iceland"];
for(let cont of con){
  console.log(cont);//for whole array or console.log(cont[0]);//for first index
}

Output:
India
Sweden
Norway
Iceland
```

### Break and Continue

```javascript
Break

for(let i=1;i<5;i++){
  if(i==3){
  break;
  }
  console.log(i);
}

Output:
1
2

Continue

for(let i=1;i<5;i++){
  if(i==3){
  continue;
  }
  console.log(i);
}

Output:
1
2
4
5
```

# Functions
- Reusable code, clean code, 

**Syntax**
```javascript
//function definition
//function without parameter
function Squ(){
    //logic
}
Squ(); // function calling
```

```javascript
//Function Without Parameter
function Squ(){
   let x = 5;
   let sq = x*x;
      console.log(sq);
}
Squ();

Output:
25
```
```javascript
//Function with Parameter
function add(x){
console.log(x);
}
add(5);

Output:
5
```

``` javascript
function printfullname(firstname, lastname){
   let full_name = firstname + " " + lastname;
   return full_name;
}
let fn = printfullname("Anurag", "Tiwari");
console.log(fn);
console.log(printfullname("Anurag", "Tiwari"));

Output:
Anurag Tiwari
```

**Q. Area of Circle**
```javascript
function areaOfCircle(r){
let area = Math.PI*r*r;
return area;
}
console.log(areaOfCircle(10));

Output:
314.159263589793
```

## How to Handle Arrays
```javascript
function sumofArray(arr){
   let sum = 0;
   for(let i=0;i<arr.length;i++){
      sum = sum + arr[i];
   }
   return sum;
}
let numb = [1,2,3,4,5,6,7,8]

let holdvalue = sumofArray(numb);
console.log(holdvalue);
```

## Arrow Function (=>)
```javascript
let abc = () => {
console.log("hello Arrow");
}
abc();

Output:
hello Arrow
```
- store function inside variable abc
- () signifies function

```javascript
let twonumber = () => {
   console.log(x,y);
};

twonumber(25, 97);

Output:
25, 97
```

```javascript
let twonumber = () => {
   console.log("Holla");
};

twonumber();

Output:
Holla
```

```javascript
let twonumber = (x) => {
   console.log(x);
};

twonumber(1);

Output:
1
```

```javascript
const SumofAll = (...args) => {
   let sum = 0;
   for(let element of args){
      sum = sum + element;
   }
   return sum;
 };

console.log(SumofAll(1,2,3,4,5,6,7,8,9));

Output:
45
```

> Notes: self-envoking function, anonymous function
