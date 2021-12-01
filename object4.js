//3.By constuctor
var Car = /** @class */ (function () {
    //define constuctor
    function Car(id, name) {
        this.id = id;
        this.name = name;
    }
    //create method or fumction
    Car.prototype.display = function () {
        console.log("".concat(this.id, " ").concat(this.name));
    };
    return Car;
}());
var car1 = new Car(101, 'Korat');
var car2 = new Car(102, 'Trat');
car1.display();
car2.display();
