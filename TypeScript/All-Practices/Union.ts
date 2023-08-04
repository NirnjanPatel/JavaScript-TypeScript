// Union types
// declaring more than one data type is called union type
let data: number = 23;
// data = "345"; // Error
console.log("data = ", data);

let data1: number | string = 23;
// let data1: number | string | boolean | null | undefined = 23;
// let data1: any = 23;
data1 = "345"; // Work
console.log("data1 = ", data1);
