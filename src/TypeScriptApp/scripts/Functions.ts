
//Sample Function
function Sample_Function(id: number, name: string, isActive?: boolean) {
    //console.log("Id :" + id + ",Name : " + name);
    if (isActive != undefined) {
        //console.log("Yes its active");
    }
}

Sample_Function(1, "Saom");
Sample_Function(1, "Saom", true);

/*Rest parameters are similar to variable arguments in Java. 
Rest parameters don’t restrict the number of values that you can pass to a function.
However, the values passed must all be of the same type.*/
function addNumbers(...nums: number[]) {
    var i;
    var sum: number = 0;

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
var res = function (a: number, b: number) {
    return a * b;
};
//console.log(res(12, 2)); 

//Recursion
function Recursion(num: number) {
    if (num <= 0)
        return 1;
    else
        return num * Recursion(num - 1);
}
//console.log(Recursion(5));

//#===Lamda===#
//#Lambda Expression
var foo = (x: number) => x + 10;
//console.log(foo(20));
var foo1 = (x: number, y: number, z: number) => x + y + z;
//console.log(foo1(20, 10, 70));

//#Lambda Statement
var bar = (x: number) => {
    x = x + 10;
    console.log(x);
}
bar(90);

