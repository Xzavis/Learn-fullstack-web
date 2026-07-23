import os from "os";

console.info(`Platform          : ${os.platform()}`);
console.info(`Arsitektur        : ${os.arch()}`);
console.info(`Free Memory       : ${os.freemem()}`);
console.info(`home Directory    : ${os.homedir()}`);
console.info(`hostname          : ${os.hostname()}`);
console.table(os.cpus());

