import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// answer
const pertanyaan = await rl.question(`Siapa Nama Anda: `);
// output
console.info(`halo ${pertanyaan} !, Thanks for feedback :>`);

rl.close();