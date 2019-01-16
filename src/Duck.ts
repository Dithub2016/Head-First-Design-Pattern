// quack behavior
interface QuackBehavior {
    quack(): void;
}
class Quack implements QuackBehavior {
    public quack(): void {
        console.log(`Quack`);
    }
}
class MuteQuack implements QuackBehavior {
    public quack(): void {
        console.log(`<< Silence >>`);
    }
}
class Squeak implements QuackBehavior {
    public quack(): void {
        console.log(`Squeak`);
    }
}

// fly behavior
interface FlyBehavior {
    fly(): void;
}
class FlyWithWings implements FlyBehavior {
    public fly(): void {
        console.log(`I'm flying!!`);
    }
}
class FlyNoWay implements FlyBehavior {
    public fly(): void {
        console.log(`I can't fly`);
    }
}
class FlyRocketPowered implements FlyBehavior {
    public fly(): void {
        console.log(`I'm flying with a rocket!`);
    }
}

// Duck
abstract class Duck {
    quackBehavior: QuackBehavior;
    flyBehavior: FlyBehavior;

    public abstract display(): void;

    public setQuackBehavior(qb: QuackBehavior): void {
        this.quackBehavior = qb;
    }
    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public setFlyBehavior(fb: FlyBehavior): void {
        this.flyBehavior = fb;
    }
    public performFly(): void {
        this.flyBehavior.fly();
    }

    public swim(): void {
        console.log(`All ducks float, even decoys!`);
    }
}
class MallardDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }
    public display(): void {
        console.log(`I'm a real Mallard duck`);
    }
}

class ModelDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }
    public display(): void {
        console.log(`I'm a model duck`);
    }
}

// test
const mallard: Duck = new MallardDuck();
mallard.display();
mallard.performQuack();
mallard.performFly();

const model: Duck = new ModelDuck();
model.display();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();

