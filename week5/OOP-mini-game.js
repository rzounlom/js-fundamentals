// Base class for characters
class Character {
  // Constructor for initializing character properties
  constructor(name, health, baseDamage) {
    // Initialize character properties
    this.name = name;
    this.health = health;
    this.baseDamage = baseDamage;
    this.level = 1;
    this.exp = 0;
  }

  // Method for attacking a target character
  attack(target) {
    const totalDamage = this.baseDamage + Math.floor(Math.random() * 5); // Randomly add 0-4 damage to base damage
    console.log(
      `${this.name} attacks ${target.name} for ${totalDamage} damage!` // Log the attack details
    );
    target.takeDamage(totalDamage); // Call the takeDamage method on the target character
  }

  // Method for taking damage from an attack
  takeDamage(damage) {
    this.health -= damage; // Reduce health by the damage taken
    console.log(`${this.name} takes ${damage} damage.`); // Log the damage taken
    if (this.health <= 0) {
      console.log(`${this.name} has been defeated.`); // Log if the character is defeated
    }
  }

  // Method for gaining experience points
  gainExp(exp) {
    this.exp += exp; // Add experience points
    console.log(`${this.name} gains ${exp} experience points.`); // Log the experience gained
    if (this.exp >= 100) {
      this.levelUp(); // Check if the character can level up
    }
  }

  // Method for leveling up the character
  levelUp() {
    this.exp -= 100;
    this.level++;
    this.health += 20;
    this.baseDamage += 5;
    console.log(`${this.name} levels up to level ${this.level}!`);
  }
}

// Subclass for wizards, inherits from Character
class Wizard extends Character {
  // Constructor for initializing wizard properties
  constructor(name) {
    super(name, 80, 12);
    this.mana = 50;
  }

  // Method for casting a spell on a target
  castSpell(target) {
    if (this.mana >= 20) {
      console.log(`${this.name} casts a powerful spell on ${target.name}!`);
      this.mana -= 20; // Reduce mana by the cost of the spell
      target.takeDamage(this.baseDamage * 2); // Deal double damage to the target
    } else {
      console.log(`${this.name} doesn't have enough mana to cast a spell.`);
    }
  }
}

// Subclass for warriors, inherits from Character
class Warrior extends Character {
  // Constructor for initializing warrior properties
  constructor(name) {
    super(name, 100, 15);
  }

  // Method for using a weapon to attack a target
  useWeapon(target) {
    console.log(`${this.name} attacks ${target.name} with a mighty swing!`);
    target.takeDamage(this.baseDamage + 10); // Deal extra damage with the weapon
  }
}

// Create instances of characters
const mage = new Wizard("Gandalf"); // Create a new Wizard instance
const warrior = new Warrior("Aragorn"); // Create a new Warrior instance

// console.log(mage);
// console.log(warrior);

// // Gameplay interactions
// mage.attack(warrior);
// warrior.useWeapon(mage);
// mage.castSpell(warrior);
// warrior.gainExp(60);
// mage.gainExp(120);
