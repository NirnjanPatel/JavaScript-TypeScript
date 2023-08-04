// class
class App {
  name: string;
  constructor(name: string) {
    console.log("Name in constructor = ", name);
  }

  getName(name: string) {
    console.log("name = ", name);
  }
}
const obj = new App("Kumar");
obj.getName("Balram");
