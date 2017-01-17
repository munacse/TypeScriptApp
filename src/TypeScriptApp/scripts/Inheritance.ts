
interface IVehicle {
    Name: string
}
interface ICar extends IVehicle {
    Type: string
}
var transport = <ICar>{};
transport.Name = "Toyota";
transport.Type = "Car";
//console.log(transport);

//Multiple Interface Inheritance
interface IParent1 {
    v1: number
}
interface IParent2 {
    v2: number
}
interface IChild extends IParent1, IParent2{ }
var objChild: IChild = { v1: 23, v2: 90 };
console.log(objChild);


