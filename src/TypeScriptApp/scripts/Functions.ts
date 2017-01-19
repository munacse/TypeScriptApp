
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
    //console.log(x);
}
bar(90);

let datas: number[] = [2, 4, 6, 8, 5, 1, 0];
//datas.forEach(item => console.log(item));

function Book(){
    this.publishdate = 2016;
    setInterval(() => {
        console.log(this.publishdate);
    },1000)
}
//Book();
enum Category { Biography, Fiction, History, Children };
function GetAllBook(){
    let Books = [
        { id: 1, title: 'Sherlockholmes', category: Category.Fiction, available: true },
        { id: 2, title: 'Six Moons', category: Category.Fiction, available: true },
        { id: 3, title: 'Life of Pie', category: Category.Children, available: true },
        { id: 4, title: 'Ultimate Goal', category: Category.Biography, available: true },
        { id: 5, title: 'Final Destiny', category: Category.History, available: true }
    ];
    return Books;
}

function GetBookTitleByCategory(categoryFilter: Category): Array<string> {
    console.log('Getting Books in category: ' + Category[categoryFilter]);

    const allBooks = GetAllBook();
    const filteredTitle: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitle.push(currentBook.title);
        }
    }

    return filteredTitle;
}

function LogBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

function GetBookById(bookId: number) {
    const allBook = GetAllBook();
    return allBook.filter(book => book.id === bookId)[0];
}

function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log('Creating Customer ' + name);
    if (age) {
        console.log('Age :' + age);
    }
    if (city) {
        console.log('City :' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIds: number[]): string[] {
    console.log('Checking out books for ' + customer);
    let bookCheckedOut: string[] = [];
    for (let id of bookIds) {
        let book = GetBookById(id);
        if (book.available) {
            bookCheckedOut.push(book.title);
        }
    }
    return bookCheckedOut;
}
//=================#########=============

let myBooks: string[] = CheckoutBooks('Shanu', 2,4,5);
myBooks.forEach(title => console.log(title));
//CreateCustomer('Saom');
//CreateCustomer('Prapty', 23);
//CreateCustomer('Saifan', 34, 'Dhaka');

//let firstbook = GetBookById(4);
//console.log(firstbook);
//const fictionBooks = GetBookTitleByCategory(Category.Fiction);
//LogBookTitles(fictionBooks);
//fictionBooks.forEach((id, title) => console.log('Id :' + id + ', Title :' + title));


