// const person = {
//     name: 'John Doe',
//     age: 30
// };

// module.exports = person;

// console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

module.exports = Person;

