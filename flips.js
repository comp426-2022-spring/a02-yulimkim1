// Import the coinFlip function from your coin.mjs file
import { coinFlips } from "./modules/coin.mjs";
import minimist from 'minimist'
// Call the coinFlip function and put the return into STDOUT

const args = minimist(process.argv.slice(2));
const num = args.num || 1;

console.log(coinFlips(num))
