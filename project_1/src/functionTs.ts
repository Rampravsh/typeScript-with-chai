function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} of ${type}`);
}

makeChai("masala", 2);

function getChaiPrice(): number {
  return 25;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logChai(): void {
  console.log(`chai is ready`);
}

// function orderChai(type?:string){
//     //
// }

function orderChai(type: string = "masala") {
  //
}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "lage";
}) {
  console.log("chai");
}
