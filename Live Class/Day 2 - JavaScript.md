# JavaScript  Day 2

![java-script1](https://user-images.githubusercontent.com/91872149/185987492-e0e378ed-1338-4044-a6c1-b968394a0d27.jpg)


- always use const to declare array

## Slice

## Splice

## Concat

```jsx
let nam = [a,b,c,d,e]
let nam1 = [1,2,3,4,5,6]
let nam2 = [7,8,9,1]
console.log(nam.concat(nam1,nam2));
```

```jsx
[
a,b,c,d,e,

1,2,3,4,5,6,

7,8,9,1
]
```

## Includes

> Syntax: array.includes(values, index)
> 
- checking the number is at correct position with the index

### IndexOf

- gives the index

### Map

> Syntax: array.map(expression)
> 
- Applies to all the elements of arrays

```jsx
let asqr = [1,4,9,16];
console.log(asqr.map(math.sqrt));
```

### Reverse

```jsx
let asqr = [1,4,9,16];
console.log(asqr.reverse());
```

### Shift

> It will remove the first element
It modifies the original array
the first element is removed from the original array
> 

### Sort

> Sort the array in ascending order
> 

```jsx
let names = ["Hitesh Sir", "Anurag", "Anirudh", "Prasad", "Surya Sir", "Sairaj"];
console.log(names.sort());
```

```jsx
Output:
['Anirudh','Anurag','Hitesh Sir','Prasad', 'Sairaj', 'Surya Sir']
```

### toString

```jsx
console.log(names.toString());

Output:
Anirudh,Anurag,Hitesh Sir,Prasad,Sairaj,Surya Sir
```

### Unshift

> modify the original array
added at the starting of the array
> 

```jsx
console.log(names.unshift("Vlaue 1"));
[
'Vlaue 1',
'Anirudh',
'Anurag',
'Hitesh Sir',
'Prasad',
'Sairaj',
'Surya Sir'
]
```

### Split

> converts string to array
> 

```jsx
let str = "javascript";
let ar1 = str.split("");
console.log(arr1);

Output:
[
'j', 'a', 'v', 'a',
's', 'c', 'r', 'i',
'p', 't'
]
```

### Math

> It is built-in
> 

```jsx
const PI = Math.PI;
console.log(PI);

Output:
3.14592653589793
```

### Round

```jsx
const PI = Math.PI;
console.log(Math.round(PI);

3
```

### Floor

> Lowest value
> 

```jsx
const PI = Math.PI;
console.log(Math.floor(PI);

Output:
3
```

### Ceil

> Highest Value
> 

```jsx
const PI = Math.PI;
console.log(Math.ceil(PI);

Output: 
4
```

### Min

> Gives the minimum value
> 

```jsx
console.log(Math.min(89,23,45,67,98));
```

### Max

> Gives the maximum value
> 

```jsx
console.log(Math.min(89,23,45,67,98));
```

### Random

> range from 0 to 0.9999
> 

```jsx
let num =Math.random();
```

```jsx
Output:
0.22511313386080123
```

### Absolute

> gives positive number only
> 

```jsx
console.log(Math.abs(-10));
```

### Pow

```jsx
console.log(Math.pow(3,2));

9
```

### Trigonometry

```jsx
console.log(Math.cos(60))
```
