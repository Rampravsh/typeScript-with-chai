let subs: number | string = "1M";

let apiRequestStatus: "pending" | "success" | "error" = "pending";

apiRequestStatus = "success";

let airLineSeat: "aisle" | "window" | "middle" = "middle";

airLineSeat = "window";

const orders = ["12", "20", "29", "43"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "29") {
    currentOrder = order;
    break;
  }
}

// currentOrder =42

console.log(currentOrder);
