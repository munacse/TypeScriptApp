//Sample Function
function Sample_Function(id, name, isActive) {
    //console.log("Id :" + id + ",Name : " + name);
    if (isActive != undefined) {
    }
}
Sample_Function(1, "Saom");
Sample_Function(1, "Saom", true);
/*Rest parameters are similar to variable arguments in Java.
Rest parameters don’t restrict the number of values that you can pass to a function.
However, the values passed must all be of the same type.*/
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    //console.log("sum of the numbers", sum);
}
addNumbers(10, 20, 30);
addNumbers(1, 2, 3, 4, 5);
//Anonymous Function
/*Functions that are not bound to an identifier (function name) are called as anonymous
functions. These functions are dynamically declared at runtime. Anonymous functions can
accept inputs and return outputs, just as standard functions do. An anonymous function is
usually not accessible after its initial creation.
Variables can be assigned an anonymous function. Such an expression is called a function expression.*/
var res = function (a, b) {
    return a * b;
};
//console.log(res(12, 2)); 
//Recursion
function Recursion(num) {
    if (num <= 0)
        return 1;
    else
        return num * Recursion(num - 1);
}
//console.log(Recursion(5));
//#===Lamda===#
//#Lambda Expression
var foo = function (x) { return x + 10; };
//console.log(foo(20));
var foo1 = function (x, y, z) { return x + y + z; };
//console.log(foo1(20, 10, 70));
//#Lambda Statement
var bar = function (x) {
    x = x + 10;
    console.log(x);
};
bar(90);
