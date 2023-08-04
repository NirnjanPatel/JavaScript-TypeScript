// Default Function
function defaultFunction() {
    return "sdfhhdfso";
}
var result = defaultFunction();
console.log("result = ", result);
// Define type of function and its parameters
function cal(para) {
    console.log("para = ", para);
}
var para = 100;
cal(para);
function cal1(para) {
    //   console.log("para1 = ", para1); // Error
    return para;
}
var para1 = 100;
cal1(para1);
// console.log(cal1("100")); // Error
console.log("cal1 = ", cal1(100));
function cal2(p1, p2) {
    // add ? if second para is optional
    return p2 ? p1 + p2 : p1;
}
var para2 = 100;
console.log(cal2(100, 200));
