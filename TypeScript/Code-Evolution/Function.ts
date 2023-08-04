// Default Function
function defaultFunction() {
  return "sdfhhdfso";
}
let result = defaultFunction();
console.log("result = ", result);

// Define type of function and its parameters

function cal(para: number) {
  console.log("para = ", para);
}
let para = 100;
cal(para);

function cal1(para: number): number {
  //   console.log("para1 = ", para1); // Error
  return para;
}
let para1 = 100;
cal1(para1);
// console.log(cal1("100")); // Error
console.log("cal1 = ", cal1(100));

function cal2(p1: number, p2?: number) {
  // add ? if second para is optional
  return p2 ? p1 + p2 : p1;
}

let para2 = 100;
console.log(cal2(100, 200));
