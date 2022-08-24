// Create an application with following roles:
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - get access to create/delete tests
// user - gets access to consume content

var user = "admin";

switch (user) {
  case "admin":
    console.log("You get full access");
    break;

  case "subadmin":
    console.log("You get access to create/delete courses");
    break;

  case "testprep":
    console.log("You get access to create/delete tests");
    break;

  case "user":
    console.log("You get access to content");
    break;

  default:
    console.log("Not registered User");
    break;
}

// Fall through
// if there is no break keyword and cases just running from start to end
