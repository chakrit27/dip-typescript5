var Cat = /** @class */ (function () {
    function Cat() {
        //idenfine field/property/attribute
        this.id = 101;
        this.name = 'Trang';
    }
    //create method or function
    Cat.prototype.display = function () {
        console.log("".concat(this.id, " ").concat(this.name));
        return "".concat(this.id, " ").concat(this.name);
    };
    return Cat;
}());
var cat1 = new Cat();
var cat2 = new Cat();
var cat3 = new Cat();
cat2.id = 102;
cat2.name = "Korat";
cat3.id = 103;
cat3.name = 'Trat';
cat1.display();
cat2.display();
console.log(cat3.display());
