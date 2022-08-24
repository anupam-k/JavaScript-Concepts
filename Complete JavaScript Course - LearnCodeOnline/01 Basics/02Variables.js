const uid = "abc123";

var fullName = "Anupam Kumar Krishnan";
var firstName = "Anupam";
var lastName = "Kumar Krishnan";
var email = "anupamk.krishnan@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var country = "India";
var state = "Bihar";
var courseCount = 0;
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = false;

console.log("Full name is: " + fullName);

console.log(`
 With Unique ID: ${uid}
 User is: ${fullName}
 First Name is: ${firstName}
 Last Name is: ${lastName}
 Email is: ${email}
 Country is: ${country}
 State is: ${state}
 Course Count: ${courseCount}
 Logged In From Google: ${isLoggedInFromGoogle}
 Logged In From Facebook: ${isLoggedInFromFacebook}
 `);
