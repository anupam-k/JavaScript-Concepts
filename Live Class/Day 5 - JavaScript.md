## _Changing Datatype_
>  String is always stored in the database

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
