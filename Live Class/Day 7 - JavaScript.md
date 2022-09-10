## _Class_

```javascript
class User {
    talk(){
    console.log("");
    }
}

let person1 = new User();
let person2 = new User();
```
<b>_Homework_</b>
- Naming convention
- Hoisting read from MDN Docs and check in the call stack using debugger

```javascript
class User {
  constructor(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  }
 }
let user1 = new User("Anurag","Tiwari"); 
console.log(user1);

//Output
User {firstName: 'Anurag', lastName: 'Tiwari'}
firstName: "Anurag"
lastName:"Tiwari"
```
- constructor is the first user who will get called

```javascript
class User {
  constructor(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  }
  getFullName(){
  const fullName = this.firstName+ " "+ this.lastName;
  return fullName;
 }
let user1 = new User("Anurag","Tiwari"); 
console.log(user1.getFullName;

//Output
Anurag Tiwari
```
![image](https://user-images.githubusercontent.com/91872149/189471813-e2bef284-e905-47f1-b34c-e54d6e66d382.png)

## getter and setter
