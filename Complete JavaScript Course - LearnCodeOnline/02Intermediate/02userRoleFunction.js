/*
Define a function that can answer the role of a user.
A user can be on folowing roles:
admin - with all access
subadmin - with access to creat/delete courses
testprep - with access to create/delete tests
user - consume all the content
other - trail user

Input: getUserRole(name, role)
*/

var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break;
    case "subadmin":
      return `${name} is subadmin access to creat/delete courses`;
      break;
    case "testprep":
      return `${name} is testprep access to create/delete tests`;
      break;
    case "user":
      return `${name} is user access to consume the content`;
      break;
    default:
      return `${name} is a trail user`;
      break;
  }
};

console.log(getUserRole("hitesh", "testprep"));

var getRole = getUserRole("sammy", "user");

console.log(getRole);

// when we are returning in the swtich cases then it's not necessary to write break
