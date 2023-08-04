/*
interface 
interface is an collection of  datatypes or template of datatypes of an object, array or an class. 
*/
interface userDetails {
  name: string;
  role: string;
  experience: number;
  getFulldetails: () => string;
}

const user: userDetails = {
  name: "Balram Kumar",
  role: "MEAN Stack",
  experience: 5,
  getFulldetails: function () {
    return "Neer";
  },
};
console.log("User = ", user);
console.log("User = ", user.getFulldetails());

console.log("userDetails = ", user.name);
