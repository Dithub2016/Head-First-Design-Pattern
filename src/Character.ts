interface WeaponBehavior {
    useWeapon(): void
}
class KnifeBehavior implements WeaponBehavior {
    useWeapon(): void {
        console.log('use knife');
    }
}
class AxeBehavior implements WeaponBehavior {
    useWeapon(): void {
        console.log('use axe');
    }
}
class SwordBehavior implements WeaponBehavior {
    useWeapon(): void {
        console.log('use sword');
    }
}
class BowAndArrowBehavior implements WeaponBehavior {
    useWeapon(): void {
        console.log('use bow and arrow');
    }
}


abstract class Character {
    weapon: WeaponBehavior
    
    public setWeapon(w: WeaponBehavior): void {
        this.weapon = w;
    }
    public fight(): void {
        this.weapon.useWeapon();
    }
}
class King extends Character {
    constructor() {
        super();
        this.weapon = new AxeBehavior();
    }
}
class Queen extends Character {
    constructor() {
        super();
        this.weapon = new BowAndArrowBehavior();
    }
}
class Troll extends Character {
    constructor() {
        super();
        this.weapon = new KnifeBehavior();
    }
}
class Knight extends Character {
    constructor() {
        super();
        this.weapon = new SwordBehavior();
    }
}

