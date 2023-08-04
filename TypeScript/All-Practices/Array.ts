const array = [10, 20];
console.log("array = ", array);

// let array1 = ["sdf", "sdf", "sdfsdf"];
let array1 = ["sdf", "sdf", "sdfsdf", 100];
console.log("array1 = ", array1);
console.log(`array1 = ${array1}`);

array1.push("neer");
console.log(`array1 = ${array1}`);

array1[1] = 100;
console.log(`array1 = ${array1}`);

// let array2: string = ["sfe", "sdf", "et5"];
let array2: string[] = ["sfe", "sdf", "et5"];
console.log(`array2= ${array2}`);

let array3: any = ["sfe", "sdf", "et5", 345];
console.log(`array3 = ${array3}`);

// specific tuple
let array4: [string, number] = ["sfe", 100];
console.log(`array4 = ${array4}`);
