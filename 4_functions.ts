function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}
interface MyPositionWithDefault extends MyPosition {
  default: string;
}

//Опред-ли потен-е функ-ции position
function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;
//опред-е самой функ-и
function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }
  if (a && !b) {
    return { x: a, y: undefined, default: toString() };
  }
  return { x: a, y: b };
}
console.log("Empty", position()); //{x: undefined, y:undefined}
console.log("One param:", position(42)); //{x:42 , y:undefined, default: "42" }
console.log("Two param:", position(10, 15)); //{x:10,y:15}
