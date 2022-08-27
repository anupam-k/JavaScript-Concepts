## HomeWork
> Write an article on arrays in javascript(in-depth)
#iwritecode complete by 8'O clock today itself i.e.(27/8/2022)


## Loops
### For Loop
**Syntax**
> for(initialization ; condition ; increment/decrement)

**Q. Print from 0 to 5**
```
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
```
for(let i=0;i<=5;i++){
   console.log(`${i} * ${i} = ${i*i}`);
}
```

**Q. Store the con in newcon with Uppercase**
```
let con= ["India","Sweden","Norway", "Iceland"];
let newcon = [];

for(let i=0;i<con.length;i++){
  newcon.push(con[i].toUpperCase());
}
console.log(newcon);
```

### While Loop
```
let i = 0;
while(i % 2 == 0){
console.log(i);
i=i+1;
}
// TODO: while(i % 2 == 0)
```

### Do While Loop
```
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

```
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

```
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

```
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
