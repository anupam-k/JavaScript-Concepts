# _Prototype_

<b>
  
```javascript
let myHeros = ["thor", "spiderman"];

let heropower = {

  thor: "hammer",
  spiderman: "sling",
  
  getSpiderPower: function(){
      console.log('Spidy Power is ${this.spiderman`}');
  }
}

Object.prototype.hitesh = function(){
	console.log("This is Hitesh");
}


//heyArray -> Total element is 4
Array.prototype.heyArray = function() {
		console.log(`Total elements are ${this.length}`);
}
```
- Array has its own properties but it also inherits properties of object

</b>
