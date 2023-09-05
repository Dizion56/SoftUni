function hero() {
  const mage = {
    name: "",
    mana: 100,
    health: 100,
    cast: function (spell) {
      this.mana -= 1;
      console.log(`${this.name} cast ${spell}`);
    },
  };

  const fighter = {
    name: "",
    stamina: 100,
    health: 100,
    fight: function () {
      this.stamina -= 1;
      console.log(`${this.name} slashes at the foe!`);
    },
  };

  const allHeroes = {
    ...mage,
    ...fighter,
  };

  return allHeroes;
}

let create = hero();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
