class Account {
    static counter = 0;
    constructor(name, balance, accountNumber) {
        this.id = ++Account.counter;
        this.name = name;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }
    depositMoney(amount) {
        this.balance += amount;
    }
    withdrawMoney(amount) {
        this.balance -= amount;
    }
    displayAccount() {
        console.log(`
            Hello ${this.name},
            You're card number is ${this.accountNumber} and you currently ${this.balance}.
        `);
    }
    transaction(transerferAmount, seconedAccount) {
        this.balance -= transerferAmount;
        seconedAccount.balance += transerferAmount;
    }
}

class Saving extends Account {
    constructor(name, balance, accountNumber) {
        super(name, balance, accountNumber);
    }
}
class Current extends Account {
    constructor(name, balance, accountNumber) {
        super(name, balance, accountNumber);
    }
}

class CreateAccount {
    constructor(type, name, balance, accountNumber) {
        this.type = type;
        this.name = name;
        this.balance = balance;
        this.accountNumber = accountNumber;
        if (this.type == "saving") {
            return new Saving(this.name, this.balance, this.accountNumber);
        } else if (this.account.type == "current") {
            return new Current(this.name, this.balance, this.accountNumber);
        }
    }
}

let anasAccount = new CreateAccount("saving");

let a = new Account("Girges", 2000, 39832, "saving");
let s = new Account("Mazen", 5000, 32956, "current");

let saving = new CreateAccount("saving", "boray", 20000, 92644);

a.transaction(500, s);

//////////////////////////////////////// Task 2 ////////////////////////////////////////
class Monster {
    constructor(name, hp) {
        if (this.constructor == Monster) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.name = name;
        this.hp = hp;
    }
    getName() {
        return this.name;
    }
    getHp() {
        return this.hp;
    }
    damage() {
        throw new Error("You have to implement the attack method");
    }
}

class Alien extends Monster {
    constructor(name, hp) {
        super(name, hp);
    }
    damage(enemy) {
        return (enemy.hp -= 20);
    }
}
class Beast extends Monster {
    constructor(name, hp) {
        super(name, hp);
    }
    damage(enemy) {
        return (enemy.hp -= 30);
    }
}
class Zombie extends Monster {
    constructor(name, hp) {
        super(name, hp);
    }
    damage(enemy) {
        return (enemy.hp -= 40);
    }
}
class Vampire extends Monster {
    constructor(name, hp) {
        super(name, hp);
    }
    damage(enemy) {
        return (enemy.hp -= 50);
    }
}
class Mummy extends Monster {
    constructor(name, hp) {
        super(name, hp);
    }
    damage(enemy) {
        return (enemy.hp -= 60);
    }
}

class MonsterDecorator {
    constructor(monster, name, hp) {
        this.monster = monster;
        this.name = name;
        this.hp = hp;
    }
    getName() {
        return `${this.name}  ${this.monster.getName()}`;
    }
    getHp() {
        return `${this.hp + this.monster.getHp()}`;
    }
}

class Lasers extends MonsterDecorator {
    constructor(monster, name, hp) {
        super(monster, name, hp);
    }
    damage(enemy) {
        return (enemy.hp -= 120);
    }
}
class Posion extends MonsterDecorator {
    constructor(monster, name, hp) {
        super(monster, name, hp);
    }
    damage(enemy) {
        return (enemy.hp -= 130);
    }
}
class Flying extends MonsterDecorator {
    constructor(monster, name, hp) {
        super(monster, name, hp);
    }
    damage(enemy) {
        return (enemy.hp -= 140);
    }
}
class Speed extends MonsterDecorator {
    constructor(monster, name, hp) {
        super(monster, name, hp);
    }
    damage(enemy) {
        return (enemy.hp -= 150);
    }
}
class Strength extends MonsterDecorator {
    constructor(monster, name, hp) {
        super(monster, name, hp);
    }
    damage(enemy) {
        return (enemy.hp -= 160);
    }
}

let vlad = new Vampire("Vladimare", 250);
let amumu = new Mummy("Amumu", 300);
console.log(vlad);
console.log(amumu);

let flyingVlad = new Flying(vlad, "Flying", 100);
let quickAmumu = new Speed(amumu, "Quick", 300);

quickAmumu.damage(flyingVlad);

console.log(flyingVlad.getHp());
console.log(quickAmumu.getHp());

//////////////////////////////////////// Task 2 ////////////////////////////////////////
