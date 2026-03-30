// class Chai {
//   flavour: string;
//   price: number;

//   //   constructor(flavour: string, price: number) {
//   //     this.flavour = flavour;
//   //     this.price = price;
//   //   }

//   constructor(flavour: string) {
//     this.flavour = flavour;
//   }
// }

// const masalaCahi = new Chai("masala");

// masalaCahi.flavour;

class Chai {
  public flavor: string = "masala";
  private secretIngredients = "Cardamom";

  reveal() {
    return this.secretIngredients; //ok
  }
}

class Shop {
  protected shopName = "Chai corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName; //ok
  }
}

// const c = new Chai();

class Walet {
  #balance = 100;

  getBalance() {
    return this.#balance;
  }
}

const w = new Walet();

w.getBalance();

class Cup {
  readonly capacity: number = 250;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernCahi {
  private _sugar = 2;
  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Too sweet");
    this._sugar = value;
  }
}

const c = new ModernCahi();

c.sugar = 3;

class EkChai {
  static shopName = "ChaiCode caffe";

  constructor(public flavour: string) {}
}

console.log(EkChai.shopName);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make(): void {
    console.log("Brewing chai");
  }
}

class Heater {
  heat() {}
}

class CahiMaker {
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat;
  }
}
