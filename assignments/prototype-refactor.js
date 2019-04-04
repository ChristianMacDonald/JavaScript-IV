/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday


2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes);
        this.healthPoints = attributes.healthPoints;
    }

    takeDamage() {
        return `${this.name} took damage.`;
    }
}

class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes);
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

class Hero extends Humanoid {
    constructor(attributes) {
        super(attributes);
    }

    attack(opponent, damage) {
        opponent.healthPoints -= damage;
        if (opponent.healthPoints <= 0) {
            return `${this.name} attacked ${opponent.name} with a ${this.weapons[0]} for ${damage} health points and defeated them.`;
        } else {
            return `${this.name} attacked ${opponent.name} with a ${this.weapons[0]} for ${damage} health points.`;
        }
    }
}

class Villain extends Humanoid {
    constructor(attributes) {
        super(attributes);
    }

    attack(opponent, damage) {
        opponent.healthPoints -= damage;
        if (opponent.healthPoints <= 0) {
            return `${this.name} attacked ${opponent.name} with a ${this.weapons[0]} for ${damage} health points and defeated them.`;
        } else {
            return `${this.name} attacked ${opponent.name} with a ${this.weapons[0]} for ${damage} health points.`;
        }
    }
}

const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Mermaid Man',
    team: 'Mermaid Man and Barnacle Boy',
    weapons: [
        "Orb of Confusion"
    ],
    language: 'English',
});

const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 1,
        height: 5,
    },
    healthPoints: 10,
    name: 'Barnacle Man',
    team: 'Every Villain Is Lemons',
    weapons: [
        "Tickle Belt"
    ],
    language: 'English',
});

console.log(hero.attack(villain, 5));
console.log(villain.attack(hero, 8));
console.log(hero.attack(villain, 5));