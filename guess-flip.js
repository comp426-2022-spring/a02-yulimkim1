import { flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist';

const args = minimist(process.argv.slice(2))

if (args.call == "heads" || args.call == "tails") {
    const call = args.call;
    console.log(flipACoin(call))
}
else {
    console.log("Error: no input.\nUsage: node guess-flip.js --call=[heads|tails]")
}