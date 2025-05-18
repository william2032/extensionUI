// function  Person (name ,age) {
//     this.name = name;
//     this.age = age;
//     this.message = function () {
//         console.log(`${name} said is, ${age} years old!`);
//     }
// }
//
//
class  People {
    constructor(name , age) {
        this.name = name;
        this.age = age;
    }
    message() {
        console.log(`${this.name} said is, ${this.age} years old!`);
    }

    birthday() {
        this.age++;
        console.log(`${this.name} birthday is, ${this.age} years!`);
    }
}
let user = new People('William Goodman', 23);

user.message();
user.birthday();

// class  Calculator {
//     constructor( X ,Y) {
//         this.x = X;
//         this.y = Y;
//     }
//     add () {
//         return this.x + this.y;
//     }
//     static multiply (a, b) {
//         return a * b;
//     }
//     static description = 'scientific calculator'


class  Friend extends  People {
    constructor(name , age, like, comments) {
        super(name, age);
        this.like = like;
        this.comments = comments;
    }
    social() {
        console.log(`${this.name}  has ${this.like} your status and post this as comment ${this.comments}`);
    }
}

let friend = new Friend('William Goodman',23,'liked','\'I like your status\'');

friend.social()