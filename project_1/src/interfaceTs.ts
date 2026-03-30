type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

// function makeChai(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }

// function serveChai(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaReacipe = {
  water: number;
  milk: number;
};

// class MasalaChai implements TeaReacipe {
//   water = 100;
//   milk = 50;
// }

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// type Response ={ok:true}|{ok:false}
// class myRes implements Response{
//     ok: boolean=true
// }

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type masalaChai = BaseChai & Extra;

const cup: masalaChai = {
  teaLeaves: 2,
  masala: 1,
};

type User = {
  userName: string;
  bio?: string;
};

const u1: User = {
  userName: "Rampravesh kuma",
};

const u2: User = { userName: "Rampravesh kumar", bio: "Rpk.dev" };

type Config ={
    readonly appName:string;
    version:number;
}

const cfg:Config ={
    appName:"Masterji",
    version:1
}

// cfg.appName='chaiAurCode'
