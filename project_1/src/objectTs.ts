const chai = {
  name: "Masala chai",
  price: 20,
  isHot: true,
};

// {
//     name:string;
//     price:number;
//     isHot:boolean;
// }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "tea leaves"],
};

type Cup = {
  size: string;
};

let smallCup: Cup = {
  size: "200ml",
};
console.log(smallCup);

let bigCup = {
  size: "500ml",
  meterail: "steel",
};

smallCup = bigCup;

type Brew = { brewTime: number };

const coffee = { brewTime: 5, beans: "arabica" };
const chaiBrew: Brew = coffee;

type User = {
  userName: string;
  password: string;
};

const u: User = {
  userName: "chiacode",
  password: "1234",
};

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  Item: Item[];
  address: Address;
};

// type Chai = {
//   name: string;
//   price: number;
//   isHot: boolean;
// };

// const updateChai = (updates: Partial<Chai>) => {
//   console.log("updating chai with", updates);
// };

// updateChai({ price: 25 });

// updateChai({ isHot: false });

// updateChai({});

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({ name: "masala Chai", quantity: 2 });

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasiChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasiChaiInfo = {
  name: "Lemon Tea",
  price: 30,
};

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};


type PublicChai =Omit<ChaiNew,"secretIngredients">

const newChai:PublicChai={
    name:"milk tea",
    price:5,
    isHot:true
}

