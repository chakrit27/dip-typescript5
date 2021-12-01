class Cat{
    //idenfine field/property/attribute
    id: number = 101;
    name: string = 'Trang';
    //create method or function
    display() {
        console.log(`${this.id} ${this.name}`);
        return `${this.id} ${this.name}`;
    }
}
let cat1 = new Cat();
let cat2 = new Cat();
let cat3 = new Cat();
cat2.id = 102;
cat2.name = "Korat";
cat3.id = 103;
cat3.name = 'Trat';
cat1.display();
cat2.display();
console.log(cat3.display());