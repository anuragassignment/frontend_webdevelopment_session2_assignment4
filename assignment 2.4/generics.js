var generics = (function () {
    function generics(nm, pr) {
        this.values = [];
        this.name = nm;
        this.product = pr;
    }
    generics.prototype.pushVal = function (name, product) {
        this.values.push(name, product);
    };
    return generics;
}());
var gen = new generics("john", "Table");
gen.pushVal(gen.name, gen.product);
console.log(gen.values);
//# sourceMappingURL=generics.js.map