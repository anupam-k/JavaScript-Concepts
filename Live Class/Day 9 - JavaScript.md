## _Document Object Model(DOM)_
- It is possible to get,fetch,append,remove from HTML using Javascript
- DOM represents the page so that program can change the <b>Document</b>, <b>Structure</b>, <b>Style</b> and <b>Content.</b> 

<b>

```html
<html>
    <head>
      <meta />
      <title>DOM</title>
    </head>
    <body>
      <h1>Hello Javascript</h1>
      <p>Hello Hitesh Sir</p>
    </body>
</html>
```


![image](https://user-images.githubusercontent.com/91872149/190841007-32495ce1-8b4f-474a-a619-afb49b695fdc.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
</head>
<body>
  <h1>Hello Javascript</h1>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
  </ul>
    <script>
      // Root
      console.log(document);                 // window.document
      console.log(window.document);
      console.log(document.documentElement); // element inside document
      console.log(document.body.children);
      console.log(document.body.firstElementChild);
    </script>
</body>
</html>
```  
![image](https://user-images.githubusercontent.com/91872149/190841556-2c71a492-241a-4933-b533-2d51ee64c4a4.png)
- windows are attached as Global

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
</head>
<body>
  <h1 id="js">Hello Javascript</h1>
    <script>
      // getElementById - Finding the Element
      value = document.getElementById("js");                
      console.log(value);

      // value - gives the text along with tags
      value = document.getElementById("js").innerHTML;                
      console.log(value);

      // innerText - just gives the text
      value = document.getElementById("js").innerText;                
      console.log(value);
    </script>
</body>
</html>
```
![image](https://user-images.githubusercontent.com/91872149/190841973-4164c702-ec28-4c0e-af0d-799d55c35f14.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM</title>
  </head>
  <body>
    <h1>Hello Javascript</h1>
    <ul>
      <li class="tech">One</li>
      <li class="tech">Two</li>
      <li class="tech">Three</li>
    </ul>
    <script>
      let val = document.getElementsByTagName("h1");
      console.log(val);
    </script>
  </body>
</html>
```  
![image](https://user-images.githubusercontent.com/91872149/190842125-07f5cf9f-9254-48c7-a901-349224e4d7b5.png)

## _QuerySelector_ 
- First occurance of element in DOM list
- querySelector selects html element Id, classname, tagname

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM</title>
  </head>
  <body>
    <!-- getElementById, class, tagname => querySelector, all 3 are allowed-->
    <h1>Hello JavaScript</h1>
    <p>Html</p>
    <p class="cl1">CSS</p>
    <p id="id1">JS</p>
    <script>
      let value1 = document.querySelector("p"); //tagnme
      console.log(value1); //Html
      let value2 = document.querySelector(".cl1").innerText; //classname
      console.log(value2); // CSS
      let value3 = document.querySelector("#id1").innerText; //Id
      console.log(value3); //JS
    </script>
  </body>
</html>
```
## _querySelectorAll_
- All occurance of element in DOM list
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM</title>
  </head>
  <body>
    <h1>Hello JavaScript</h1>
    <p>Html</p>
    <p>CSS</p>
    <p>JS</p>
    <script>
      let value = document.querySelectorAll("p"); //tagnme
      console.log(value);
    </script>
  </body>
</html>
```
![image](https://user-images.githubusercontent.com/91872149/190842507-9ee7d60d-9f98-413e-9297-2da6ec3c81a0.png)

## _DOM works on 3 main things:_
- method
- sub object
- properties

## _Finding through JavaScript_
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM</title>
  </head>
  <body>
    <h1>Hello JavaScript</h1>
    <p>Hello</p>
    <p>Hi</p>
    <p>Hey</p>
    <!-- Finding: Id, Class, tagname, querSelector("")-->
    <!--Changing : innerHTML -->
    <script>
      let value = document.querySelectorAll("p");
      value[2].setAttribute("class", "js");
      console.log(value);
      // NodeList(3) [p, p, p.js]
      // 0: p
      // 1: p
      // 2: p.js
      // length: 3
      value[2].textContent = "Hello Hitesh Sir";
    </script>
  </body>
</html>
```
![image](https://user-images.githubusercontent.com/91872149/190843178-4d0e93b7-3013-4a3f-a9b0-2f68023bb426.png)

## _Adding/Appending through JavaScript_
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM</title>
  </head>
  <body>
    <ul></ul>

    <!--Adding -->
    <script>
      const list = `
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
        `;
      let ul = document.querySelector("ul");
      ul.innerHTML = list;
    </script>
  </body>
</html>
```
![image](https://user-images.githubusercontent.com/91872149/190843491-63d0984d-bb2d-4d30-a076-95021689febf.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM</title>
  </head>
  <body>
    <script>
      let title = document.createElement("h1");
      title.classname = "title";
      title.style.fontSize = "25px";
      title.textContent = "hello javascript";
      // console.log(title);
      document.body.appendChild(title);
    </script>
  </body>
</html>
```
![image](https://user-images.githubusercontent.com/91872149/190843899-3337ebab-c3f8-4e0a-9620-e494ebef803c.png)

## _Delete through JavaScript_
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM</title>
  </head>
  <body>
    <h1>Hello Javascript</h1>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
    <script>
      const ul = document.querySelector("ul");
      const lists = document.querySelectorAll("li");
      for (list of lists) {
        ul.removeChild(list);
      }
    </script>
  </body>
</html>
```

![image](https://user-images.githubusercontent.com/91872149/190844376-9c2b1ca0-13b1-4ee4-8db6-3807cb488005.png)

## _Event Listener_
- click
- dbclick
- mouseenter
- mouseover
- input
- change
- blur
- keypree
- keyup

Always takes two parameter
- name of event
- function

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM</title>
  </head>
  <body>
    <h1>Hello JavaScript</h1>
    <p id="js"></p>
    <script>
      document.addEventListener("click", hello);
      function hello() {
        document.getElementById("js").innerHTML = "IRONMAN";
      } // after clicking Ironman comes
    </script>
  </body>
</html>
```
_Before Click_
![image](https://user-images.githubusercontent.com/91872149/190844747-5b8c4fc0-deba-484e-a742-f1a42c46512c.png)
_After Click_
![image](https://user-images.githubusercontent.com/91872149/190844725-06f42608-dca3-46ae-b10d-d49a2795e12e.png)

</b>  

    
    
    

