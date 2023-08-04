/*
Symbol
------
 symbol is a primitive data type, just like number and string.symbol values are created by calling the Symbol constructor.Symbols are immutable, and unique.Just like strings, symbols can be used as keys for object properties.
*/
var _a;
var s1 = Symbol();
var s2 = Symbol();
// console.log(s1 === s2);
// console.log(s1.toString());
var data = (_a = {},
    _a[s1] = "Symbol1",
    _a);
console.log(data);
