//defines the first interface
interface first {
    name: string,
    age?: number
}
//defines the second interface
interface second {
    product: string,
    available?: boolean,
    amount?: number
}
//class implements both the interfaces
class generics<T> implements first, second {
    name: string; //properity name passed from first
    product: string;//property product passed from second
    values: T[] = []; //sets array type to generic T

    //method to push the values into the array
    pushVal(name: T, product: T) {
        this.values.push(name, product);
    }
    //constructor method
    constructor(nm: string, pr: string) {
        this.name = nm;
        this.product = pr;
    }
}
// creates new instance of class generics
const gen = new generics<string>("john", "Table");
//push method invoked
gen.pushVal(gen.name, gen.product);
//logs the array to console
console.log(gen.values);