import { Category } from './enums';

interface IPerson {
    firstName: string,
    lastName: string
}

var customer: IPerson = {
    firstName: "Muna",
    lastName: "Mehtab"
}

var employee: IPerson = {
    firstName: "James",
    lastName: "Hanes"
}

//console.log("Custormer# Name : " + customer.firstName + " " + customer.lastName);
//console.log("Employee # Name : " + employee.firstName + " " + employee.lastName);

interface LabeledValue{
    label: string
}

function PrintLabelValue(labeledValue: LabeledValue) {
    console.log(labeledValue.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
//console.log(myObj);

