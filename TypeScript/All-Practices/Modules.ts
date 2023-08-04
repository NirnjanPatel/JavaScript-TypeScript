/*
Moduels
-------
simple function import export
*/

/*
Generics
--------
Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

*/
// Error
// function users(data: string): string {
//   return data;
// }
// console.log(users(10));
// console.log(users({name:"Balram", age:30}));

// Generics
function users<T>(data: T): T {
  return data;
}
console.log(users(10));
console.log(users({ name: "Balram", age: 30 }));
