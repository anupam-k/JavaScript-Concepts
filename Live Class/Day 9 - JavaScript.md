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

</b>  
    
    
    

