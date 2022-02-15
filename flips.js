// Import the coinFlip function from your coin.mjs file
import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from 'minimist'
// Call the coinFlip function and put the return into STDOUT

const args = minimist(process.argv.slice(2));
const num = args.num || 1;

let flips = coinFlips(num)

console.log(flips)
console.log(countFlips(flips))