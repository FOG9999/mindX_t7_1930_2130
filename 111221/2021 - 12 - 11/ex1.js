class Animal {
    constructor(name) {
        this.name = name;
    }
}
let dog = new Animal("Doggy");
class Rabbit extends Animal {
    constructor(name) {
        super();
        this.name = name;
        this.created = Date.now();
    }
}
let rabbi = new Rabbit("Rabbi");
console.log(dog, rabbi);
