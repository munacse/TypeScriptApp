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
    //console.log(x);
};
bar(90);
var datas = [2, 4, 6, 8, 5, 1, 0];
//datas.forEach(item => console.log(item));
function Book() {
    var _this = this;
    this.publishdate = 2016;
    setInterval(function () {
        console.log(_this.publishdate);
    }, 1000);
}
//Book();
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Fiction"] = 1] = "Fiction";
    Category[Category["History"] = 2] = "History";
    Category[Category["Children"] = 3] = "Children";
})(Category || (Category = {}));
;
function GetAllBook() {
    var Books = [
        { id: 1, title: 'Sherlockholmes', category: Category.Fiction, available: true },
        { id: 2, title: 'Six Moons', category: Category.Fiction, available: true },
        { id: 3, title: 'Life of Pie', category: Category.Children, available: true },
        { id: 4, title: 'Ultimate Goal', category: Category.Biography, available: true },
        { id: 5, title: 'Final Destiny', category: Category.History, available: true }
    ];
    return Books;
}
function GetBookTitleByCategory(categoryFilter) {
    console.log('Getting Books in category: ' + Category[categoryFilter]);
    var allBooks = GetAllBook();
    var filteredTitle = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitle.push(currentBook.title);
        }
    }
    return filteredTitle;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookById(bookId) {
    var allBook = GetAllBook();
    return allBook.filter(function (book) { return book.id === bookId; })[0];
}
function CreateCustomer(name, age, city) {
    console.log('Creating Customer ' + name);
    if (age) {
        console.log('Age :' + age);
    }
    if (city) {
        console.log('City :' + city);
    }
}
function CheckoutBooks(customer) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for ' + customer);
    var bookCheckedOut = [];
    for (var _a = 0, bookIds_1 = bookIds; _a < bookIds_1.length; _a++) {
        var id = bookIds_1[_a];
        var book = GetBookById(id);
        if (book.available) {
            bookCheckedOut.push(book.title);
        }
    }
    return bookCheckedOut;
}
//=================#########=============
var myBooks = CheckoutBooks('Shanu', 2, 4, 5);
myBooks.forEach(function (title) { return console.log(title); });
//CreateCustomer('Saom');
//CreateCustomer('Prapty', 23);
//CreateCustomer('Saifan', 34, 'Dhaka');
//let firstbook = GetBookById(4);
//console.log(firstbook);
//const fictionBooks = GetBookTitleByCategory(Category.Fiction);
//LogBookTitles(fictionBooks);
//fictionBooks.forEach((id, title) => console.log('Id :' + id + ', Title :' + title));
