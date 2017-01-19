
//Boolean
let isDone: boolean = true;
//console.log(isDone);

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let fullName: string = 'Md. Munaour Mehtab';
let age: number = 37;
let sentence: string = 'Hello, My name is Muna';

//Array
let list: number[] = [1, 2, 3];

//Tuple
let x: [string, number];
x = ["Muna", 32];
//console.log(x[0]);

//Enum
enum Color { Red, Green, Blue };
enum Color1 { Red = 1, Green, Blue };
enum Color2 { Red = 1, Green = 2, Blue = 4 };
//console.log(Color2.Blue);

//Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
//console.log(notSure);

//Void
warnUser();
function warnUser(): void {
    //console.log("This is my warning message");
}

function getTitles(name: string): string[];
function getTitles(isActive: boolean): string[];

function getTitles(item: any): string[] {
    let value: string[] = [];
    if (typeof item == 'string') {
        //add value
    }
    else if (typeof item == 'boolean') {
        //add value
    }
    return value;
}

interface Person {
    id: number;
    title: string;
    name: string;
    age: number;
    email: string;
}




