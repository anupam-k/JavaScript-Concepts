function sayHello(name) {
  console.log("Hello there, Anupam");
  console.log(`Hello there, ${name}. How are You?`);
}

sayHello("Hitesh");
sayHello("Sammy");

//sayHello();  when calling a function add parenthesis
// sayHello;   when refering to a function just write the name

function namaste() {
  return "Hello in India"; //returning not printing
}

var greetings = namaste();

console.log(greetings);
console.log(namaste());
