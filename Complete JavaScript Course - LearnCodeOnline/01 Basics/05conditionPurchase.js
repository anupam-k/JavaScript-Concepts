// User is only allowed to make a purchase when he is
// logged in
// email verified
// cardInfo - valid
// If any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = false;
var isCardInfo = true;

/*
if (isLoggedIn) {
  console.log("Logged IN Successfully");
  if (isEmailVerified) {
    console.log("Email is verified");
    if (isCardInfo) {
      console.log("You can make a purchase");
    }
  }
}
*/

if (isLoggedIn && isEmailVerified && isCardInfo) {
  console.log("You can make a purchase");
} else {
  console.log("Not allowed to make a purchase");
}
