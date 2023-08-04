// class
var App = /** @class */ (function () {
    function App(name) {
        console.log("Name in constructor = ", name);
    }
    App.prototype.getName = function (name) {
        console.log("name = ", name);
    };
    return App;
}());
var obj = new App("Kumar");
obj.getName("Balram");
