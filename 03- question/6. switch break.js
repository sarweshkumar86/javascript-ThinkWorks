/*

Write a JavaScript program using switch to display floor information:

1 → Reception
2 → Office
3 → Meeting Room
4 → Cafeteria
Other → Invalid Floor



*/


// Variable
let floor = 3;

// Switch case
switch (floor) {
  case 1:
    console.log("Reception");
    break;

  case 2:
    console.log("Office");
    break;

  case 3:
    console.log("Meeting Room");
    break;

  case 4:
    console.log("Cafeteria");
    break;

  default:
    console.log("Invalid Floor");
}