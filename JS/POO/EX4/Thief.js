import { Character } from "./Character.js";

class Thief extends Character {
  constructor(name, hp, atk, def) {
    super(name, hp, atk, def);
  }
  attack(enemy) {
    console.log(`${this.name} is attacking ${enemy.name}`);
    console.log(`${enemy.name} has ${enemy.hp} HP`);
    const damage = (this.atk - enemy.def) * 2;
    enemy.hp -= damage;
    console.log(
      `${enemy.name} suffered ${damage}ATK now his HP is ${enemy.hp}`
    );
  }
}



