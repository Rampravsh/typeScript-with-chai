const chaiFlavours: string[] = ["Masala", "adarak"];

const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 5.9];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "masala", price: 15 },
  { name: "Adrak", price: 25 },
];

const cities: readonly string[] = ["delhi", "jaipur"];

// cities.push("patna")

const table: number[][] = [
  [1, 2, 3, 4, 5],
  [5, 6, 6, 4, 3, 4],
];

let chiaTuple: [string, number];
chiaTuple = ["masala", 20];

let userInfo: [string, number, boolean?];

userInfo = ["rampravesh", 100];
userInfo = ["rampravesh", 100, true];

const location: readonly [number, number] = [23, 42];

const chaiItems: [name: string, price: number] = ["masala", 40];

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum Stauss {
  PENDING = 100,
  SERVED, //101
  CANCELLED, //102
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making:${type}`);
}

makeChai(ChaiType.GINGER);

enum RandomEnum {
  ID = 1,
  NAME = "chai",
}

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const s = Sugars.HIGH;


let t:[string,number]=['chai',10] 
t.push('extra') //tuple me element push kar sakte hai per jaha pe readOnly properties ho baha pe nahi

