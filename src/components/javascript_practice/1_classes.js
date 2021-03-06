// ES6 JS Classes
class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    // Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };

    // Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};

// Instance of the class/new object
let anonDude = new User('Anonymous dude');

// We can now use the new instance and the . operator to access the 2 methods
anonDude.greet();
anonDude.status();

// Another instance of the class
let anonLady = new User('Anonymous lady');
anonLady.greet();
anonLady.status();

// Another instance of the class
let jeff = new User('Jeff');
jeff.greet();
jeff.status();

// Challenge: create 2 new instances of class from memory
let alyssa = new User('Alyssa');
alyssa.greet();
alyssa.status();

let zoey = new User('Zoey');
zoey.greet();
zoey.status();