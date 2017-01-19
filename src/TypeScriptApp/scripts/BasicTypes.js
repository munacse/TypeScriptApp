//Boolean
var isDone = true;
//console.log(isDone);
//Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//String
var fullName = 'Md. Munaour Mehtab';
var age = 37;
var sentence = 'Hello, My name is Muna';
//Array
var list = [1, 2, 3];
//Tuple
var x;
x = ["Muna", 32];
//console.log(x[0]);
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
;
//console.log(Color2.Blue);
//Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
//console.log(notSure);
//Void
warnUser();
function warnUser() {
    //console.log("This is my warning message");
}
function getTitles(item) {
    var value = [];
    if (typeof item == 'string') {
    }
    else if (typeof item == 'boolean') {
    }
    return value;
}
