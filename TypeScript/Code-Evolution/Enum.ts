/* 
Enum
----
enums, or enumerated types, are data structures of constant length that hold a set of constant values.
*/

enum Days {
  sun = 1,
  mon,
  tue,
  wed,
  thur,
  fir,
  sat,
}
let whichDay: Days;
whichDay = Days.mon;

console.log(whichDay);
