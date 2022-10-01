# _Prepare for Interview of JS_

<b>
1. What is the nature of Javascript?<br>
2. What are function scope and block scope?<br>
3. What is Synchronous and Asynchronous in Javascript?<br>
</b>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- future code will not run until current code is run<br><br>


<b>4. Is javascript is statically typed or dynamically typed language?</b><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- we can use typescript, which is a superset of javascript<br><br>


<b>5. What is Hoisting in Javascript?</b><br>
    &nbsp;&nbsp;&nbsp;&nbsp;- Hoisting is JavaScript's default behavior of moving declarations to the top.
    We can use or execute function and variables even before we initialise or declare i.e Hoisting<br><br>
 &nbsp;&nbsp;&nbsp;&nbsp;- In case of Variable it gives undefined if we log the variable before we have declared it.
  But in case of Function it works… as function declarations are scanned and made available to the entire code.<br><br>


<b>5. What is undeclared and undefined in Javascript?</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;- undeclare means it is not born and we are giving him responsibility and undefined is born but not given responsibility<br><br>


<b>6. What is 'this' in Javascript?</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;- “This” keyword refers to an object that is executing the current piece of code.<br><br>


<b>7. Difference between let, var and const?</b><br>
- the main difference between var, let, const is  their accessing environment.
- we can redeclare the var but not let and const in same scope
- And we also have to declare and define the const variable in same line.

| var | let | const |
| --- | --- | ---   |
| The scope of a var variable is functional scope. | The scope of a let variable is block scope. | The scope of a const variable is block scope. |
| It can be updated and re-declared into the scope. | It can be updated but cannot be re-declared into the scope. | It cannot be updated or re-declared into the scope.   |
| It can be declared without initialization | It can be declared without initialization. | It cannot be declared without initialization. |
| It can be accessed without initialization as its default value is “undefined”. | It cannot be accessed without initialization otherwise it will give ‘referenceError’. | It cannot be accessed without initialization, as it cannot be declared without initialization. |
| hoisting done , with initializing as ‘default’ value | Hoisting is done , but not initialized (this is the reason for error when we access the let variable before declaration/initialization | Hoisting is done, but not initialized (this is the reason for error when we access the const variable before declaration/initialization |

<b>8. What is DOM and Virtual DOM?</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;- it is an arrangement of node list<br><br>

<b>9. Explain Closure in Javascript</b><br>
- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).<br> 
- In other words, a closure gives you access to an outer function's scope from an inner function.<br>
- This phenomenon is called Lexical Scope<br><br>

<b>10. Explain Rest and Spread Operator</b>
<br>
<b>11. What are Promises in Javascript and how to use of promises in JS?</b>
<br>

Alternative name of ES6: <b>ECMAScript 2015</b>
