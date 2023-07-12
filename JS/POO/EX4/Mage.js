import { Character } from "./Character.js";

class Mage extends Character {
  constructor(name, hp, atk, def, sorcery) {
    super(name, hp, atk, def);
    this.sorcery = sorcery;
  }
  attack(enemy) {
    console.log(`${this.name} is attacking ${enemy.name}.`);
    console.log(`${enemy.name} has ${enemy.hp} HP`);
    const damage = this.atk + this.sorcery - enemy.def;
    enemy.hp -= damage;
    console.log(
      `${enemy.name} suffered ${damage}ATK now his HP is ${enemy.hp}`
    );
  }

  heal(ally) {
    console.log(`${this.name} is healing ${ally.name}.`);
    const heal = 2 * this.sorcery;
    ally.hp += heal;
    console.log(`${ally.name} was healed by ${heal}HP.`);
  }
}

const thiago = new Mage("thiago", 100, 20, 30, 40);
const william = new Character("william", 100, 40, 30);

thiago.attack(william);
