//3.By constuctor
class Car{
    //deining field
    id:number;
    name:string;
    //define constuctor
    constructor(id:number,name:string) {
        this.id = id;
        this.name = name;
    }
    //create method or fumction
    display(){
        console.log(`${this.id} ${this.name}`);
    }
}
let car1 = new Car(101,'Korat');
let car2 = new Car(102,'Trat');
car1.display();
car2.display();
