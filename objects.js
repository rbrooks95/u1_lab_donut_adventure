class Hamster {
  constructor(owner, name, price) {
    this.owner = owner;
    this.name = name;
    this.price = price;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

class Person extends Hamster {
  constructor(name, age, height, weight, mood, hamsters, bankAccount) {
    super();
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamsters = [];
    this.bankAccount = bankAccount;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    return `hello ${this.name}`;
  }
  eat() {
    return this.weight++, this.mood++;
  }
  exercise() {
    return this.weight--;
  }
  ageUp() {
    return (
      this.age++,
      this.height++,
      this.weight++,
      this.mood--,
      (this.bankAccount += 10)
    );
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
  }
}
