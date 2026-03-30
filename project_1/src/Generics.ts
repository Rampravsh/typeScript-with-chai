function wrapINArray<T>(item: T): T[] {
  return [item];
}

// console.log(wrapINArray("masala"));
// console.log(wrapINArray(42));

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", "ginger");
pair("masala", { flavor: "Ginger" });

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 10 };
const numberBoxCup: Box<string> = { content: "10" };


interface ApiPromise<T>{
    status:number,
    data:T
}

const res:ApiPromise<{flavor:string}>={
    status:200,
    data:{flavor:'masala'}
}