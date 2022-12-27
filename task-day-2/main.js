////////////////////////////////////// Task 1 //////////////////////////////////////
class Vehicles {
    constructor(mileage, price) {
        this.mileage = mileage;
        this.price = price;
    }
}
class Car extends Vehicles {
    constructor(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType) {
        super(mileage, price);
        this.ownershipCost = ownershipCost;
        this.warranty = warranty;
        this.seatingCapacity - seatingCapacity;
        this.fuelType = fuelType;
    }
}

class Bike extends Vehicles {
    constructor(mileage, price, cylinders, gears, coolingType, wheelType, fuelTankSize) {
        super(mileage, price);
        this.cylinders = cylinders;
        this.gears = gears;
        this.coolingType - coolingType;
        this.wheelType = wheelType;
        this.fuelTankSize = fuelTankSize;
    }
}

class Audi extends Car {
    constructor(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType, modelType) {
        super(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType);
        this.modelType = modelType;
    }
}

class Ford extends Car {
    constructor(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType, modelType) {
        super(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType);
        this.modelType = modelType;
    }
}

class Bajaj extends Bike {
    constructor(mileage, price, cylinders, gears, coolingType, wheelType, fuelTankSize, makeType) {
        super(mileage, price, cylinders, gears, coolingType, wheelType, fuelTankSize);
        this.makeType = makeType;
    }
}

class TVS extends Bike {
    constructor(mileage, price, cylinders, gears, coolingType, wheelType, fuelTankSize, makeType) {
        super(mileage, price, cylinders, gears, coolingType, wheelType, fuelTankSize);
        this.makeType = makeType;
    }
}

let audi = new Audi(10345, 600000, 20000, "5 years", 2, "Petrol", "R8 Coupe");
let ford = new Ford(27485, 360000, 10000, "2 years", 4, "Diesel", "Ford Mustang");
let bajaj = new Bajaj(10485, 60000, 180, 3, "air", "spokes", "15 Inches", "Bajaj Pulsar 125");
let tvs = new TVS(9375, 43000, 120, 2, "oil", "alloys", "10 Inches", "TVS Apache RTR 160");
////////////////////////////////////// Task 1 //////////////////////////////////////

////////////////////////////////////// Task 2 //////////////////////////////////////
class Computer {
    constructor(processor, ram, rom) {
        this.processor = processor;
        this.ram = ram;
        this.rom = rom;
    }
    displaySpecs() {
        console.log(
            `This device has ${this.processor} processor and have ${this.ram}GB of RAM with ${this.rom}GB storage`
        );
    }
    expandROM(expandAmount) {
        this.rom += expandAmount;
    }
}

class Laptop extends Computer {
    constructor(processor, ram, rom, vgaCard) {
        super(processor, ram, rom);
        this.vgaCard = vgaCard;
    }
    printMessage(message) {
        console.log(message);
    }
}

class SmartPhone extends Computer {
    constructor(processor, ram, rom, screenType) {
        super(processor, ram, rom);
        this.screenType = screenType;
    }
    batteryNotification(batteryPercentage) {
        if (batteryPercentage > 80) {
            console.log("You're Good");
        } else if (batteryPercentage < 40 && batteryPercentage > 6) {
            console.log("You're battery is low, please consider charging as soon as possible");
        } else if (batteryPercentage < 5) {
            console.log("You're Almost our of juice");
        }
    }
}

let laptop = new Laptop("i7", 16, 512, "nVidia RTX 4060");
let smartphone = new SmartPhone("Snapdragon 730G", 8, 128, "Super AMOLED");
console.log(laptop.rom);
laptop.expandROM(128);
console.log(laptop.rom);
laptop.printMessage("Hello World!");
console.log(smartphone);
smartphone.batteryNotification(2);

////////////////////////////////////// Task 2 //////////////////////////////////////

////////////////////////////////////// Task 3 //////////////////////////////////////
class Employee {
    constructor(empName, jobTitle) {
        this.empName = empName;
        this.jobTitle = jobTitle;
    }
    setEmpName(name) {
        this.empName = name;
    }
    getEmpName() {
        return this.empName;
    }

    setJobTitle(title) {
        this.jobTitle = title;
    }
    getJobTitle() {
        return this.jobTitle;
    }

    calculateWeeklyPay() {
        throw new Error("You have to calculate weekly pay");
    }
}

class HourlyEmployee extends Employee {
    constructor(empName, jobTitle, payRate, workingHours) {
        super(empName, jobTitle);
        this.payRate = payRate;
        this.workingHours = workingHours;
    }
    calculateWeeklyPay() {
        return this.payRate * this.workingHours;
    }
}

class SalaryEmployee extends Employee {
    constructor(empName, jobTitle, weeklySalary) {
        super(empName, jobTitle);
        this.weeklySalary = weeklySalary;
    }
    calculateWeeklyPay() {
        return this.weeklySalary;
    }
}

let fixed = new SalaryEmployee("Yi", "Master", 2000);
let perHour = new HourlyEmployee("Teemo", "Scout", 200, 8);
fixed.calculateWeeklyPay();
perHour.calculateWeeklyPay();
////////////////////////////////////// Task 3 //////////////////////////////////////
