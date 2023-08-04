"use strict";
exports.__esModule = true;
var b = "Hello TS";
console.log(b);
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("Test function ");
    };
    return App;
}());
var obj = new App();
obj.test();
