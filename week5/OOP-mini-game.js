// Base class for characters
class Character {
  // Constructor for initializing character properties
  constructor(name, health, baseDamage) {
    this.name = name;
    this.health = health;
    this.baseDamage = baseDamage;
    this.level = 1;
    this.exp = 0;
  }

  // Method for attacking a target character
  attack(target) {
    const totalDamage = this.baseDamage + Math.floor(Math.random() * 5);
    console.log(
      `${this.name} attacks ${target.name} for ${totalDamage} damage!`
    );
    target.takeDamage(totalDamage);
  }

  // Method for taking damage from an attack
  takeDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} takes ${damage} damage.`);
    if (this.health <= 0) {
      console.log(`${this.name} has been defeated.`);
    }
  }

  // Method for gaining experience points
  gainExp(exp) {
    this.exp += exp;
    console.log(`${this.name} gains ${exp} experience points.`);
    if (this.exp >= 100) {
      this.levelUp();
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
      this.mana -= 20;
      target.takeDamage(this.baseDamage * 2);
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
    target.takeDamage(this.baseDamage + 10);
  }
}

// Create instances of characters
const mage = new Wizard("Gandalf");
const warrior = new Warrior("Aragorn");

// console.log(mage);
// console.log(warrior);

// // Gameplay interactions
// mage.attack(warrior);
// warrior.useWeapon(mage);
// mage.castSpell(warrior);
// warrior.gainExp(60);
// mage.gainExp(120);
