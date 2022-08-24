// Allow users to access the course if he is:
// logged in from email
// logged in from Google
// logged in fro Facebook

var email = false;
var facebook = false;
var google = true;

// if (email || facebook || google) {
//   console.log("Login Success!");
// } else {
//   console.log("Login Fails!");
// }

if (email) {
  console.log("Login Success!");
}

if (facebook) {
  console.log("Login Success!");
}

if (google) {
  console.log("Login Success!");
}
