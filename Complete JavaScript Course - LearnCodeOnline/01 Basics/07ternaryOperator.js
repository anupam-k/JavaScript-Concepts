// Show user a signout button if he is authenticated
// otherwise show him option to Login/Signup

var authenticated = false;

// if (authenticated) {
//   console.log("Show signout button");
// } else {
//   console.log("Show login option");
// }
authenticated
  ? console.log("Show Signout button")
  : console.log("Show Login Option");
