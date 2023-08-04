var first = 12.0; // number
console.log(first);
var identifier = " ";
// Or
// let identifier: string = ' ';
var empName = "Rohan";
var empDept = "IT";
// Before-ES6
var output1 = empName + " works in the " + empDept + " department.";
// After-ES6
var output2 = ""
  .concat(empName, " works in the ")
  .concat(empDept, " department.");
var isDone = false;
var unusable = undefined;
var tempNum = undefined;
//   tempNum = null;
//   tempNum = 123;      //Error
// let num: number = null;
// let bool: boolean = null;
// let str: string = null;
var val = "Hi";
val = 555; // OK
val = true; // OK
function ProcessData(x, y) {
  return x + y;
}
var result;
result = ProcessData("Hello ", "Any!"); //Hello Any!
console.log("result ", result);
result = ProcessData(2, 3); //5
console.log("result ", result);
