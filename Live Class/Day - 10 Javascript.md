# _Types of  Pop-up_
- <b>Alert</b>
- <b>Confirmation Box</b> - to pass some sort of msg with output only in true or false
- <b>Prompt</b> - based on user input it behaves
<b>
  
```javascript
alert()
window.alert()
// both are same
```
> Note: it is not necessary that the pop-up will come at the top-center.
> Its completely dependedt on browser

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>More On Dom</title>
  </head>
  <body>
    <h1>Js Bootcamp</h1>
    <p id="js"></p>
    <button onclick="maths()" id="prompt">Submit</button>
    <script>
      // alert
       alert("Hole alert");
       window.alert();
       setTimeout(() => {
       alert("Hello");
       }, 1000);
     
      // Conformation Box
      let val = confirm("Are you sure ?");
      if (val) {
      document.getElementById("js").innerText = "He Pressed OK";
      } else {
      document.getElementById("js").innerText = "He Pressed Cancel";
      }
      
      // Prompt
      prompt("Enter Your Name", "Anupam");
      let value = prompt("Please solve 20 - 10", "0");
      if (value == 10) {
      document.getElementById("js").innerText = "Ticket Booked Successfully!";
      } else {
      document.getElementById("js").innerText = "Failed";
      }
      
      function maths() {
      let value = prompt("Please solve 20 - 10", "0");
      if (value == 10) {
          document.getElementById("js").innerText ="Ticket Booked Successfully!";
      } else {
          document.getElementById("js").innerText = "Failed";
      }
    }
    </script>
  </body>
</html>
```

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>More On Dom</title>
  </head>
  <body>
    <h1>Js Bootcamp</h1>
    <button onclick="hello()" id="js">Click me - Single Click</button>
    <button ondblclick="hello1()" id="js1">Click me - Double Click</button>
    <button onmouseenter="hello2()" id="js2">Click me - Mouse center</button>
  
    <script>
      function hello() {
        document.getElementById("js").style.backgroundColor = "Blue";
      }
      function hello1() {
        document.getElementById("js1").style.backgroundColor = "Red";
      }
      function hello2() {
        document.getElementById("js2").style.backgroundColor = "Green";
      }
    </script>
  </body>
</html>
```
![image](https://user-images.githubusercontent.com/91872149/190887438-05b1af41-9890-4506-aa69-cdfcbb609680.png)

![image](https://user-images.githubusercontent.com/91872149/190887430-cf803073-6c8b-4fa5-a895-87f1a0147fc6.png)

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>More On Dom</title>
  </head>
  <body>
    <h1>Js Bootcamp</h1>
    <p id="js"></p>
    <script>
      document.addEventListener("click", mouseClick);
      function mouseClick() {
        document.querySelector("#js").innerText = "Hello JS Bootcamp";
      }
    </script>
  </body>
</html>
```
```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>More On Dom</title>
  </head>
  <body>
    <h1>Js Bootcamp</h1>
    Enter Your Name:
    <input tyep="text" name="name" id="input" />
    <p id="js"></p>
    <script>
      document.addEventListener("input", input);
      function input() {
        var one = document.getElementById("input").value;
        document.getElementById("js").innerText = "You are writing: " + one;
      }
    </script>
  </body>
</html>
```
 ![image](https://user-images.githubusercontent.com/91872149/190887249-3561172a-b256-4d82-b23f-bdb1759c4ef5.png)

## _In case of Uppercase_
```javascript
document.addEventListener("input", input);
   function input() {
     var one = document.getElementById("input").value;
     document.getElementById("js").innerText =
     "You are writing: " + one.toUpperCase();
}
```
![image](https://user-images.githubusercontent.com/91872149/190887341-4d9e0b7e-1c7d-4e6e-bd52-9e2c62872572.png)


## _Random Number Generator(alpha numeric)_

</b>
