
let num: Number = 5;
if (num > 4)
{
    console.log("Yes greater then 4");
}

switch (num)
{
    case 1:
        console.log("Its 1");
        break;
    case 2:
        console.log("Its 2");
        break;
    case 3:
        console.log("Its 3");
        break;
    case 4:
        console.log("Its 4");
        break;
    case 5:
        console.log("Its 5");
        break;
    default:
        console.log("Default");
}

let arrayNames: string[] = ["Muna", "Saom", "Saifan","Mahir","Adhora"];
for (var item of arrayNames) {
    //console.log(item);
}

let i: number = 0;
while (i < 5) {
    //console.log(arrayNames[i]);
    ++i;
}

let j: number = 0;
do {
    //console.log(arrayNames[j]);
    ++j;
}
while (j < 5)
