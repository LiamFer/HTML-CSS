import { Character } from "./Character.js";

class Warrior extends Character {
  #basedef;
  constructor(name, hp, atk, def, shield) {
    super(name, hp, atk, def);
    this.#basedef = def;
    this.shield = shield;
    this.stance = "ataque";
  }
  attack(enemy) {
    if (this.stance === "ataque") {
      console.log(`${this.name} is attacking ${enemy.name}.`);
      console.log(`${enemy.name} has ${enemy.hp} HP`);
      const damage = this.atk - enemy.def;
      enemy.hp -= damage;
      console.log(
        `${enemy.name} suffered ${damage}ATK now his HP is ${enemy.hp}`
      );
    } else {
      console.log("Impossivel realizar o ataque estando em modo de defesa.");
    }
  }

  stance() {
    if (this.stance === "ataque") {
      console.log(`${this.name} is changing his stance to Defence.`);
      this.stance = "defesa";
      this.def += this.shield;
    } else {
      this.stance = "ataque";
      console.log(`${this.name} is changing his stance to Attack`);
      this.def = this.#basedef;
    }
  }
}
