interface userType {
  name: string;
  role: string;
  experience: number;
}

const obj: userType = {
  name: "Balram Kumar",
  role: "MEAN",
  experience: 5,
};
// obj.email = "balram.kumar3108@gmail.com"; // Error
// obj.experience = "string"; // Error
console.log("obj = ", obj);

// obj.name = 345; // Error
// obj.name = "Updated";
console.log("obj = ", obj);

const obj1: any = {
  name: "Balram Kumar",
  role: "MEAN",
  experience: 5,
};
obj1.name = 345; // No errors
// obj1.name = "Updated";
console.log("obj1 = ", obj1);

obj1.email = "balram.kumar3108@gmail.com"; // No errors
console.log("obj1 = ", obj1);
