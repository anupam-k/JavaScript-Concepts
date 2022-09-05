## _Error Handling_ or _Exception Handling_

<b>Syntax</b>
```javascript
  try{
  
   }catch(variable){
   
   }
   finally{
   
   }
```
> variable - it will catch the error thrown by try block

 - <b>try:</b> wrap up the code which can throw the error
 - <b>catch:</b> write the code to do something when error occurs
 - <b>finally:</b> it will always execute

```javascript
  try{ 
  let firstname = "Anurag";
  console.log(firstname + " " + lastname);
  } catch(err){
  console.log(err);
  console.log(err.name);
  console.log(err.message);
  } finally{
  console.log("Important Operation");
  }
  console.log("Hello World");
  
  //Output try got error and catch block prints the error
  Refrence error
  Lastname is not defined
  Important Operation    // as finally will always execute
  Hello World
  ```
  
  ## _Throw_ : Homework: How throws work
```javascript
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw 'Parameter is not a number!';
  }
}

try {
  getRectArea(3, 'A');
} catch (e) {
  console.error(e);
}
```
**Output**
> Parameter is not a number!

  ## _Types of error in JS:_
  - <b>Refernce Error</b>
  - <b>Syntax Error</b>
  - <b>Typerror</b>
  
  
  ## _Scope_ : _Where to look for things_
  >  Q. What is that we are looking for

  ## Javascript is a synchronous Single Threaded Languagge
  
  ```javascript
  var count = 10;
  var name = "iNeuron";
  function abc(){
    console.log("hello world");
  }
  abc();
  ```
 ![image](https://user-images.githubusercontent.com/91872149/188298744-2a594fe6-9073-4745-91bf-c223dc913d72.png)
 ![image](https://user-images.githubusercontent.com/91872149/188298856-530ce1d4-e418-4d78-a589-11b8f5f5e8e1.png)

### _Run the code in console and see Call Stack and Scope and record for understanding purpose_

```javascript
var count = 10;
var countTwo = 07;
function fullName(){
  var fname = "Anurag";
  var lname = "Tiwari";
  console.log(fname,lname);
}
fullName();
 ```
