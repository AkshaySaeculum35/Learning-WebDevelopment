//module import file

//default import
import mul from "./mathOperationsM.mjs";

//named import
import { add, subtract } from "./mathOperationsM.mjs";

console.log(mul(2, 2));
console.log(add(2, 2));
console.log(subtract(2, 2));
