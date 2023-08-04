/*
Enum
----
enums, or enumerated types, are data structures of constant length that hold a set of constant values.
*/
var Days;
(function (Days) {
    Days[Days["sun"] = 1] = "sun";
    Days[Days["mon"] = 2] = "mon";
    Days[Days["tue"] = 3] = "tue";
    Days[Days["wed"] = 4] = "wed";
    Days[Days["thur"] = 5] = "thur";
    Days[Days["fir"] = 6] = "fir";
    Days[Days["sat"] = 7] = "sat";
})(Days || (Days = {}));
var whichDay;
whichDay = Days.mon;
console.log(whichDay);
