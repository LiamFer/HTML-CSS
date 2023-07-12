export class Character {
  constructor(name, hp, atk, def) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
  }

  attack(enemy) {
    console.log(`${this.name} is attacking ${enemy.name}`);
    console.log(`${enemy.name} has ${enemy.hp} HP`);
    const damage = this.atk - enemy.def;
    enemy.hp -= damage;
    console.log(`${enemy.name} suffered ${damage}ATK now his HP is ${enemy.hp}`);
  }
}


