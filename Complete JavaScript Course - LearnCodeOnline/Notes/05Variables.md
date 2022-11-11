## _How to name variables_
- **_fullName_** (✅ Preferred)
- **_full-name_** 
- **_full_name_** 
- **_FullName_** 

## _Notes_
- Starting variable with capital letter is not a good practice
- Stick to one naming convenstion

## _Data Types_
- **_Strings_**
- **_Numbers_**
- **_Boolean_**
- **_Undefined_**: If you don't store anything that's **_Undefined_**

## _Example_
<b>

```javascript
var fullName = "Anupam Kumar Krishnan";
```

</b>

- Here we have **declred** a **_variable_** named **_fullName_**
- It **_stores_** the name **_"Anupam Kumar Krishnan"_**
- Only **_String_** comes in **_Double Quotes_**

## _Example_

<b>

```javascript
var isLoggedIn = false;
```
</b>

- Here **isLoggedIn** is a **Boolean Value**
- In Javascript, **_false_** and **_False_** are two different things

## _Example_

<b>

```javascript
var loggedCount = 34;

console.log(loggedCount); //34
console.log("loggedCount"); //loggedCount
```
</b>

- Anything inside **"Double Quotes"** are treated as **_String_**

## _Example_

<b>

```javascript
var paymentMode;
console.log(paymentMode); //undefined

paymentMode = "Credit Card";
console.log(paymentMode); //Credit Card
```

</b>

- If nothing is assigned to a variable, it is called **_Undefined_**

## _Reserved Keywords_
- In JavaScript you cannot use these reserved words as variables, labels, or function names:


| abstract | arguments | await* | boolean |
| --- | -- | -- | --- |
| break |	byte |	case |	catch |
| char |	class* |	const |	continue |
| debugger |	default |	delete |	do |
| double |	else |	enum* |	eval |
| export* |	extends*|	false|	final|
| finally |	float |	for |	function |
| goto |	if |	implements |	import* |
| in |	instanceof |	int |	interface |
| let* |	long |	native |	new |
| null | 	package |	private |	protected |
| public | 	return |	short  |	static  |
| super* |	switch |	synchronized |	this |
| throw |	throws |	transient |	true |
| try |	typeof	 | var |	void |
| volatile |	while |	with |	yield |
