export {};
// Array class enum tuple function interface
var list: number[] = [1, 3, 5];
console.log(list);

// 2. The second way uses a generic array type:
var list: Array<number> = [1, 3, 5];

console.log("second way ", list);

// The Tuple is a data type which includes two sets of values of different data types.
// Declare a tuple
let a: [string, number];

// Initialize it
a = ["hi", 8]; // OK

// An Interface is a structure which acts as a contract in our application.
