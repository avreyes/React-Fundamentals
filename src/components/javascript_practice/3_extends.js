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

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
};
// Instance of User Class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

//Instance of TrialUser class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

// Challenge: Make a class called BannedUser. Write a method/function that tells the reason that prints out a message about why they have been banned.

class BannedUser extends User {
    bannedAcct() {
        console.log(`You've acted against community guidelines, ${this.name} has been banned.`);
    };
};

let bannedUser = new BannedUser('Karen');
bannedUser.greet();
bannedUser.bannedAcct();

