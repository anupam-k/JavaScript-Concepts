// TODO: falsy values
// undefined
// null : treated as false
// 0
// '' :Empty string
// NaN :Not a number

var user = "2";

if (2 === user) {
  console.log("Condition is true");
}
console.log(2 + 2); // 4
console.log(2 + "2"); // 22
console.log("2" + 2); // 22

// == normal comparison
// === comparision + data type check
